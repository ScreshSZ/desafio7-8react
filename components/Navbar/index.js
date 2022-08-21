import { Fragment, useContext } from "react";
import Link from "next/link";
import AuthContext from "../../context/AuthContext";
import { useAuthUser } from "../../hooks/useAuthUser";
import styles from '../Navbar/navbar.module.css'

function Navbar() {
  

  useAuthUser();

  const { isLogged } = useContext(AuthContext);

  return (
    <div className={styles.contenedorNavbar}>
      <nav>
        <Link href="/">Home</Link>
        {/* SHOW IF IS EQUAL TO FALSE  */}
        {isLogged === false && (
          <Fragment>
            <Link href="/register">Registrar</Link>
            <Link href="/login">Login</Link>
          </Fragment>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
