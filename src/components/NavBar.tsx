import "../styles/NavBar.css";
function NavBar() {
	return (
		<nav className="bar">
			<div>
				<p className="logo">AdmissionsBOOX</p>
			</div>
			<ul className="links" role="list">
				{/* <li>
					<a className="navLink" href="#">
						Insiders
					</a>
				</li> */}
				<li>
					<a
						className="navLink"
						href="http://booxcommunity.com/"
					>
						BOOX Community
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
