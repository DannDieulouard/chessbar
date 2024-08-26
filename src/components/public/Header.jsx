import "../public/css/header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useVerifyToken } from "../../utils/authGuard";

const checkCookie = (access_token) => {
  return Cookies.get(access_token) !== undefined;
};

const Header = () => {
  const [hasCookie, setHasCookie] = useState(false);
  const decodedToken = useVerifyToken();

  useEffect(() => {
    const cookieExists = checkCookie('access_token');
    setHasCookie(cookieExists);
  }, []);

  const toggleMenu = () => {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.menu');
    burger.classList.toggle('open');
    menu.classList.toggle('show');
  };

  return (
    <>
      <nav>
        <div id="burger" className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="menu">
          <li><Link to="/chessbar/">ACCUEIL</Link></li>
          <li><Link to="/chessbar/concept">CONCEPT</Link></li>
          <li><Link to="/chessbar/bars">BARS</Link></li>
          <li><Link to="/chessbar/tournaments">TOURNOIS</Link></li>
          <li><Link to="/chessbar/rankings">CLASSEMENTS</Link></li>
          <li><Link to="/chessbar/rules">RÈGLEMENT</Link></li>
          {hasCookie ? (
            <>
              <li>
                <button className="profile">
                  <Link to={`/chessbar/profile/update/${decodedToken.userId}`}></Link>
                </button>
              </li>
              <li>
                <button className="logout"><Link to="/chessbar/logout"></Link></button>
              </li>
            </>
          ) : (
            <li><button className="login"><Link to="/chessbar/login"></Link></button></li>
          )}
        </ul>
      </nav>
      <header>
        <div className="bannerlogo"></div>
        <h1>JOUEZ AUX ECHECS PRÈS DE CHEZ VOUS !</h1>
      </header>
    </>
  );
};

export default Header;