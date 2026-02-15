# FlipProfit Marketing Site

SEO-optimized marketing site for FlipProfit - built with Astro.

## Features

- **SEO Optimized**: Atomic answer targeting "How to scale a reselling business" for Featured Snippet
- **JSON-LD Schema**: SoftwareApplication + FAQPage schema markup
- **Fast Performance**: Static site generation with Astro
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Brand Consistent**: Uses FlipProfit colors (emerald green + slate blue) and Coiny font

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repo to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy to `flipprofit.online`

### Manual Deployment

```bash
npm run build
# Upload contents of `dist/` folder to your host
```

## Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── logo.png (512x512 gold coin logo)
│   │   └── logo-small.png (192x192)
│   └── favicon.png
├── src/
│   ├── pages/
│   │   └── index.astro (Landing page with SEO content)
│   └── styles/
│       └── global.css (Tailwind + brand colors)
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## SEO Strategy

### Target Keyword
"How to scale a reselling business"

### Content Strategy
1. **Atomic Answer**: 50-60 word definitive answer prominently placed
2. **Schema Markup**: FAQPage + SoftwareApplication schemas
3. **Semantic HTML**: Proper heading hierarchy (H1 → H2 → H3)
4. **Internal Linking**: Clear navigation to features and waitlist

### Meta Tags
- Title: "FlipProfit - Scale Your Reselling Business with AI Automation"
- Description: "The all-in-one SaaS platform for scaling reselling businesses through inventory automation, cross-listing management, and profit analytics."
- Open Graph + Twitter Card for social sharing

## Brand Assets

- **Colors**: Emerald green (#10b981), Slate dark, Gold accent
- **Font**: Coiny (Google Fonts) for logo/headings
- **Logo**: Gold coin with "FP" letters

## Future Enhancements

- [ ] Blog section for SEO content marketing
- [ ] Pricing page
- [ ] Customer testimonials
- [ ] Demo video
- [ ] Email capture integration (Mailchimp/ConvertKit)
- [ ] Analytics (Google Analytics/Plausible)
