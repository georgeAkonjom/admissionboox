import "../styles/emailtext.css";
import "animate.css";

function EmailText() {
	let AnimateClass =
		"sub animate__animated animate__headShake";

	return (
		<>
			{" "}
			<div>
				<form id="emailcontain" action="">
					<input
						className="emailfield"
						type="email"
						placeholder="An Email Address"
					/>
					<button type="button" className={AnimateClass}>
						Subscribe
					</button>
				</form>
			</div>
			<div>
				<a
					className="subtext"
					href="mailto:infobooxcommunity@gmail.com"
				>
					Are you an organisation that would like to join
					the waitlist?{" "}
					<span className="underline">
						Send us an email here!
					</span>
				</a>
			</div>
		</>
	);
}

export default EmailText;
