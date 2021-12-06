import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<Hero>
				<Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
					<Link to="/rooms" className="btn-primary">
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
};

export default Home;
