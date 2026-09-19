import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import ThemeRegistry from "@/components/ThemeRegistry";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.title} | ${site.conference} Workshop`,
  description: `${site.conference} workshop: ${site.title}`,
};

export const viewport: Viewport = {
  themeColor: "#294270",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
