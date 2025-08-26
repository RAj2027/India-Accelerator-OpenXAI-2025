import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body
        style={{
          backgroundColor: "black",
          color: "whitesmoke",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <h1>Ollama Basic ChatApp</h1>
        <h3>This is a Basic Chat bot, an extension of Ollama LLM, llama3 param.</h3>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
