import Paper from "@material-ui/core/Paper";
import General from "./General";
import Education from "./Education/Education"
import "../styles/main.css";
function Resume(props) {
	return (
		<Paper elevation={3} className="paper">
      <General isReadOnly={props.isReadOnly} />
      <Education isReadOnly={props.isReadOnly}/>
		</Paper>
	);
}

export default Resume;
