import AdCopy from "./AdCopy";
import EmailText from "./EmailTextBox";
import rocket from "../../public/Illustration - Asset 40 1Rocket.png";
import "../styles/landing.css";

function LaunchPage() {
	return (
		<div className="launch">
			<div className="left_side">
				<AdCopy />
				<EmailText />
			</div>
			<div className="right_side">
				<img
					className="RocketImg"
					src={rocket}
					alt="a rocket"
				/>
			</div>
		</div>
	);
}

export default LaunchPage;
