import React from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ExperienceForm from "./ExperienceForm";
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

	handleDelete() {
    this.props.deleteExperience(this.props.id);
  }

	displayExp() {
		if (this.state.isEditable && !this.props.isReadOnly) {
			return (
				<div>
					<IconButton
						aria-label="delete"
						color="secondary"
						className="float-right pb-0"
						onClick={this.handleDelete}
					>
						<DeleteIcon />
					</IconButton>
					<ExperienceForm
						addExperience={this.props.editExperience}
						id={this.props.id}
						company={this.props.company}
						position={this.props.position}
						description={this.props.description}
						startDate={this.props.startDate}
						endDate={this.props.endDate}
						closeForm={this.handleForm}
						isReadOnly={this.props.isReadOnly}
					/>
				</div>
			);
		}
		return (
			<div className="d-flex">
				<div>
					<Typography className="subtitle1">{this.props.position}</Typography>
					<Typography className="heading subtitle2">
						{this.props.company}
					</Typography>
					<Typography>
						{this.props.startDate} - {this.props.endDate}
					</Typography>
					<Typography>{this.props.description}</Typography>
				</div>
				{!this.props.isReadOnly && (
					<IconButton
						aria-label="edit"
						className="icon-btn"
						onClick={this.handleForm}
						id={this.props.id}
					>
						<EditIcon />
					</IconButton>
				)}
			</div>
		);
	}

	render() {
		return this.displayExp();
	}
}
