#!/usr/bin/env bash
# GOAL: Lock down a PUBLIC GitHub repo so nobody can push code except the owner.
# METHOD: Use GitHub CLI (gh) + GitHub REST API to:
#  - Remove unexpected collaborators
#  - Enable strong branch protection on main
#  - Ensure Actions permissions aren't overly permissive (best-effort)
# REQUIREMENTS:
#  - gh installed and authenticated: gh auth login
#  - You must have admin access to the repo
#  - Repo must exist

# Filled in your specific details:
OWNER="venomez-viper"
REPO="Portfolio"
BRANCH="main"

set -euo pipefail

echo "==> Checking gh auth..."
gh auth status

echo "==> Repo: $OWNER/$REPO  Branch: $BRANCH"

echo "==> Listing collaborators (with permission levels)..."
# NOTE: This lists collaborators. The agent should compare to an allowlist and remove unknown users.
gh api "repos/$OWNER/$REPO/collaborators?per_page=100" \
  --jq '.[] | {login, permissions}'

# OPTIONAL: Remove any collaborators NOT in allowlist.
# Put ONLY the logins you trust here. Usually just you.
ALLOWLIST=("$OWNER")

echo "==> Removing collaborators not in allowlist (best-effort)..."
COLLABS=$(gh api "repos/$OWNER/$REPO/collaborators?per_page=100" --jq '.[].login' || true)

for u in $COLLABS; do
  keep=false
  for a in "${ALLOWLIST[@]}"; do
    if [[ "$u" == "$a" ]]; then keep=true; break; fi
  done
  if [[ "$keep" == "false" ]]; then
    echo "    Removing collaborator: $u"
    gh api -X DELETE "repos/$OWNER/$REPO/collaborators/$u" || true
  else
    echo "    Keeping collaborator: $u"
  fi
done

echo "==> Applying strict branch protection on $BRANCH..."
gh api -X PUT "repos/$OWNER/$REPO/branches/$BRANCH/protection" \
  -H "Accept: application/vnd.github+json" \
  -f required_status_checks.strict=false \
  -f required_status_checks.contexts='[]' \
  -f enforce_admins=true \
  -f required_pull_request_reviews.dismiss_stale_reviews=true \
  -f required_pull_request_reviews.required_approving_review_count=1 \
  -f required_pull_request_reviews.require_code_owner_reviews=true \
  -f restrictions='null' \
  -f allow_force_pushes.enabled=false \
  -f allow_deletions.enabled=false

echo "==> (Optional) Restrict who can push to $BRANCH (only you)."
# IMPORTANT:
# - "restrictions" only works for org repos and some configurations.
# - For personal repos, branch protection + no collaborators already achieves the goal.
# We'll attempt it. If it fails, we print a note and continue.
set +e
gh api -X PUT "repos/$OWNER/$REPO/branches/$BRANCH/protection/restrictions/users" \
  -H "Accept: application/vnd.github+json" \
  -f users="[$OWNER]"
RC=$?
set -e
if [[ $RC -ne 0 ]]; then
  echo "    NOTE: Push restrictions may not be supported for this repo type. Branch protection + no collaborators is still sufficient."
fi

echo "==> Ensuring GitHub Actions isn't granting broad write permissions (best-effort)..."
set +e
gh api -X PUT "repos/$OWNER/$REPO/actions/permissions/workflow" \
  -H "Accept: application/vnd.github+json" \
  -f default_workflow_permissions=read \
  -f can_approve_pull_request_reviews=false
RC=$?
set -e
if [[ $RC -ne 0 ]]; then
  echo "    NOTE: Could not set workflow permissions via API (might be org-controlled or endpoint unsupported). Manually verify in Settings > Actions > General."
fi

echo "==> Final verification: show branch protection summary..."
gh api "repos/$OWNER/$REPO/branches/$BRANCH/protection" --jq '{
  enforce_admins: .enforce_admins.enabled,
  required_pr_reviews: .required_pull_request_reviews,
  allow_force_pushes: .allow_force_pushes.enabled,
  allow_deletions: .allow_deletions.enabled,
  restrictions: .restrictions
}'

echo "==> Done. Repo remains PUBLIC, but pushes are restricted to authorized users only."
