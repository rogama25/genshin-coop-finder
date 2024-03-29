import Image from "next/image";

export default function ChatRoom() {
    return (
        <div className="w-full h-full bg-blue-950 text-white grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-stretch justify-center p-4 gap-4">
                <div className="flex-1 flex flex-col justify-stretch border-2 rounded-md border-blue-600">
                    <div className="p-4 border-b-2 border-b-blue-600 font-bold text-lg">
                        <h2>Players in this room</h2>
                    </div>
                    <div className="flex-grow p-4">
                        <p>rogama25 <span className="text-gray-400">AR 50; UID 666666666</span></p>
                        <p>rogama25-2 <span className="text-gray-400">AR 50; UID 666666666</span></p>
                        <p>rogama25-3 <span className="text-gray-400">AR 50; UID 666666666</span></p>
                        <p>rogama25-4 <span className="text-gray-400">AR 50; UID 666666666</span></p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-stretch border-2 rounded-md border-blue-600">
                    <div className="p-4 border-b-2 border-b-blue-600 font-bold text-lg">
                        <h2>We matched you because you had those in common</h2>
                    </div>
                    <div className="flex-grow p-4 gap-2 flex flex-col">
                        <div className="flex items-center gap-4">
                            <Image src={"/img/bosses/Oceanid_Icon.webp"} alt="Oceanid" width={48} height={48}/>
                            <p>Oceanid</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={"/img/bosses/Oceanid_Icon.webp"} alt="Oceanid" width={48} height={48}/>
                            <p>Oceanid</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={"/img/bosses/Oceanid_Icon.webp"} alt="Oceanid" width={48} height={48}/>
                            <p>Oceanid</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-stretch justify-center p-4 gap-4">
                <div className="flex-grow flex flex-col justify-stretch border-2 rounded-md border-blue-600">
                    <div className="p-4 border-b-2 border-b-blue-600 font-bold text-lg">
                        <h2>Chat</h2>
                    </div>
                    <div className="flex-grow p-4">
                        <p className="text-gray-400">rogama25 joined the room</p>
                        <p className="text-gray-400">rogama25-2 joined the room</p>
                        <p className="text-gray-400">rogama25-3 joined the room</p>
                        <p className="text-gray-400">rogama25-4 joined the room</p>
                        <p><span className="text-orange-500">rogama25: </span>Hello!</p>
                        <p><span className="text-orange-500">rogama25-2: </span>Come to my world, we kill the oceanid!</p>
                    </div>
                </div>
                <input className="p-2 border-2 rounded-md border-blue-600 bg-blue-800" placeholder="Type a message..."/>
            </div>
        </div>
    )
}