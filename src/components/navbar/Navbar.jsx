import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.split}>
				<div className={styles.social}>
					<Image src="/facebook.png" alt="facebook" width={24} height={24} />
					<Image src="/instagram.png" alt="instagram" width={24} height={24} />
					<Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
					<Image src="/youtube.png" alt="youtube" width={24} height={24} />
				</div>
				<Link href="/">
					<div className={styles.logo}>
						<Image src="/amebofc-logo.png" alt="logo" width={150} height={50} />
					</div>
				</Link>
			</div>
			<div className={styles.links}>
				{/* <ThemeToggle /> */}
				<Link href="/blog?cat=nigeria" className={styles.link}>
					Nigeria
				</Link>
				<Link href="/blog?cat=politics" className={styles.link}>
					Politics
				</Link>
				<Link href="/blog?cat=world" className={styles.link}>
					World
				</Link>
				<Link href="/blog?cat=business" className={styles.link}>
					Business
				</Link>
				<Link href="/blog?cat=entertainment" className={styles.link}>
					Entertainment
				</Link>
				<Link href="/blog?cat=people" className={styles.link}>
					People
				</Link>
				<Link href="/blog?cat=education" className={styles.link}>
					Education
				</Link>
				<Link href="/blog?cat=sports" className={styles.link}>
					Sports
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
