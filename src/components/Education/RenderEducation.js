import Typography from "@material-ui/core/Typography";
export default function RenderEducation(props) {
	return (
		<div>
			<Typography className="subtitle1">
				{props.education.degree}: {props.education.study}
			</Typography>
			<Typography className="heading subtitle2">
				{props.education.school}
			</Typography>
			<Typography>
				{props.education.startDate} - {props.education.endDate}
			</Typography>
		</div>
	);
}
