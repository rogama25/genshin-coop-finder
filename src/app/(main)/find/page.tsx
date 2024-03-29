"use client"

import bosses from "@/resources/bosses.json"
import specialties from "@/resources/specialties.json"
import Image from "next/image"
import {validateSavedPlayerData} from "@/validations/validatePlayerData";
import {redirect} from "next/navigation";
import {useEffect, useLayoutEffect, useState} from "react";
import Link from "next/link";
import {useSocket} from "@/context/SocketContext";

export default function Find() {
    const [connected, setConnected] = useState(false);
    useLayoutEffect(() => {
        if (!validateSavedPlayerData()) {
            redirect("/")
        }
    }, []);

    const socket = useSocket();

    useEffect(() => {
        function updateStatus() {
            setConnected(socket?.connected || false)
        }
        
        socket?.on("connect", updateStatus);
        socket?.on("disconnect", updateStatus);
        updateStatus();
    }, [socket]);

    return (
        <div className="w-full h-full bg-blue-950 text-white flex flex-col items-center justify-center">
            <p>Find page</p>
            <div className="flex items-center justify-center flex-wrap">
                <div className="flex flex-col items-center justify-center">
                    <p>Bosses</p>
                    <div className="grid grid-cols-2">
                        {bosses.map((boss) => (
                            <div key={boss.name} className="flex items-center gap-4">
                                <Image src={"/img/bosses/" + boss.image} alt={boss.name} width={48} height={48} />
                                <label>
                                    <input type="checkbox" />
                                    {boss.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="flex flex-col items-center justify-center">
                    <p>Specialties</p>
                    <div className="grid grid-cols-2">
                        {specialties.map((specialty) => (
                            <div key={specialty.name} className="flex items-center gap-4">
                                <Image src={"/img/specialties/" + specialty.image} alt={specialty.name} width={48} height={48} />
                                <label>
                                    <input type="checkbox" />
                                    {specialty.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link href="/finding">
                <button type="button" className="bg-yellow-400 disabled:bg-yellow-800 border-yellow-600 border-2 rounded-md py-2 px-10" disabled={!connected}>Find</button>
            </Link>
        </div>
    )
}