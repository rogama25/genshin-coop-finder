"use client"

import Link from "next/link";
import {useMemo} from "react";
import useLocalStorageState from "use-local-storage-state";
import {validatePlayerData} from "@/validations/validatePlayerData";

export default function Home() {
    const [username, setUsername] = useLocalStorageState("username", {defaultValue: ""});
    const [uid, setUid] = useLocalStorageState("uid", {defaultValue: ""});
    const [worldLevel, setWorldLevel] = useLocalStorageState("worldLevel", {defaultValue: ""});

    const validationErrors = useMemo(() => validatePlayerData({username, uid, worldLevel}), [username, uid, worldLevel]);

    return (
        <div className="w-full h-full bg-blue-950 text-white flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center flex-grow">
                <div className="flex flex-col justify-center items-center text-center p-8">
                    <h1 className="text-4xl font-bold mb-3">Welcome to Genshin coop finder</h1>
                    <h2 className="text-xl font-bold">Find a team to farm materials</h2>
                    <p className="mb-3">You are just a few clicks away of finding some fellow travelers to farm materials for character and weapon ascensions. Maybe you'll find some friends along the way :)</p>
                    <h2 className="text-xl font-bold">Fast and easy</h2>
                    <p className="mb-3">Fill the form with your Genshin player data, click find, then choose your materials or bosses and click start.</p>
                    <h2 className="text-xl font-bold">Always improving</h2>
                    <p className="mb-3">This website is completely free and and open source, you can contribute in <Link href="https://github.com/rogama25/genshin-coop-finder" className="underline">Github</Link></p>
                    <p className="text-sm text-gray-400">Please don't share your in-game password with anyone</p>
                </div>
                <form className="flex flex-col items-center gap-4 text-right">
                    <p className="text-4xl">Player data</p>
                    <label className="grid grid-cols-2 gap-4 items-center">
                        Username
                        <input type="text" className={"text-black border-2 rounded-sm bg-blue-100 p-2" + (validationErrors.includes("username") ? " border-red-600" : "")} size={10} onChange={e => setUsername(e.target.value)} value={username} />
                    </label>
                    <label className="grid grid-cols-2 gap-4 items-center">
                        UID
                        <input type="text" min="600000000" max="899999999" className={"text-black border-2 rounded-sm bg-blue-100 p-2" + (validationErrors.includes("uid") ? " border-red-600" : "")} size={10} onChange={e => setUid(e.target.value)} value={uid} />
                    </label>
                    <label className="grid grid-cols-2 gap-4 items-center">
                        World Level
                        <input type="text" min="1" max="8" className={"text-black border-2 rounded-sm bg-blue-100 p-2" + (validationErrors.includes("worldLevel") ? " border-red-600" : "")} size={10} onChange={e => setWorldLevel(e.target.value)} value={worldLevel} />
                    </label>
                    <Link href="/find">
                        <button type="button" className="bg-yellow-400 disabled:bg-yellow-800 border-yellow-600 border-2 rounded-md py-2 px-10" disabled={validationErrors.length > 0}>Find</button>
                    </Link>
                    <p><span className="text-yellow-600">0</span> people online</p>
                </form>
            </div>
            <div className="bg-gray-700">
                <p className="text-sm p-2">This website is not affiliated in any way with Hoyoverse or Genshin Impact.
                    Genshin Impact, game content and materials are trademarks and copyrights of Hoyoverse. Content used
                    here falls under the fair-use regulations.</p>
            </div>
        </div>
    );
}
