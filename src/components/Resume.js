import Paper from "@material-ui/core/Paper";
import General from "./General";
import "../styles/main.css";
function Resume(props) {
	return (
		<Paper elevation={3} className="paper">
			<form noValidate className="form" autoComplete="off">
				<General readOnly={props.readOnly} />
			</form>
		</Paper>
	);
}

export default Resume;
