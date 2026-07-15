import "../../assets/styles/header.css";
import logo from "../../assets/images/logo/2.png";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navigation } from "../../constants/navigation";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

 // Close mobile menu when screen becomes desktop
useEffect(() => {

  const handleResize = () => {

    if (window.innerWidth > 768) {

      setMenuOpen(false);
      setPortfolioOpen(false);

    }

  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);

}, []);

  return (

    <header className={scrolled || window.location.pathname !== "/" ? "header scrolled" : "header"}>

      <div className="navbar">

        <NavLink
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Dazzler Films" />
        </NavLink>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        <nav className={menuOpen ? "active" : ""}>

          <ul className="menu">

  {navigation.map((item) => (

    <li
      key={item.title}
      className={item.dropdown ? "has-dropdown" : ""}
    >

      {item.dropdown ? (

        <>

          <div
            className="dropdown-toggle"
            onClick={() => {

              if (window.innerWidth <= 768) {
                setPortfolioOpen(!portfolioOpen);
              }

            }}
          >

            <NavLink
              to={item.path}
              onClick={(e) => {

                if (window.innerWidth <= 768) {
                  e.preventDefault();
                } else {
                  setMenuOpen(false);
                }

              }}
            >

              {item.title}

            </NavLink>

          </div>

          <ul className={`dropdown-menu ${portfolioOpen ? "mobile-open" : ""}`}>

            {item.dropdown.map((sub) => (

              <li key={sub.title}>

                <NavLink
                  to={sub.path}
                  onClick={() => {

                    setMenuOpen(false);
                    setPortfolioOpen(false);

                  }}
                >

                  {sub.title}

                </NavLink>

              </li>

            ))}

          </ul>

        </>

      ) : (

        <NavLink
          to={item.path}
          onClick={() => setMenuOpen(false)}
        >

          {item.title}

        </NavLink>

      )}

    </li>

  ))}

</ul>
        </nav>

      </div>

    </header>

  );

}

export default Header;