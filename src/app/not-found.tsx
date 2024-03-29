import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-950 h-full w-full text-white text-lg font-bold">
            PAGE NOT FOUND
            <Link href="/" className="underline">Go home</Link>
        </div>
    )
}