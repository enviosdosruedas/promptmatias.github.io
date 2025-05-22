
# EnviosDosRuedas

## Description

EnviosDosRuedas is a modern web application designed for a motorcycle courier and delivery service. It allows users to quickly get quotes for their deliveries and provides an overview of the services offered. The application is built with a focus on a professional and trustworthy user experience.

## Features

*   **Hero Section:** A prominent hero section on the homepage with a clear message and a call-to-action button ("Cotizá tu envío") to encourage user engagement.
*   **Service Overview:** A dedicated section showcasing the main delivery services offered by EnviosDosRuedas, helping users understand the range of options available.
*   **Quotation System Integration:** (Assumed based on "Cotizá tu envío" button and various cotizador pages) - Links or integrated forms to allow users to get quotes for different types of delivery services (Express, Low-Cost, etc.).
*   **Responsive Design:** The application is designed to work seamlessly across various devices and screen sizes.
*   **Modern UI/UX:** Utilizes ShadCN UI components and Tailwind CSS for a clean, modern, and aesthetically pleasing user interface.
*   **Footer:** A basic footer component displaying copyright information.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [Shadcn/ui](https://ui.shadcn.com/) (built on Radix UI and Tailwind CSS)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **AI (Potentially):** [Genkit](https://firebase.google.com/docs/genkit) (available in the stack for future AI-powered features)
*   **TypeScript:** For type safety and improved developer experience.

## Installation

To set up and run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd EnviosDosRuedas
    ```

2.  **Install dependencies:**
    It's recommended to use `pnpm` if available, but `npm` or `yarn` will also work.
    ```bash
    # Using pnpm
    pnpm install

    # Or using npm
    npm install

    # Or using yarn
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory of the project. You might need to add environment variables for specific services if they are integrated (e.g., Google Maps API key for cotizador components, Genkit API keys).
    Example:
    ```env
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

4.  **Run the development server:**
    ```bash
    # Using pnpm
    pnpm run dev

    # Or using npm
    npm run dev

    # Or using yarn
    yarn dev
    ```
    The application will typically be available at `http://localhost:3000` or `http://localhost:9002` (as per your current `package.json`).

## Usage

Once the development server is running:

1.  Open your web browser and navigate to the local address (e.g., `http://localhost:9002`).
2.  You will see the homepage featuring the Hero Section and Service Overview.
3.  The "Cotizá tu envío" button in the Hero Section should (eventually) lead to a quotation page or modal.
4.  The navigation bar (Header) allows access to different sections of the application, such as various service pages, quotation tools, and contact information.
5.  The Footer displays copyright information.

## File Structure

The project follows a standard Next.js App Router structure:

```
EnviosDosRuedas/
├── public/                 # Static assets (images, icons, fonts, etc.)
│   ├── icon/
│   └── img/
├── src/
│   ├── app/                # Next.js App Router: pages, layouts, and route handlers
│   │   ├── (subdirectories)/ # Route groups and specific page routes
│   │   │   └── page.tsx    # Page components
│   │   ├── globals.css     # Global styles and Tailwind CSS layers
│   │   ├── layout.tsx      # Root layout for the application
│   │   └── page.tsx        # Homepage component
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   ├── sections/       # Larger page sections (HeroSection, ServiceOverview, etc.)
│   │   └── ui/             # ShadCN UI components
│   ├── hooks/              # Custom React hooks (e.g., use-mobile)
│   ├── lib/                # Utility functions (e.g., cn for Tailwind class merging)
│   └── styles/             # Specific CSS files for components (e.g., navbar.css, footer.css)
├── .env.local              # Local environment variables (not committed to Git)
├── .eslintrc.json          # ESLint configuration
├── components.json         # Shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

This structure helps in organizing the codebase logically, separating concerns, and making it easier to navigate and maintain.
