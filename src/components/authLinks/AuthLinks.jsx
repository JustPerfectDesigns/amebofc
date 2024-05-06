"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
	const [open, setOpen] = useState(false);

	const { status } = useSession();

	return (
		<>
			{status === "unauthenticated" ? (
				<Link href="/login" className={styles.login}>
					Login
				</Link>
			) : (
				<>
					{/* <Link href="/write" className={styles.link}>
						Write
					</Link> */}
					<span className={styles.logout} onClick={signOut}>
						Logout
					</span>
				</>
			)}
			<div className={styles.burger} onClick={() => setOpen(!open)}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			{open && (
				<div className={styles.responsiveMenu}>
					<Link href="/blog?cat=nigeria" className={styles.navLink}>
						Nigeria
					</Link>
					<Link href="/blog?cat=politics" className={styles.navLink}>
						Politics
					</Link>
					<Link href="/blog?cat=world" className={styles.navLink}>
						World
					</Link>
					<Link href="/blog?cat=business" className={styles.navLink}>
						Business
					</Link>
					<Link href="/blog?cat=entertainment" className={styles.navLink}>
						Entertainment
					</Link>
					<Link href="/blog?cat=people" className={styles.navLink}>
						People
					</Link>
					<Link href="/blog?cat=education" className={styles.navLink}>
						Education
					</Link>
					<Link href="/blog?cat=sports" className={styles.navLink}>
						Sports
					</Link>
					{status === "notauthenticated" ? (
						<Link href="/login">Login</Link>
					) : (
						<>
							{/* <Link href="/write">Write</Link> */}
							<span className={styles.link}>Logout</span>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default AuthLinks;
