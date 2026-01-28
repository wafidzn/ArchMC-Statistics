# Dynamic OpenGraph Image Generator

This API route generates dynamic OpenGraph images for social media embeds.

## Current Setup
- **Background**: Matches your homepage grey (`#171717`)
- **Logo**: Currently shows a placeholder "A" in orange
- **Layout**: Centered logo with title and subtitle below

## Customizing the Logo

### Option 1: Use your favicon
Replace the current logo section with:
```jsx
<img
  src="/favicon.ico"
  width="100"
  height="100"
  alt="ArchMC Logo"
  style={{ borderRadius: '16px' }}
/>
```

### Option 2: Use a dedicated logo file
1. Add your logo to `public/assets/images/logo.png`
2. Replace the logo section with:
```jsx
<img
  src="/assets/images/logo.png"
  width="100"
  height="100"
  alt="ArchMC Logo"
/>
```

### Option 3: Use SVG logo inline
Replace the current `<img>` tag with your actual SVG code.

## URL Parameters
You can customize the generated image with URL parameters:
- `title`: Custom title text
- `subtitle`: Custom subtitle text

Examples:
- `/api/og` - Default homepage image
- `/api/og?title=Player%20Stats&subtitle=View%20your%20game%20statistics`
- `/api/og?title=Leaderboards&subtitle=Top%20players%20and%20rankings`

## Testing
Visit `/api/og` in your browser to see the generated image.