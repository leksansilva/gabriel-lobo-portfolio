import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Providers } from './(common)/components';
import { siteConfig } from './(common)/constants';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `${siteConfig.name} | %s`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: '/images/retrato.jpg', width: 1200, height: 1600 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/retrato.jpg'],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={siteConfig.locale}
      suppressHydrationWarning
      className={`${cormorantGaramond.variable} ${jost.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
