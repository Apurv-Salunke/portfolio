#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required but not installed. Please install it first."
    exit 1
fi

# Directory containing the source SVG
SOURCE_DIR="public"
SOURCE_SVG="$SOURCE_DIR/icon.svg"

# Generate various sizes
convert -background none "$SOURCE_SVG" -resize 16x16 "$SOURCE_DIR/favicon-16x16.png"
convert -background none "$SOURCE_SVG" -resize 32x32 "$SOURCE_DIR/favicon-32x32.png"
convert -background none "$SOURCE_SVG" -resize 180x180 "$SOURCE_DIR/apple-touch-icon.png"
convert -background none "$SOURCE_SVG" -resize 192x192 "$SOURCE_DIR/android-chrome-192x192.png"
convert -background none "$SOURCE_SVG" -resize 512x512 "$SOURCE_DIR/android-chrome-512x512.png"

# Generate ICO file (contains multiple sizes)
convert "$SOURCE_DIR/favicon-16x16.png" "$SOURCE_DIR/favicon-32x32.png" "$SOURCE_DIR/favicon.ico"

echo "Favicon generation complete!" 