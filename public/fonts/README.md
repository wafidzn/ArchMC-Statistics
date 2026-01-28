# Font Setup

## Adding Effra Font

To use the Effra font in this project:

1. Place your `effra.ttf` file in this directory (`public/fonts/`)
2. The font is already configured in `src/app/globals.css` to load from `/fonts/effra.ttf`
3. Since Effra is a variable font, it supports the full weight range (100-900)

## File Structure
```
public/
  fonts/
    effra.ttf  <- Place your font file here
    README.md  <- This file
```

## Usage
The font is automatically applied globally and can be used with Tailwind classes:
- `font-effra-light` (300)
- `font-effra-regular` (400) 
- `font-effra-medium` (500)
- `font-effra-semibold` (600)
- `font-effra-bold` (700)

Or with custom font-weight values since it's a variable font.