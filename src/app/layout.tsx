import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "Car Rental App",
  description: "Rrnt Cars anywhere,hop in ,Ride on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
      <MantineProvider>{children}</MantineProvider>

      </body>
    </html>
  );
}
