#!/bin/bash
set -e

git add .

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
    echo "This script must be run from the 'main' branch. Current branch: $current_branch. \n Please switch to 'main' and try again."
    exit 1
fi

if [ -z "$1" ]; then
    echo "Usage: ./commit_and_deploy.sh <commit message>."
    exit 1
fi

git commit -m "$1"

# save current branch, switch to deploy, merge main, push, then return
current_branch=$(git rev-parse --abbrev-ref HEAD)
git checkout deploy
git merge main
git push origin deploy
git checkout "$current_branch"