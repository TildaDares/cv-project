import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import '../../styles/education.css';

export default function Education(props) {
  return (
		<div class="cv-sections">
			<Typography variant="h3" className="heading">
				Education
			</Typography>
			<Divider variant="middle" className="dividers" />
      <div className="justify-center">

      </div>
      <Button color="primary" className="float-right" variant="contained">Add Education</Button>
		</div>
	);
}