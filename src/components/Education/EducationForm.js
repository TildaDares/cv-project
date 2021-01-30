import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function EducationForm() {
	return (
		<form className="cv-forms">
			<TextField label="School" type="text" required />
			<TextField label="Degree" type="text" required />
			<TextField label="Field of Study" type="text" required />
			<div className="d-flex dates">
				<TextField label="Start Date" type="month" required />
				<TextField label="End Date" type="month" helperText="Or expected graduation" required />
			</div>
			<Button variant="contained" color="secondary" className="submit" type="submit">
				Submit
			</Button>
		</form>
	);
}
