import React from "react";
import styles from "./categoryPosts.module.css";
import CardTwo from "../card-two/CardTwo";
import { getData } from "../getData";

const CategoryPosts = async () => {
	const posts = await getData();
	if (!posts) {
		return <div>No posts found</div>;
	}
	const firstFivePosts = posts.slice(0, 5);
	return (
		<div className={styles.container}>
			<div className={styles.posts}>
				{firstFivePosts.map((item) => (
					<CardTwo item={item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default CategoryPosts;
