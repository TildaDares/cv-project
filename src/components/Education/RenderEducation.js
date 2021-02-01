import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
export default function RenderEducation(props) {
	return (
		<div className="d-flex">
			<div>
				<Typography className="subtitle1">
					{props.degree}: {props.study}
				</Typography>
				<Typography className="heading subtitle2">{props.school}</Typography>
				<Typography>
					{props.startDate} - {props.endDate}
				</Typography>
			</div>
			<IconButton aria-label="edit" className="icon-btn">
				<EditIcon />
			</IconButton>
		</div>
	);
}
