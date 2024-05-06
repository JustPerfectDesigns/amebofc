import Image from "next/image";
import styles from "./CardTwo.module.css";
import Link from "next/link";

const CardTwo = ({ withImage, item }) => {
	return (
		<div className={styles.items}>
			<Link href={`/posts/${item.slug}`} className={styles.item}>
				{withImage && item.img && (
					<div className={styles.imageContainer}>
						<Image
							src={item.img}
							alt=""
							width={100}
							height={100}
							fill
							className={styles.image}
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					{/* <div className={styles.detail}>
						<span className={styles.date}> */}
					{/* {item.createdAt.substring(0, 10)} -{" "} */}
					{/* </span> */}
					<span
						className={`${styles.category} ${item.catSlug === "nigeria" ? styles.nigeria : item.catSlug === "politics" ? styles.politics : item.catSlug === "world" ? styles.world : item.catSlug === "business" ? styles.business : item.catSlug === "entertainment" ? styles.entertainment : item.catSlug === "people" ? styles.people : item.catSlug === "education" ? styles.education : item.catSlug === "sports" ? styles.sports : ""}`}
					>
						{item.catSlug}
					</span>
					<h3 className={styles.postTitle}>{item.title}</h3>
					{/* <div className={styles.detail}>
						<span className={styles.username}>{item?.user?.name}</span>
						<span className={styles.date}> - 10.03.2023</span>
					</div> */}
				</div>
			</Link>
		</div>
	);
};

export default CardTwo;
