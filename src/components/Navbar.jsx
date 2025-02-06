import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light"
}
function Navbar() {
  const { title } = useParams()
  const [theme, setTheme] = useState(() => toggleMode())

  const handleThemeToggle = (e) => {
    e.preventDefault();
    const newTheme = theme === "dark-mode" ? "light" : "dark-mode"
    setTheme(newTheme)
    toggleMode()
  }

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme)
    localStorage.setItem("darkMode", theme)
  }, [theme])

  return (
    <header className="header">
      <div className="header-container container">
        <div>
          {title && 
            <Link to="/" className="header-logo">
              <figure>
                <img src={`../assets/icon-${title.toLowerCase()}.svg`} alt={`${title} icon`} />
              </figure>
              <span>{title}</span>
            </Link>
          }
        </div>
        <div>
          <label className="dark-btn" htmlFor="dark" onClick={handleThemeToggle}>
            <input type="checkbox" id="dark" checked={theme == 'dark-mode'} readOnly/>
            <span>
              <span></span>
              <span></span>
            </span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Navbar