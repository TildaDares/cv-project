import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default class EducationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			school: this.props.education.school,
			degree: this.props.education.degree,
			study: this.props.education.study,
			startDate: this.props.education.startDate,
			endDate: this.props.education.endDate,
			startDateHelperText: "",
			startDateError: false,
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
	}

	handleSubmit(event) {
    event.preventDefault();
    if(this.handleErrors()) {
      this.props.addNewEducation({
        school: this.state.school,
        degree: this.state.degree,
        study: this.state.study,
        endDate: this.state.endDate,
        startDate: this.state.startDate,
      })
    }
  }

	handleErrors() {
		const fields = ["school", "degree", "study", "startDate", "endDate"];
		fields.forEach((field) => {
			if (this.state[field] === "") {
				return false;
			}
		});
		if (this.state.startDate > this.state.endDate) {
			this.setState({
				startDateHelperText: "Start date cannot be lesser",
				startDateError: true,
			});
			return false;
		} else {
			this.setState({
				startDateHelperText: "",
				startDateError: false,
			});
		}
		return true;
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<form className="cv-forms" onSubmit={this.handleSubmit}>
				<TextField
					label="School"
					name="school"
					type="text"
					onChange={this.handleChange}
					required
				/>
				<TextField
					label="Degree"
					name="degree"
					type="text"
					onChange={this.handleChange}
					required
				/>
				<TextField
					label="Field of Study"
					name="study"
					type="text"
					onChange={this.handleChange}
					required
				/>
				<div className="d-flex dates">
					<TextField
            error={this.state.startDateError}
						label="Start Date"
						name="startDate"
            type="month"
            helperText={this.state.startDateHelperText}
						onChange={this.handleChange}
						required
					/>
					<TextField
						label="End Date"
						type="month"
						name="endDate"
						helperText="Or expected graduation"
						onChange={this.handleChange}
						required
					/>
				</div>
				<div className="d-flex justify-between footer-btns">
					<Button
						variant="contained"
						color="secondary"
						type="button"
						onClick={this.props.handleEducationChange}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="primary"
						type="submit"
					>
						Submit
					</Button>
				</div>
			</form>
		);
	}
}
