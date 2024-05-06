import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
// import Pagination from "../pagination/Pagination";

const getData = async () => {
	const res = await fetch(
		`http://localhost:3000/api/posts/good-news-apc-governor-approves-increment-of-minimum-wage-gives-reason`,
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		throw new Error("Failed");
	}

	return res.json();
};

const Featured = async () => {
	// const {  } = params;

	const data = await getData();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, Amebo Fan Club</b> Let the gossip begin!.
			</h1>
			{/* {posts?.map((data) => ( */}
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src={data.img} alt="" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<Link href={`/posts/${data.slug}`}>
						<h1 className={styles.postTitle}>{data.title} </h1>
					</Link>
					<div
						className={styles.postDesc}
						dangerouslySetInnerHTML={{ __html: data?.desc.substring(0, 450) }}
					/>

					<button className={styles.button}>
						<Link href={`/posts/${data.slug}`}>Read More</Link>
					</button>
				</div>
			</div>
			{/* ))} */}
			{/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
		</div>
	);
};

export default Featured;
