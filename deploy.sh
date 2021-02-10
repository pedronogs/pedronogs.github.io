#!/bin/bash

# Run build script
yarn build

# Add folder to HEAD and commit deployment
git add dist && git commit -m "Deploying to GitHub Pages"

# Push to gh-pages branch
git subtree push --prefix dist origin gh-pages

