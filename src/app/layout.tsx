import type { Metadata } from "next";
import "@/app/globals.css"

export const metadata: Metadata = {
    title: "Genshin co-op finder",
    description: "Find teams to farm coop resources or bosses",
    icons: {
        icon: "/android-chrome-512x512.png",
        apple: "/apple-touch-icon.png"
    }
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-dvh w-dvw max-w-full max-h-full flex scrollbar-gutter-auto">
            <body className="flex-grow max-h-full max-w-full">
                {children}
            </body>
        </html>
    );
}
