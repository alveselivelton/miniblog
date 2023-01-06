import { useState } from "react";

import styles from "./Navbar.module.css";

import { NavLink, useLocation } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";
import { useEffect } from "react";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [menu, setMunu] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    setMunu(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul
        className={
          menu ? `${styles.nav_menu} ${styles.actived}` : styles.nav_menu
        }
      >
        <li className={styles.nav_item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li className={styles.nav_item}>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li className={styles.nav_item}>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li className={styles.nav_item}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li className={styles.nav_item}>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
      <div
        className={
          menu ? `${styles.hamburguer} ${styles.actived}` : styles.hamburguer
        }
        onClick={() => (!menu ? setMunu(true) : setMunu(false))}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
