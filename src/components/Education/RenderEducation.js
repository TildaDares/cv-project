import React from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import EducationForm from "./EducationForm";
export default class RenderEducation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditable: false,
		};
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit() {
		this.setState({
			isEditable: !this.state.isEditable,
		});
	}

	displayEdu() {
		if (this.state.isEditable) {
			return (
				<EducationForm
					handleEducationChange={this.handleEdit}
					addEducation={this.props.editEducation}
					id={this.props.id}
					school={this.props.school}
					study={this.props.study}
					degree={this.props.degree}
					startDate={this.props.startDate}
					endDate={this.props.endDate}
					closeForm={this.handleEdit}
				/>
			);
		}
		return (
			<div className="d-flex">
				<div>
					<Typography className="subtitle1">
						{this.props.degree}: {this.props.study}
					</Typography>
					<Typography className="heading subtitle2">
						{this.props.school}
					</Typography>
					<Typography>
						{this.props.startDate} - {this.props.endDate}
					</Typography>
				</div>
				<IconButton
					aria-label="edit"
					className="icon-btn"
					onClick={this.handleEdit}
					id={this.props.id}
				>
					<EditIcon />
				</IconButton>
			</div>
		);
	}

	render() {
		return this.displayEdu();
	}
}
