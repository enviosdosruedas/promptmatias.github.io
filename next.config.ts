
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // typescript: {
  //   ignoreBuildErrors: true, // Temporarily removed for debugging
  // },
  // eslint: {
  //   ignoreDuringBuilds: true, // Temporarily removed for debugging
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { // Added based on CSP requirements for placeholders
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async headers() {
    const cspDirectives = [
      "default-src 'self'",
      // Allow scripts from self, inline (for Next.js internals, styles), unsafe-eval (for Next.js dev HMR), and Google Maps & social media embeds
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.instagram.com https://connect.facebook.net",
      // Allow styles from self, inline (Tailwind, ShadCN), Google Fonts & social media embeds
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.instagram.com https://www.facebook.com",
      // Allow images from self, data URIs, placeholder services, and Google Maps
      "img-src 'self' data: https://placehold.co https://picsum.photos https://maps.gstatic.com https://*.googleapis.com https://*.ggpht.com",
      // Allow fonts from self and Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Allow connections to self, Google Maps API, and Genkit AI (assuming Gemini)
      "connect-src 'self' https://maps.googleapis.com https://generativelanguage.googleapis.com",
       // Allow framing from self and specific social media platforms
      "frame-src 'self' https://www.instagram.com https://www.facebook.com",
      // Disallow plugins like Flash
      "object-src 'none'",
      // Restrict base URI
      "base-uri 'self'",
      // Restrict form actions
      "form-action 'self'",
      // Replaces X-Frame-Options to prevent clickjacking, allowing framing only from 'self'
      "frame-ancestors 'self'",
      // Upgrade insecure requests to HTTPS
      "upgrade-insecure-requests"
    ];

    return [
      {
        source: '/:path*', // Apply to all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // X-Frame-Options is superseded by CSP frame-ancestors.
          // If you absolutely need it for very old browsers, you could add:
          // {
          //   key: 'X-Frame-Options',
          //   value: 'SAMEORIGIN',
          // }
          // But frame-ancestors is the modern and recommended approach.
        ],
      },
    ];
  },
};

export default nextConfig;
