import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
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
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit() {
		if (this.state.disabled) {
			this.setState({
				endDate: "Present",
			});
		}
	}

	handleSwitch(event) {
		this.setState({
			disabled: event.target.checked,
		});
	}

	render() {
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
					required
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
}

ExperienceForm.defaultProps = {
	school: "",
	study: "",
	degree: "",
	startDate: "",
	endDate: "",
	id: "",
};
