import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conversion Van Marketplace',
  description: 'Find your perfect conversion van - Browse our selection of high-quality vans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="font-bold text-xl mr-8">VanMarket</div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="hover:text-primary transition">Home</a>
              <a href="#" className="hover:text-primary transition">Inventory</a>
              <a href="#" className="hover:text-primary transition">Financing</a>
              <a href="#" className="hover:text-primary transition">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t py-12 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">VanMarket</h3>
                <p className="text-sm text-muted-foreground">
                  Your trusted source for quality conversion vans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>Inventory</li>
                  <li>Financing</li>
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li>FAQ</li>
                  <li>Shipping</li>
                  <li>Returns</li>
                  <li>Terms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>Email Us</li>
                  <li>Call: (555) 123-4567</li>
                  <li>Location</li>
                  <li>Dealers</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} VanMarket. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}