const getData = async () => {
	try {
		const response = await fetch(`http://localhost:3000/api/posts`);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await response.json();
		const skip = 0; // Initialize skip to 0
		const take = 5;
		const posts = await prisma.post.findMany({
			skip: skip < 0 ? 0 : skip,
			take: take,
			orderBy: {
				createdAt: "desc",
			},
		});
		return posts;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export { getData };
