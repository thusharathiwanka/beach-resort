type Props = {
	title: string;
};

const Title: React.FC<Props> = ({ title }): JSX.Element => {
	return (
		<div className="section-title">
			<h4>{title}</h4>
			<div></div>
		</div>
	);
};

export default Title;
