type Props = {
	children: React.ReactNode;
	title: string;
	subtitle?: string;
};

const Banner: React.FC<Props> = ({ children, title, subtitle }): JSX.Element => {
	return (
		<div className="banner">
			<h1>{title}</h1>
			<div />
			<p>{subtitle}</p>
			{children}
		</div>
	);
};

export default Banner;
