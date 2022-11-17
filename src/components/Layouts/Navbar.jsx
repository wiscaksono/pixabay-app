import { FireIcon } from "@heroicons/react/24/solid";

export default function Navbar({ setCategory, category }) {
  return (
    <nav className="flex items-center gap-5 text-sm flex-wrap mb-5">
      <button
        className={`
                transition-all flex items-center gap-1.5 ${
                  category === undefined ? "active" : "inactive"
                }
              `}
        onClick={() => setCategory(undefined)}
      >
        Trending
        <FireIcon
          className={`w-4 ${
            category === undefined ? "text-red-500" : "text-red-300"
          }`}
        />
      </button>
      <button
        className={`transition-all ${
          category === "backgrounds" ? "active" : "inactive"
        }`}
        onClick={() => setCategory("backgrounds")}
      >
        Backgrounds
      </button>
      <button
        className={`transition-all ${
          category === "fashions" ? "active" : "inactive"
        }`}
        onClick={() => setCategory("fashions")}
      >
        Fashion
      </button>
      <button
        className={`transition-all ${
          category === "nature" ? "active" : "inactive"
        }`}
        onClick={() => setCategory("nature")}
      >
        Nature
      </button>
    </nav>
  );
}
