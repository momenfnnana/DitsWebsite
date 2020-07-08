import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "./navbar.scss";
import "../../constant/scrollTo/scrollTo";

const Navbar = ({ sticky, Element }) => {
  const [chosen, setChosen] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState("collapse navbar-collapse p-3");
  const array = [
    { string: "الرئيسية", name: "main" },
    { string: "من نحن", name: "aboutUs" },
    { string: "خدماتنا", name: "ourServices" },
    { string: "ما يميزنا", name: "ourAdvantage" },
    { string: "المدونة", name: "blog" },
    { string: "أعمالنا", name: "ourJobs" },
    { string: "قالوا عنا", name: "sayAboutUs" },
    { string: "تواصل معنا", name: "ContactUs" },
  ];

  const isActive = (i) => {
    let style = "nav-item";
    i === chosen && (style = "nav-item active");
    return style;
  };

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showMenu
      ? setMenuStyle("collapse navbar-collapse p-3 show")
      : setMenuStyle("collapse navbar-collapse p-3");
  }, [showMenu]);

  return (
    <div dir="rtl" className="container position-relative">
      <nav
        id="navbar"
        className={
          sticky
            ? "sticky bg-light navbar navbar-expand-lg navbar-light navBg"
            : "bg-light navbar navbar-expand-lg navbar-light"
        }
        ref={Element}
      >
        <div className="container px-3 px-lg-0">
          {/* logo befor scroll  */}
          <a
            id="brand1"
            className={sticky ? "d-none navbar-brand scrollTo" : "navbar-brand scrollTo"}
            href="#main"
            // href="javascript:void(0)"
          >
            <img
              style={{ maxWidth: "10rem" }}
              src={require("../../constant/images/brand.svg")}
            />
          </a>
          {/* logo after scroll */}
          <a
            id="brand2"
            className={sticky ? "navbar-brand d-block scrollTo" : "navbar-brand d-none scrollTo"}
            href="#main"
          >
            <img
              style={{ maxWidth: "10rem" }}
              src={require("../../constant/images/Logo2.svg")}
            />
          </a>
          <button
            id="toggleNavigation"
            className="navbar-toggler custom-toggler p-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={showMenu ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={menuStyle} id="navbarNav">
            <ul className="align-items-center navbar-nav sm-header-link p-0">
              {array.map((item, i) => (
                <div key={i}>
                  <li
                    className={isActive(i)}
                    onClick={() => {
                      setChosen(i);
                    }}
                  >
                    <a className="nav-link scrollTo" href={`#${item.name}`}>
                      {item.string}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
            <a
              id="registerByEmail"
              type="button"
              className={
                sticky
                  ? "mt-4 mt-lg-0 d-none d-lg-block btn rounded-pill px-3 mr-lg-auto mx-auto"
                  : "mt-4 mt-lg-0 d-none btn rounded-pill px-3 mr-lg-auto mx-auto"
              }
              href="#registerNow"
            >
              اشترك بريدياً معنا
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
