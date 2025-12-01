# GrownIQ - Next.js Landing Page

A modern, responsive landing page built with Next.js 14 and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🎯 Modern UI with gradient effects
- 🚀 Optimized for performance
- 📦 JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
grownIQ/
├── app/
│   ├── globals.css       # Global styles with Tailwind directives
│   ├── layout.js         # Root layout component
│   └── page.js           # Landing page component
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── jsconfig.json         # JavaScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

Edit `app/page.js` to modify the landing page content.

### Styling

Global styles are in `app/globals.css`. Component-specific styles use Tailwind utility classes.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT
