#!/bin/bash

cd "$(dirname "$0")"

if ! which jekyll; then
    echo "I need to install Jekyll to run this site." >&2
    echo "Please enter your password to install:" >&2
    sudo gem install jekyll
    echo "Jekyll installed."
fi

(
    sleep 1;
    open http://localhost:4000
) &

jekyll serve --port 4000
