import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Pantry",
  description:
    "Pantry is an AI recipe app that generates personalized meal ideas using ingredients you already have. Discover recipes, plan meals, and cook smarter with ease.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        >
          <Header />
          <main>{children}</main>
          {/* Footer */}
          <footer className="py-8 px-4 border-t bg-stone-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3"></div>
              <p className="text-stone-400 text-sm">Made with 💗 by Pantry</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
