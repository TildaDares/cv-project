import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default class ExperienceForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			company: this.props.school,
			position: this.props.degree,
			description: this.props.study,
			startDate: this.props.startDate,
			endDate: this.props.endDate,
			startDateHelperText: "",
			startDateError: false,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(){

  }

  handleSubmit() {

  }

  render(){
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
					name="positipn"
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