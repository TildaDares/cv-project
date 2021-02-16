import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import uniqid from "uniqid";
export default function ExperienceForm(props) {
	const [organisation, setOrganisation] = useState(props.organisation || "");
	const [position, setPosition] = useState(props.position || "");
	const [description, setDescription] = useState(props.description || "");
	const [startDate, setStartDate] = useState(props.startDate || "");
	const [endDate, setEndDate] = useState(props.endDate || "");
	const [startDateHelperText, setStartDateHelperText] = useState("");
	const [startDateError, setStartDateError] = useState(false);
	const [disabled, setDisabled] = useState(false);

	function displayForm() {
		return (
			<form className="cv-forms" onSubmit={handleSubmit}>
				<TextField
					label="Organisation"
					name="organisation"
					type="text"
					value={organisation}
					onChange={(event) => setOrganisation(event.target.value)}
					required
				/>
				<TextField
					label="Position"
					name="position"
					type="text"
					value={position}
					onChange={(event) => setPosition(event.target.value)}
					required
				/>
				<TextField
					label="Job description"
					name="description"
					multiline
					rows={4}
					value={description}
					onChange={(event) => setDescription(event.target.value)}
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
						disabled={disabled}
						onChange={(event) => setEndDate(event.target.value)}
						required
					/>
				</div>
				<FormControlLabel
					control={
						<Switch
							onChange={(event) => setDisabled(event.target.checked)}
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

	function handleSubmit(event) {
		event.preventDefault();
		if (handleErrors()) {
			props.addExperience({
				organisation,
				position,
				description,
				endDate: disabled ? "Present" : endDate,
				startDate,
				id: props.id || uniqid(),
				isEditable: false,
			});
			props.closeForm();
		}
	}

	function handleErrors() {
		const fields = [organisation, position, startDate, endDate];
		fields.forEach((field) => {
			if (field === "") {
				return false;
			}
		});

		if (disabled) {
			return true;
		}

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
