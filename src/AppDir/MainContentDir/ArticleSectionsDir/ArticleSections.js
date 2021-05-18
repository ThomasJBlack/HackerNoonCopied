import articleData from "../../../hackerNoonArticles.js";
import ThreeArticles from "./ThreeArticlesDir/ThreeArticles.js";

export default function ArticleSections() {
	const articleSections = Object.keys(articleData);
	return (
		<div className="article-section">
			{articleSections.map((sectionTitle) => (
				<div className="article-sub-section" id={sectionTitle}>
					<h1>{sectionTitle}</h1>
					<ThreeArticles articleArray={articleData[sectionTitle]}/>
				</div>
			))}
		</div>
	);
}
