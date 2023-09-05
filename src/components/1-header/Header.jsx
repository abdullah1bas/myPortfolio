import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />

      <nav>
        <ul className="flex">
          {["About", "Articles", "Projects", "Speaking", "Contact"].map(
            (link) => {
              return (
                <li key={link}>
                  <a href={
                    link == 'About' 
                    ? '#about'
                    : link == "Projects"
                    ? "#projects"
                    : link == "Contact"
                    ? "#contact"
                    : "#speaking"
                  }>{link}</a>
                </li>
              );
            }
          )}
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            {["About", "Articles", "Projects", "Speaking", "Uses"].map(
              (link) => {
                return (
                  <li key={link}>
                    <a href="">{link}</a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
