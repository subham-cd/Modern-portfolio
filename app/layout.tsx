import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Subham Singh - Full Stack Developer',
    template: '%s | Subham Singh'
  },
  description: 'Passionate Full Stack Developer specializing in MERN stack development. Building scalable web applications and solving real-world problems with clean, efficient code.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'MERN Stack', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Subham Singh' }],
  creator: 'Subham Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://subhamsingh.dev',
    title: 'Subham Singh - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in MERN stack development.',
    siteName: 'Subham Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subham Singh - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in MERN stack development.',
    creator: '@subhamsingh',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}