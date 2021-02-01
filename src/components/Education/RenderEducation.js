import Typography from "@material-ui/core/Typography";
export default function RenderEducation(props) {
	return (
		<div>
			<Typography className="subtitle1">
				{props.degree}: {props.study}
			</Typography>
			<Typography className="heading subtitle2">{props.school}</Typography>
			<Typography>
				{props.startDate} - {props.endDate}
			</Typography>
		</div>
	);
}
