import {NavBar} from "@/components/NavBar";
import {SocketContextProvider} from "@/context/SocketContext";

export default function MainLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex-col w-full h-full flex">
            <div className="flex-shrink-0">
                <NavBar/>
            </div>
            <SocketContextProvider>
                <div className="flex-grow">
                    {children}
                </div>
            </SocketContextProvider>
        </section>
    );
}
