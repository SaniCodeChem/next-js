import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const Navbar = () => (
  <nav>
    <div className="logo">
      <Link href="/">
        <Image src="/logo.png" width={128} height={128} />
      </Link>
    </div>
    <Link href="/about">
      <a className={styles.navlink}>About</a>
    </Link>
    <Link href="/ninjas">
      <a className={styles.navlink}>Ninja Listing</a>
    </Link>
  </nav>
);

export default Navbar;
