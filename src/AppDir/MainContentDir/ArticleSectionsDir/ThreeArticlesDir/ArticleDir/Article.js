export default function Article(props) {
	return (
		<div className="article">
			<h2>
				<a href={props.article.titleLink}>{props.article.titleText}</a>
			</h2>
			<div>
				<img className="background-image" src={props.article.avatarSrc} />
				<div className="hash-tag">{props.article.hashTag}</div>
			</div>
			<div className="article-info-footer">
				<div className="userName-and-author">
					<img className="user-image" src={props.article.avatarSrc}></img>
					<a>{props.article.userName}</a>
					<span> {props.article.author} </span>
				</div>
				<div className="readIn-and-posted">
					<span>{props.article.readIn}</span>
					<span>{props.article.posted}</span>
				</div>
			</div>
		</div>
	);
}
