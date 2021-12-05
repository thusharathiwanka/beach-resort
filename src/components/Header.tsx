import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

import Logo from "../images/logo.svg";

const Header: React.FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={Logo} alt="beach-resort-logo" />
					</Link>
					<button className="nav-btn" onClick={handleOpen}>
						<HiMenuAlt1 className="nav-icon" />
					</button>
				</div>
				<nav>
					<ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
						<Link to="/">Home</Link>
						<Link to="/rooms">Rooms</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
