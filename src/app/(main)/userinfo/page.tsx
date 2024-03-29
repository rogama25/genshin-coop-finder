import { redirect } from "next/navigation"

export default function UserInfo() {
    redirect("/")
    return (
        <div className="w-full h-full bg-blue-950 text-white">
            <p>User info page</p>
        </div>
    )
}