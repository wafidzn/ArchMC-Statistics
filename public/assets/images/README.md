# Images Directory

## OpenGraph Image Setup

### Required Image: `og-image.png`
- **Dimensions**: 1200x630 pixels
- **Format**: PNG or JPG
- **Purpose**: Used for social media embeds (Twitter, Discord, Facebook, etc.)
- **Location**: Place your image at `public/assets/images/og-image.png`

### Image Guidelines:
- Keep text readable at small sizes
- Use high contrast colors
- Include your logo/branding
- Avoid small text that becomes unreadable when scaled down
- Test how it looks on different platforms

### Current Configuration:
The embed system is configured to use `/assets/images/og-image.png` for:
- OpenGraph meta tags
- Twitter Cards
- Discord embeds
- Other social media platforms

### Customization:
You can update the image path in `src/config/embed.ts` if you want to use a different filename or location.