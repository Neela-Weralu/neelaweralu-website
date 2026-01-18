#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
git pull
git checkout deploy
git merge main
git push origin deploy
git checkout "$current_branch"