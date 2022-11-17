import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Header({ setSearchQuerry }) {
  return (
    <header className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="mb-5">
          <a className="text-indigo-500 text-2xl font-semibold" href="/">
            Pixabay <span className="font-normal text-slate-500">App</span>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex-1">
            <input
              type="search"
              className=" rounded-full border-none pl-14 placeholder:text-slate-500 placeholder:font-normal font-medium text-sm transition-colors w-full py-3.5"
              placeholder="Search the best picture in the world"
              onChange={(e) =>
                setTimeout(() => setSearchQuerry(e.target.value), 1000)
              }
            />
            <div className="bg-indigo-500 p-2 absolute left-3 top-1/2 -translate-y-1/2  rounded-full">
              <MagnifyingGlassIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
