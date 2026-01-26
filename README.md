# BDA Built Website

A modern, award-winning commercial construction company website built with Next.js 14, Tailwind CSS, and Sanity CMS.

## Features

- **Modern Design**: Architectural minimalist aesthetic with premium animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **CMS Integration**: Sanity CMS for easy content management
- **Optimized Performance**: Next.js App Router with server components
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Pages

- **Home**: Hero, stats, featured projects, values, services overview, testimonials
- **About**: Company story, values, team members
- **Projects**: Filterable project gallery with detailed case studies
- **Services**: Commercial, industrial, retail, healthcare, education
- **Process**: Interactive 5-stage construction process timeline
- **Contact**: Contact form with company information

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bda-built-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Sanity project credentials to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sanity CMS Setup

### Creating a Sanity Project

1. Create a Sanity account at [sanity.io](https://www.sanity.io)

2. Create a new project:
```bash
npm create sanity@latest -- --project-id <your-project-id> --dataset production
```

3. Copy the schemas from `/sanity/schemas` to your Sanity project

4. Deploy the Sanity Studio:
```bash
npx sanity deploy
```

### Content Structure

The CMS includes the following content types:

- **Projects**: Portfolio items with images, specs, and case study content
- **Team Members**: Staff profiles with photos and bios
- **Services**: Service offerings with features and images
- **Testimonials**: Client testimonials
- **Site Settings**: Global site configuration (contact info, social links)

## Development

### Project Structure

```
bda-built-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── process/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/         # Navigation, Footer
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Reusable components
│   ├── lib/
│   │   ├── data.ts         # Static data (fallback)
│   │   ├── sanity.ts       # Sanity client & queries
│   │   └── utils.ts        # Helper functions
│   └── types/
│       └── index.ts        # TypeScript types
├── sanity/
│   ├── schemas/            # Sanity schema definitions
│   └── sanity.config.ts
├── public/
└── package.json
```

### Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Customization

#### Colors

Edit the color palette in `tailwind.config.ts`:

```ts
colors: {
  brand: {
    black: '#0a0a0a',
    charcoal: '#1a1a1a',
    // ... customize colors
  },
  accent: {
    gold: '#b8977e',
    copper: '#a67c52',
  }
}
```

#### Fonts

The site uses:
- **Inter**: Body text
- **Outfit**: Headings and display text

To change fonts, update `src/app/layout.tsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Content Updates

### Adding a New Project

1. Log in to Sanity Studio
2. Navigate to "Projects"
3. Click "Create new"
4. Fill in project details, upload images
5. Publish

### Updating Team Members

1. Navigate to "Team Members" in Sanity
2. Add/edit team member profiles
3. Upload photos and add bios
4. Publish changes

## Performance

The site is optimized for performance:

- **Images**: Automatic optimization with Next.js Image component
- **Fonts**: Font optimization with next/font
- **Code Splitting**: Automatic with App Router
- **Caching**: Sanity CDN for production

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Private - All rights reserved.

## Support

For technical support or questions, contact the development team.
