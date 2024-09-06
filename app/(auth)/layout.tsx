
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mood Scribe",
  description: "Capture your thoughts, feelings, and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex h-16 w-full items-center justify-between bg-gray-100 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Mood Scribe</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              prefetch={false}
            >
              Sign In
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
