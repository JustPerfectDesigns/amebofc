import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/amebofc-logo.png" alt="logo" width={170} height={60} />
				</div>
				<p className={styles.desc}>
					Welcome to Amebo Fan Club. Here&apos;s your one stop for everything
					entertainment, gists, sports, events, politics, Nigeria and so on.
					Stay updated at all times 24 hours a daym 7 days a week, 4 weeks a
					month, and 365 days a year.
				</p>
				<div className={styles.icons}>
					<Image src="/facebook.png" alt="" width={18} height={18} />
					<Image src="/instagram.png" alt="" width={18} height={18} />
					<Image src="/tiktok.png" alt="" width={18} height={18} />
					<Image src="/youtube.png" alt="" width={18} height={18} />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="//blog?cat=nigeria">Nigeria</Link>
					<Link href="//blog?cat=politics">Politics</Link>
					<Link href="/blog?cat=world">World</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/blog?cat=business">Business</Link>
					<Link href="/blog?cat=entertainment">Entertainment</Link>
					<Link href="/blog?cat=people">People</Link>
					<Link href="/blog?cat=education">Education</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Facebook</Link>
					<Link href="/">Instagram</Link>
					<Link href="/">Tiktok</Link>
					<Link href="/">Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
