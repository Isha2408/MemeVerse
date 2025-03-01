import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    <div className="flex justify-center p-10">
      <nav className="w-1/2 flex items-center justify-between border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Meme<span className="text-orange-400">V</span>erse
        </h1>

        <div className="flex items-center space-x-6">
          {["/", "/explore", "/upload", "/profile", "/leaderboard"].map(
            (path) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-gray-900 dark:text-white hover:text-orange-400 dark:hover:text-orange-400 ${
                    isActive ? "text-orange-400" : ""
                  }`
                }
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </NavLink>
            )
          )}
        </div>

        <ToggleTheme />
      </nav>
    </div>
  );
}
