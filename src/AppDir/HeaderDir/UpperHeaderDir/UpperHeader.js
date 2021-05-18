import HackerNoonButton from "./HackerNoonButtonDir/HackerNoonButton.js";
import StartWritingButton from "./StartWritingButtonDir/StartWritingButton.js";


export default function UpperHeader(props) {
	return (
		<div className="upper-header">
			<HackerNoonButton />
			<StartWritingButton />
		</div>
	);
}
