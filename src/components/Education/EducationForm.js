import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import uniqid from "uniqid";
export default function EducationForm(props) {
	const [school, setSchool] = useState(props.school || "");
	const [degree, setDegree] = useState(props.degree || "");
	const [study, setStudy] = useState(props.study || "");
	const [startDate, setStartDate] = useState(props.startDate || "");
	const [endDate, setEndDate] = useState(props.endDate || "");
	const [startDateHelperText, setStartDateHelperText] = useState("");
	const [startDateError, setStartDateError] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		if (handleErrors()) {
			props.addEducation({
				school: school,
				degree: degree,
				study: study,
				endDate: endDate,
				startDate: startDate,
				id: props.id || uniqid(),
				isEditable: false,
			});
			props.closeForm();
		}
	}

	function displayForm() {
		return (
			<form className="cv-forms" onSubmit={handleSubmit}>
				<TextField
					label="School"
					name="school"
					type="text"
					value={school}
					onChange={(event) => setSchool(event.target.value)}
					required
				/>
				<TextField
					label="Degree"
					name="degree"
					type="text"
					value={degree}
					onChange={(event) => setDegree(event.target.value)}
					required
				/>
				<TextField
					label="Field of Study"
					name="study"
					type="text"
					value={study}
					onChange={(event) => setStudy(event.target.value)}
					required
				/>
				<div className="d-flex dates">
					<TextField
						error={startDateError}
						label="Start Date"
						name="startDate"
						type="month"
						value={startDate}
						helperText={startDateHelperText}
						onChange={(event) => setStartDate(event.target.value)}
						required
					/>
					<TextField
						label="End Date"
						type="month"
						name="endDate"
						value={endDate}
						helperText="Or expected graduation"
						onChange={(event) => setEndDate(event.target.value)}
						required
					/>
				</div>
				<div className="d-flex justify-between footer-btns">
					<Button
						variant="contained"
						color="secondary"
						type="button"
						onClick={props.closeForm}
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

	function handleErrors() {
		const fields = [school, degree, study, startDate, endDate];
		fields.forEach((field) => {
			if (field === "") {
				return false;
			}
		});
		if (startDate > endDate) {
			setStartDateHelperText("Start date cannot be lesser");
			setStartDateError(true);
			return false;
		} else {
			setStartDateHelperText("");
			setStartDateError(false);
		}
		return true;
	}

	if (!props.isReadOnly) {
		return displayForm();
	}
	return <div></div>;
}
