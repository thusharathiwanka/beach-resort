type Props = {
	children?: React.ReactNode;
	hero?: string;
};

const Hero: React.FC<Props> = ({ children, hero }): JSX.Element => {
	return <section className={hero}>{children}</section>;
};

Hero.defaultProps = {
	hero: "defaultHero",
};

export default Hero;
