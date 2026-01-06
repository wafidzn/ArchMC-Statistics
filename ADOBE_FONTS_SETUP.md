# Adobe Fonts Setup for Effra

## Steps to configure Adobe Fonts:

1. **Go to Adobe Fonts**: Visit [https://fonts.adobe.com/fonts/effra](https://fonts.adobe.com/fonts/effra)

2. **Add Effra to your project**:
   - Click "Add to Web Project" or "Activate fonts"
   - Create a new web project or add to existing one
   - Select the weights you need:
     - Light (300)
     - Regular (400) 
     - Medium (500)
     - Bold (700)

3. **Get your Kit ID and ensure all weights are selected**:
   - After creating the project, Adobe will give you a Kit ID
   - It looks like: `abc1def2` (a short alphanumeric string)
   - **IMPORTANT**: Make sure you've selected ALL these font weights in your Adobe Fonts project:
     - Effra Light (300)
     - Effra Regular (400)
     - Effra Medium (500)
     - Effra Semibold (600) - if available
     - Effra Bold (700)

4. **Update the layout.tsx file**:
   - Replace `YOUR_KIT_ID` in `src/app/layout.tsx` with your actual Kit ID
   - The link should look like: `https://use.typekit.net/abc1def2.css`

5. **Verify the font name**:
   - In Adobe Fonts, check the CSS font-family name for Effra
   - It's usually just "effra" but might be different
   - Update the CSS in `globals.css` if needed

## Alternative: Using Adobe Fonts embed code

If you prefer, you can also use the JavaScript embed code that Adobe provides:

```html
<script>
  (function(d) {
    var config = {
      kitId: 'YOUR_KIT_ID',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
```

## Current Configuration

The project is set up to use:
- Font family: "effra"
- Fallbacks: ui-sans-serif, system-ui, sans-serif
- Applied globally through Tailwind CSS

Once you update the Kit ID, the Effra font will be loaded and applied throughout your application.
## Using 
Different Font Weights

Once set up, you can use these utility classes in your components:

```tsx
<h1 className="font-effra-light">Light text</h1>
<p className="font-effra-regular">Regular text</p>
<h2 className="font-effra-medium">Medium text</h2>
<h3 className="font-effra-semibold">Semibold text</h3>
<h1 className="font-effra-bold">Bold text</h1>
```

Or use Tailwind's font-weight utilities:
```tsx
<h1 className="font-light">Light (300)</h1>
<p className="font-normal">Regular (400)</p>
<h2 className="font-medium">Medium (500)</h2>
<h3 className="font-semibold">Semibold (600)</h3>
<h1 className="font-bold">Bold (700)</h1>
```

## Troubleshooting Font Weights

If font weights aren't working:
1. Check that all weights are selected in your Adobe Fonts project
2. Verify your Kit ID is correct in layout.tsx
3. Clear browser cache and reload
4. Check browser dev tools to see if fonts are loading properly