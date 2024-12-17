import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podcaster",
  description: "Generated your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
