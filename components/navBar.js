import NavBarStyles from "../styles/navBar.module.css";
import Link from "next/link";


function NavBar() {
    return <div className={NavBarStyles.navpage}>
        <Link href={"/"} className={NavBarStyles.navparag}>
            halisaham.org
        </Link>
        <div className={NavBarStyles.navButton}>
            <Link href="/girisYap" className={NavBarStyles.girisButton}>
                <div className={NavBarStyles.navB}>Giriş Yap</div>
            </Link>
            <Link href="/uyeOl" className={NavBarStyles.girisButton}>
                <div className={NavBarStyles.navB2}>Üye Ol</div>
            </Link>
        </div>
    </div>
}

export default NavBar