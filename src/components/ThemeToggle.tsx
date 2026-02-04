import { useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const isLight = theme === "light";

    return (
        <div className="container mt-5">
            <div className={`card shadow-sm text-center ${isLight ? "bg-light" : "bg-dark text-white"}`} >
                <div className="card-body">
                    <h5 className="card-title mb-3">
                        Current theme: <strong>{theme}</strong>
                    </h5>

                    <button
                        className={`btn ${isLight ? "btn-dark" : "btn-light"}`}
                        onClick={() => setTheme(isLight ? "dark" : "light")}
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
