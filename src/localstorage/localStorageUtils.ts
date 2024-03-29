export function loadFromLocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    if (value == null) {
        return undefined
    }
    return JSON.parse(value);
}