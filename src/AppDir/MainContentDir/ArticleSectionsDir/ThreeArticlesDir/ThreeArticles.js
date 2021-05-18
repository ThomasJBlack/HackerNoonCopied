import Article from "./ArticleDir/Article.js";
export default function ThreeArticles(props) {
	return (
		<div className="three-articles">
			{props.articleArray.map((article) => (
				<Article article={article} />
			))}
		</div>
	);
}
