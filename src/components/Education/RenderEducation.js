import React from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import EducationForm from "./EducationForm";
import DeleteIcon from "@material-ui/icons/Delete";
export default class RenderEducation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditable: false,
		};
		this.handleForm = this.handleForm.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleForm() {
		this.setState({
			isEditable: !this.state.isEditable,
		});
	}

	handleDelete() {
		this.props.deleteEducation(this.props.id);
	}

	displayEdu() {
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
					<EducationForm
						addEducation={this.props.editEducation}
						id={this.props.id}
						school={this.props.school}
						study={this.props.study}
						degree={this.props.degree}
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
					<Typography className="subtitle1 info-text">
						{this.props.degree}: {this.props.study}
					</Typography>
					<Typography className="heading subtitle2 info-text">
						{this.props.school}
					</Typography>
					<Typography className="info-text">
						{this.props.startDate} - {this.props.endDate}
					</Typography>
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
		return this.displayEdu();
	}
}
