"use client"
import { useEffect, useRef, useState } from "react";
import { deleteCookie, setCookie } from "cookies-next";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
    FloatingArrow,
    arrow,
    autoUpdate,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useInteractions
} from "@floating-ui/react";
import Link from "next/link";

export function LoginCorner() {
    const [username, setUsername] = useState(null);
    const [open, setOpen] = useState(false);
    const arrowRef = useRef(null)

    const { refs, floatingStyles, context, elements, update } = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [shift(), offset(48), arrow({ element: arrowRef })],
    })

    useEffect(() => {
        if (open && elements.reference && elements.floating) {
            return autoUpdate(
                elements.reference,
                elements.floating,
                update,
            );
        }
    }, [open, elements, update]);

    const click = useClick(context)
    const dismiss = useDismiss(context)

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss
    ]);

    useEffect(() => {
        fetch("/api/getUserData").then(res => res.json()).then(data => setUsername(data.username));
    }, [])

    const handleSubmit = (data: FormData) => {
        const object: { [key: string]: string } = {}
        data.forEach((value, key) => object[key] = value.toString());
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(object)
        }).then(res => res.json()).then(res => {
            setCookie("login", res.email);
            setUsername(res.username);
        })
    }

    return (
        <>
            <div className="hidden data-[shown=true]:block bg-blue-500  p-4 shadow-floating-card rounded-md" data-shown={open} style={floatingStyles} {...getFloatingProps()} ref={refs.setFloating} >
                <FloatingArrow ref={arrowRef} context={context} height={12} width={16} className="fill-blue-500" />
                {username == null ?
                    <form className="flex flex-col items-center" action={handleSubmit}>
                        <label className="flex flex-col">
                            Email
                            <input name="email" />
                        </label>
                        <label className="flex flex-col">
                            Password
                            <input type="password" name="password" />
                        </label>
                        <input type="submit" className="bg-yellow-400 rounded-md py-2 px-8" />
                        <Link href={"/register"} className="underline">Register</Link>
                    </form>
                    :
                    <div className="flex flex-col items-center">
                        <Link href={"/userinfo"} onClick={() => setOpen(false)}>Profile</Link>
                        <button onClick={() => {
                            deleteCookie("login");
                            setUsername(null);
                        }}>Logout</button>
                    </div>}
            </div>
            <div className="text-white flex items-center" onClick={() => setOpen(!open)} ref={refs.setReference} {...getReferenceProps()}>
                <span>{username ? username : "Not logged in..."}</span>
                <Icon icon="material-symbols:arrow-drop-down" fontSize="2em" />
            </div>
        </>
    )
}