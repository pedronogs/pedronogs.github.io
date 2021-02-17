#!/bin/bash

# First switch to the gh-pages branch
git checkout gh-pages

# Next checkout the specific file you wish to add to the gh-pages branch
git checkout master -- dist

# Perfom the commit
git commit -m "[Deploy] Deployment to GitHub Pages"

# And push
git push 
