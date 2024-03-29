"use client"

import {createContext, ReactNode, useContext, useEffect} from "react";
import {io, Socket} from "socket.io-client";

export type SocketContextProviderProps = {
    children: ReactNode
}

export const SocketContext = createContext<Socket | null>(null)

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketContextProvider({ children }: SocketContextProviderProps) {
    const socket = io("http://localhost:3500", {
        autoConnect: false,
        reconnectionAttempts: 5,
    })

    useEffect(() => {
        if (socket) {
            socket.connect()
        }
        return () => {
            socket.disconnect()
        }
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}