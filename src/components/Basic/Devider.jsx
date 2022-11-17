import React from "react";

export default function Devider() {
  return (
    <div className="relative md:hidden block mt-5">
      <div className="absolute inset-0">
        <div className="w-full border-t border-slate-200" />
      </div>
    </div>
  );
}
