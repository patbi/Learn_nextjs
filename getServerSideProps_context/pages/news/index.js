export default function NewsArticleList({ articles }) {
	return (
		<>
			<h1>List of Articles </h1>
			{articles && articles.map((article) => {
				return (
					<div key={article.id}>
							<h2>
								{article.id} {article.title} {article.category}
							</h2>	
						<hr />
					</div>
				)
			})}
		</>
	)
}

export async function getServerSideProps() {
	const response = await fetch('http://localhost:4000/news')
	const data = await response.json()

	return {
		props: {
			articles: data,
		},
	}	
}