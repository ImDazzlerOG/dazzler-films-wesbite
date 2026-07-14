import "../../assets/styles/header.css";
import logo from "../../assets/images/logo/2.png";
import { navigation } from "../../constants/navigation";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={scrolled ? "header scrolled" : "header"}>

      <div className="navbar">

        <div className="logo">

          <img src={logo} alt="Dazzler Films" />

        </div>

        <nav>

          <ul className="menu">

            {navigation.map((item) => (

              <li key={item.title}>

                <NavLink to={item.path}>

                  {item.title}

                </NavLink>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </header>

  );

}

export default Header;