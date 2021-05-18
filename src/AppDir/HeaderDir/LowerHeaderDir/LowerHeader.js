import articleData from "../../../hackerNoonArticles.js";

export default function LowerHeader(props) {
	const sections = Object.keys(articleData);
	return (
		<div className="lower-header">
			{sections.map((title) => (
				<a href={"http://localhost:3000/#" + title}>{title}</a>
			))}
		</div>
	);
}
