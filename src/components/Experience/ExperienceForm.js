import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import uniqid from "uniqid";
export default class ExperienceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: this.props.company,
			position: this.props.position,
			description: this.props.description,
			startDate: this.props.startDate,
			disabled: false,
			endDate: this.props.endDate,
			startDateHelperText: "",
			startDateError: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
		this.handleErrors = this.handleErrors.bind(this);
		this.displayForm = this.displayForm.bind(this);
		this.isDisabled = this.isDisabled.bind(this);
	}

	displayForm() {
		return (
			<form className="cv-forms" onSubmit={this.handleSubmit}>
				<TextField
					label="Company"
					name="company"
					type="text"
					value={this.state.company}
					onChange={this.handleChange}
					required
				/>
				<TextField
					label="Position"
					name="position"
					type="text"
					value={this.state.position}
					onChange={this.handleChange}
					required
				/>
				<TextField
					label="Job description"
					name="description"
					multiline
					rows={4}
					value={this.state.description}
					onChange={this.handleChange}
				/>
				<div className="d-flex dates">
					<TextField
						error={this.state.startDateError}
						label="Start Date"
						name="startDate"
						type="month"
						value={this.state.startDate}
						helperText={this.state.startDateHelperText}
						onChange={this.handleChange}
						required
					/>
					<TextField
						label="End Date"
						type="month"
						name="endDate"
						value={this.state.endDate}
						disabled={this.state.disabled}
						onChange={this.handleChange}
						required
					/>
				</div>
				<FormControlLabel
					control={
						<Switch
							onChange={this.handleSwitch}
							name="ongoing"
							color="primary"
						/>
					}
					label="Ongoing"
					className="float-right"
				/>
				<div className="d-flex justify-between" id="experience-btns">
					<Button
						variant="contained"
						color="secondary"
						type="button"
						onClick={this.props.closeForm}
					>
						Cancel
					</Button>
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</div>
			</form>
		);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	isDisabled() {
		return this.state.disabled ? "Present" : this.state.endDate;
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.handleErrors()) {
			this.props.addExperience({
				company: this.state.company,
				position: this.state.position,
				description: this.state.description,
				endDate: this.isDisabled(),
				startDate: this.state.startDate,
				id: this.props.id || uniqid(),
				isEditable: false,
			});
			this.props.closeForm();
		}
	}

	handleSwitch(event) {
		this.setState({
			disabled: event.target.checked,
		});
	}

	handleErrors() {
		const fields = ["company", "position", "startDate", "endDate"];
		fields.forEach((field) => {
			if (this.state[field] === "") {
				return false;
			}
		});

		if (this.state.disabled) {
			return true;
		}

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

	render() {
		if (!this.props.isReadOnly) {
			return this.displayForm();
		}
		return <div></div>;
	}
}

ExperienceForm.defaultProps = {
	company: "",
	description: "",
	position: "",
	startDate: "",
	endDate: "",
	id: "",
};
