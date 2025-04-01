# Kinsons Terrazzo - Modern Website

A modern, elegant, and visually appealing website for Kinsons Terrazzo, a company specializing in high-quality flooring, countertops, and custom terrazzo solutions.

## Features

- Responsive design optimized for all devices
- Dynamic components with mapping for easy content management
- Modern UI with elegant animations and transitions
- Dark mode support
- Interactive sections showcasing terrazzo services and projects
- Contact form with validation

## Pages & Sections

- **Home Page**: Hero section, services overview, benefits, featured projects, testimonials, FAQ, and contact form
- **About Us**: Company history, mission, team members
- **Services**: Detailed information about terrazzo flooring, countertops, and custom solutions
- **Projects**: Portfolio of past terrazzo installations with filtering by category
- **Testimonials**: Customer reviews and feedback
- **Contact**: Contact form, map, and company information

## Tech Stack

- React 19
- TypeScript
- Flowbite React - UI component library
- TailwindCSS - Utility-first CSS framework
- React Router - Navigation and routing

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/kinsonsterrazzo.git
cd kinsonsterrazzo
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
kinsonsterrazzo/
├── public/
│   ├── images/
│   │   ├── services/
│   │   ├── projects/
│   │   └── testimonials/
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## Customization

- **Colors**: Edit the `tailwind.config.js` file to customize the color scheme
- **Content**: Update the data arrays in the component files to change the content
- **Images**: Replace placeholder images in the `public/images/` directory with your own

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The optimized build will be created in the `dist` directory, ready to be deployed to your hosting provider.

### GitHub Pages Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub username and repository name:

```json
"homepage": "https://yourusername.github.io/kinsonsterrazzo"
```

2. Make sure the `base` path in `vite.config.ts` matches your repository name:

```typescript
base: "/kinsonsterrazzo/";
```

3. Deploy using npm:

```bash
npm run deploy
```

Alternatively, push to the main branch and GitHub Actions will automatically deploy the site.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Images: Replace with your own or use from stock photo websites
- Icons: Heroicons included with Flowbite React
- Fonts: Inter and Montserrat from Google Fonts
