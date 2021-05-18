import ArticleSections from "./ArticleSectionsDir/ArticleSections.js";
import JoinHackerNoonButton from "./JoinHackNoonButtonDir/JoinHackerNoonButton.js";
export default function MainContent(props) {
	return (
		<div className="main-content">
			<ArticleSections />
			<JoinHackerNoonButton />
		</div>
	);
}
