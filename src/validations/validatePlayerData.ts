"use client"

import {loadFromLocalStorage} from "@/localstorage/localStorageUtils";

interface PlayerData {
    username: string;
    uid: string;
    worldLevel: string;
}

export function validatePlayerData({username, uid, worldLevel}: PlayerData) {
    const result = [];
    if (username.length < 1 || username.length > 14) result.push("username");
    const numberUid = Number(uid);
    if (numberUid < 600000000 || numberUid > 899999999 || isNaN(numberUid)) result.push("uid");
    const numberWorldLevel = Number(worldLevel);
    if (numberWorldLevel < 1 || numberWorldLevel > 8 || isNaN(numberWorldLevel)) result.push("worldLevel");
    return result;
}

export function validateSavedPlayerData() {
    if (typeof window !== "undefined") {
        const username = loadFromLocalStorage("username")
        const uid = loadFromLocalStorage("uid")
        const worldLevel = loadFromLocalStorage("worldLevel")
        if (username && uid && worldLevel) {
            return validatePlayerData({username, uid, worldLevel}).length === 0
        }
    }
    return false
}