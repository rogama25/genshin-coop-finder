import Image from 'next/image';
import myIcon from "@/resources/genshin-coop.svg";
import Link from 'next/link';

export function NavBar() {
    return (
        <div className="h-20 bg-blue-900 flex items-center px-8 justify-between">
            <div className="max-h-16 max-w-16 relative">
                <Link href="/">
                    <Image src={myIcon} alt="logo" />
                </Link>
                <b className="absolute bottom-0 right-0 -rotate-45 bg-white pointer-events-none">BETA</b>
            </div>
            <div className="text-white flex gap-4 text-lg">
                <Link href="/" className="rounded-md border-2 border-white px-2 py-1">
                    Find realtime
                </Link>
                <Link href="/forum" className="rounded-md border-2 border-white px-2 py-1">
                    Find forum-style
                </Link>
            </div>
            <div>
                {//<LoginCorner />
                }
                <Link href="/login">
                    <button className="bg-[#5865F2] text-white font-bold py-2 px-4 rounded">
                        Log in with Discord
                    </button>
                </Link>
            </div>
        </div>
    )
}