---
description: Commit changes to a new branch, push, and open a pull request against main
disable-model-invocation: true
allowed-tools: Bash(git *) Bash(gh *) Read Edit
---

## Current working tree

Status:

```!
git status --short && echo "---" && git branch --show-current
```

Diff (staged + unstaged):

```!
git diff HEAD
```

Recent commits:

```!
git log --oneline -5
```

## Task

Create a new branch, commit all changes, push, and open a pull request against `main`.

1. Generate a branch name and commit message:
   - If `$ARGUMENTS` is provided: use it as the commit message
   - If `$ARGUMENTS` is empty: analyze the diff above and generate a concise, conventional commit message (e.g., "fix: correct navbar spacing on mobile" or "feat: add project timeline component")
   - Slugify for the branch name: lowercase, replace spaces with hyphens, strip punctuation
   - Prefix with `claude/` so the branch is clearly identified
   - Example: `$ARGUMENTS = "Fix navbar spacing"` → branch `claude/fix-navbar-spacing`
2. Create and checkout the new branch: `git checkout -b <branch-name>`
3. Stage all changes: `git add -A`
4. Commit with the generated message
5. Push the new branch: `git push -u origin <branch-name>`
6. Create a PR using `gh pr create`:
   - `--base main`
   - `--head <branch-name>`
   - `--title` from the commit message (first line of `$ARGUMENTS`)
   - `--body` auto-generated: summarize the diff in 2-3 bullet points, reference any related issues if mentioned in the message
   - Return the PR URL to the user
7. Run the quality gate (`npm run test -- --run && npm run lint && npm run typecheck && npm run build`) and report the result. If it fails, add a comment to the PR with the failure details.

**Important:** If the current branch is already `main`, proceed as above. If already on a feature branch, still branch off the current HEAD and target `main` with the PR.
