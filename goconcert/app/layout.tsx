import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Input } from "@/components/ui/input"
import { SidebarLayout } from "@/components/sidebar-layout";
// export function InputDemo() {
//   return <Input type="email" placeholder="Email" />
// }


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            {/* --- Navbar --- */}
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 z-50 bg-background">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href={"/"}>GoConcert</Link>
                  <Input type="text" placeholder="Search artists" />
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              </div>
            </nav>

            {/* --- Sidebar + Content --- */}
            <div className="flex flex-col w-full overflow-hidden">
              {/* <SidebarLayout> */}
                {/* <div className="flex-1 overflow-x-hidden p-5 max-h-[calc(100vh-4rem)]"> */}
                  {/* max-h 100vh minus navbar height (4rem=64px) */}
                  {children}
                {/* </div> */}
              {/* </SidebarLayout> */}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

