import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

import { services } from "../utils/services.util";

interface IService {
	title: string;
	info: string;
}

const icons: React.ReactNode[] = [<FaCocktail />, <FaHiking />, <FaShuttleVan />, <FaBeer />];

const Services: React.FC = (): JSX.Element => {
	return (
		<section className="services">
			<Title title="Services" />
			<div className="services-center">
				{services.map((service: IService, index: number) => {
					return (
						<article key={index} className="service">
							<span>{icons[index]}</span>
							<h6>{service.title}</h6>
							<p>{service.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
