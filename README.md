# EnviosDosRuedas

![EnviosDosRuedas Logo](/public/LogoEnviosDosRuedas.webp)

## Description

EnviosDosRuedas is a Next.js web application that provides motorcycle courier and delivery services in Argentina. The platform allows users to request, quote, and manage various types of delivery services, from express deliveries to low-cost options for individuals and entrepreneurs.

## Features

- **Quotation System**: Multiple quotation tools tailored for different service types (Express, Low-Cost, Flex)
- **Service Overview**: Detailed information about all available delivery services
- **Interactive UI**: Modern, responsive user interface with intuitive navigation
- **Service-Specific Pages**: Dedicated pages for each service type with relevant information
- **Contact Forms**: Easy ways for users to get in touch and request services
- **FAQ Section**: Comprehensive answers to frequently asked questions
- **Business Solutions**: Specialized services for entrepreneurs and businesses
- **Coverage Areas**: Information about service coverage zones
- **Social Media Integration**: Links to the company's social media profiles

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 18](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI-based components)
- **Form Management**: React Hook Form with Zod validation
- **State Management**: React Query (TanStack Query)
- **Backend/Database**: Firebase (Firestore)
- **Authentication**: Firebase Auth
- **Maps Integration**: Google Maps API
- **Icons**: Lucide React
- **AI Integration**: GenKit for AI functionality
- **Charts**: Recharts for data visualization
- **Development Tools**: TypeScript, ESLint

## File Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── cotizador-*/        # Quotation pages
│   │   │   ├── cotizador-envios-express/  # Express delivery quotation
│   │   │   ├── cotizador-envios-express2/ # Alternative express quotation
│   │   │   ├── cotizador-envios-lowcost/  # Low-cost delivery quotation 
│   │   │   ├── cotizador-envios-lowcost2/ # Alternative low-cost quotation
│   │   │   └── CotizadorNuevo/            # New quotation system
│   │   ├── mensajeria-*/       # Messaging service pages
│   │   │   ├── mensajeria-envios-express/  # Express messaging service
│   │   │   └── mensajeria-envios-lowcost/  # Low-cost messaging service
│   │   ├── delivery-*/         # Delivery service pages
│   │   ├── sobre-nosotros/     # About Us page
│   │   ├── contacto/           # Contact page
│   │   ├── enviosflex/         # Flexible delivery page
│   │   ├── envios-emprendedores/ # Entrepreneurs services page
│   │   ├── nuestrasredes/      # Social networks page
│   │   └── preguntasfrecuentes/ # FAQ page
│   ├── components/             # React components
│   │   ├── ui/                 # UI components (shadcn/ui)
│   │   ├── sections/           # Page sections components
│   │   └── layout/             # Layout components (header, footer)
│   ├── lib/                    # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── styles/                 # CSS styles
│   └── ai/                     # AI integration
├── public/                     # Static assets
│   ├── img/                    # Images
│   ├── icon/                   # Icons
│   └── _auth/                  # Authentication assets
├── .env.local                  # Environment variables
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
└── package.json                # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/envios-dos-ruedas.git
cd envios-dos-ruedas
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST=9099-$WEB_HOST
NEXT_PUBLIC_FIRESTORE_EMULATOR_HOST=8080-$WEB_HOST
NEXT_PUBLIC_SITE_URL=https://enviosdosruedas.com/
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## Development

### Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts
- `npm run genkit:dev` - Run GenKit AI development server
- `npm run genkit:watch` - Run GenKit AI development server with watch mode

## Deployment

The application can be deployed on Vercel, Netlify, or any other Next.js-compatible hosting service.

### Build for Production

```bash
npm run build
# or
yarn build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

For any inquiries, please reach out to us through our [contact page](https://enviosdosruedas.com/contacto).