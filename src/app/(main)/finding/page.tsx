export default function Finding() {
    return (
        <div className="w-full h-full bg-blue-950 text-white flex flex-col items-center justify-center">
            <p>Finding suitable players, please wait</p>
            <button type="button" className="bg-yellow-400 disabled:bg-yellow-800 border-yellow-600 border-2 rounded-md py-2 px-10">Cancel</button>
        </div>
    )
}