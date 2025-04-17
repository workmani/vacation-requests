import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/providers/theme-provider";
import SessionProviderWrapper from "../src/providers/SessionProviderWrapper";

export const metadata: Metadata = {
  title: "Vacation Request App",
  description: "Request and manage time off for your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProviderWrapper>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex flex-1">
                <aside className="hidden w-64 border-r lg:block p-4">
                  <MainNav />
                </aside>
                <main className="flex-1 p-6">{children}</main>
              </div>
            </div>
          </SessionProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
