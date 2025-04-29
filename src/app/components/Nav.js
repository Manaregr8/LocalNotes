import Link from 'next/link';
import Styles from "../styles/nav.module.css"
export default function Nav() {
  return (
    <nav className={Styles.navbar} style={{ marginBottom: 20 }}>
      <Link href="/add" style={{ marginRight: 20 }}>Add Note</Link>
      <Link href="/notes">View Notes</Link>
    </nav>
  );
}