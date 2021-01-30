import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import EducationForm from "./EducationForm";
import "../../styles/education.css";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
  }
  
	render() {
		return (
			<div className="cv-sections">
				<Typography variant="h3" className="heading">
					Education
				</Typography>
				<Divider variant="middle" className="dividers" />
				<div className="justify-center">
					<EducationForm />
				</div>
				<Button color="primary" className="float-right" variant="contained">
					Add Education
				</Button>
			</div>
		);
	}
}
