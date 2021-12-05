import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Rooms: React.FC = (): JSX.Element => {
	return (
		<Hero hero="roomsHero">
			<Banner title="our rooms">
				<Link to="/" className="btn-primary">
					Return Home
				</Link>
			</Banner>
		</Hero>
	);
};

export default Rooms;
