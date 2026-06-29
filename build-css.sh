#!/bin/sh
# Rebuild the static, purged Tailwind stylesheet (tailwind.css).
# Run this whenever you add/change Tailwind classes in any .html file.
npx -y tailwindcss@3.4.19 -c tailwind.config.js -i tailwind.input.css -o tailwind.css --minify
