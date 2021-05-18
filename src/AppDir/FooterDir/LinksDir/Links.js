import footerData from "../../../footerData.js";

export default function LinkSection() {
	const sections = Object.keys(footerData);
	return (
		<div className="link-section">
			{sections.map((section) => (
				<LinkList linkArray={footerData[section]} displayName={section}/>
			))}
		</div>
	);
}

function LinkList(props) {
	const section = props.linkArray;
	return (
		<div className="link">
			<div><strong>{props.displayName}</strong></div>
			<ul>
			{section.map((linkItem) => (
				<LinkItem displayName={linkItem.displayName} href={linkItem.link} />
			))}
		</ul>
		</div>
	);
}

function LinkItem(props) {
	return (
		<li>
			<a href={props.href}>{props.displayName}</a>
		</li>
	);
}
