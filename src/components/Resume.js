import Paper from "@material-ui/core/Paper";
import General from "./General";
import Education from "./Education/Education"
import "../styles/main.css";
function Resume(props) {
	return (
		<Paper elevation={3} className="paper">
      <General readOnly={props.readOnly} />
      <Education readOnly={props.readOnly}/>
		</Paper>
	);
}

export default Resume;
