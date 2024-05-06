// import React from "react";
// import styles from "./CardListTwo.module.css";
// import CardTwo from "../card-two/CardTwo";
// import getData from "../getData";

// const CardListTwo = async ({ category }) => {
// 	const { posts } = await getData(category);
// 	if (!posts) {
// 		return <div>No posts found</div>;
// 	}
// 	return (
// 		<div className={styles.container}>
// 			<h1 className={styles.title}>Recent Posts in {category}</h1>
// 			<div className={styles.posts}>
// 				{posts.map((item) => (
// 					<CardTwo item={item} key={item._id} />
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default CardListTwo;
