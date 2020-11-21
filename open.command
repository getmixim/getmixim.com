#!/bin/bash

cd "$(dirname "$0")"

bundle install --path vendor/bundle

(
    sleep 1;
    open http://localhost:4000
) &

bundle exec jekyll serve --port 4000 --livereload
