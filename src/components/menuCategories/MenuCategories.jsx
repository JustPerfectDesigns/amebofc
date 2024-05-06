import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
	return (
		<div className={styles.categoryList}>
			<Link
				href="/blog?cat=nigeria"
				className={`${styles.categoryItem} ${styles.style}`}
			>
				Nigeria
			</Link>
			<Link
				href="/blog?cat=politics"
				className={`${styles.categoryItem} ${styles.fashion}`}
			>
				Politics
			</Link>
			<Link
				href="/blog?cat=world"
				className={`${styles.categoryItem} ${styles.food}`}
			>
				World
			</Link>
			<Link
				href="/blog?cat=business
"
				className={`${styles.categoryItem} ${styles.travel}`}
			>
				Business
			</Link>
			<Link
				href="/blog?cat=entertainment"
				className={`${styles.categoryItem} ${styles.culture}`}
			>
				Entertainment
			</Link>
			<Link
				href="/blog?cat=people"
				className={`${styles.categoryItem} ${styles.coding}`}
			>
				People
			</Link>
			<Link
				href="/blog?cat=education"
				className={`${styles.categoryItem} ${styles.fashion}`}
			>
				Education
			</Link>
			<Link
				href="/blog?cat=sports"
				className={`${styles.categoryItem} ${styles.food}`}
			>
				Sports
			</Link>
		</div>
	);
};

export default MenuCategories;
