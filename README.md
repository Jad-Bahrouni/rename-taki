# Takiacademy File Renamer

A Chrome extension that automatically renames downloaded files from Takiacademy by removing random prefixes before the first underscore.

## Problem

Files downloaded from Takiacademy often have random prefixes in their filenames, like:
- `e3a4qv5us8_math1.pdf`
- `a7b2c9d4e1_physics.pdf`
- `x9y8z7w6v5_notes.docx`

This extension automatically removes everything before the first underscore, resulting in clean filenames:
- `math1.pdf`
- `physics.pdf`
- `notes.docx`

## Features

- Automatically renames files during download
- Only processes files from Takiacademy (`app.takiacademy.com/sessions`)
- Preserves original filename if no underscore is found
- Lightweight and non-intrusive

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked"
5. Select the folder containing this extension

## Usage

Once installed, the extension works automatically. Simply download files from Takiacademy as you normally would, and they will be renamed automatically.

## Files

- `manifest.json` - Extension configuration
- `background.js` - Service worker that handles file renaming logic

## Permissions

- `downloads` - Required to intercept and rename downloaded files

## License

MIT License - feel free to use and modify as needed.

