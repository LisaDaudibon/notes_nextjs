import Link from "next/link"

export default function New(){
  return <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">New</h1>
    </header>
    <form className="flex gap-2 flex-col">
      <input
        type="text"
        name="title"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
      >
      </input>
      <div className="flex gap-1 justify-end">
        <Link 
          href=".."
          className="border border-slate-300 text-slate-300 px-2 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Cancel
          </Link>
        <button 
          type="submit"
          className="border border-slate-300 text-slate-300 px-2 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Créer
        </button>
      </div>
    </form>
  </>
}