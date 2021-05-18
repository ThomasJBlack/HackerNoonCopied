import UpperHeader from "./UpperHeaderDir/UpperHeader.js";
import LowerHeader from "./LowerHeaderDir/LowerHeader.js";

export default function Header(props) {
	return (
		<div className="header">
			<UpperHeader />
			<LowerHeader />
		</div>
	);
}
