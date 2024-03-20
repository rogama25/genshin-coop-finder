import type { Metadata } from "next";
import "./globals.css"
import { NavBar } from "@/app/navbar";

export const metadata: Metadata = {
    title: "Genshin co-op finder",
    description: "Find teams to farm coop resources or bosses"
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-blue-950">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
