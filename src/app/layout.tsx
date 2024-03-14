import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Genshin co-op finder",
    description: "Find teams to farm coop resources or bosses"
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
