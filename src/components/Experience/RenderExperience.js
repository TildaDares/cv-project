import React from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import EducationForm from "./EducationForm";
import DeleteIcon from "@material-ui/icons/Delete";
export default class RenderExperience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditable: false,
		};
		this.handleForm = this.handleForm.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleForm() {}

  handleDelete() {}
  
	displayExp() {}

	render() {
		return this.displayExp();
	}
}
