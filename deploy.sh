#!/bin/bash

# Run build script
yarn build

# Add changes and commit
cd dist
git add --all
git commit -m "Deploy to GitHub Pages"

# Push changes
git push origin gh-pages
