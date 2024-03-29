"use client"
import {useState} from "react";

export default function RegisterPage() {
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const handleSubmit = (data: FormData) => {
        setSubmit(true)
            const object: {[key: string]: string} = {}
            data.forEach((value, key) => object[key] = value.toString());
            fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(object)
            }).then(res => {
                setSubmit(false);
                if (res.status !== 200) {
                    setError(res.statusText)
                }
            })
    }
    return (
        <form action={handleSubmit} className="flex flex-col justify-center items-center">
            {error && <span className="text-red-500">{error}</span>}
            <label>
                Email
                <input name="email"/>
            </label>
            <label>
                Username
                <input name="username"/>
            </label>
            <label>
                Password
                <input name="password" type="password"/>
            </label>
            <input type="submit" disabled={submit}/>
        </form>
    )
}