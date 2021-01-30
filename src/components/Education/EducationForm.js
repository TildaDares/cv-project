import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function EducationForm(props) {
	return (
		<form className="cv-forms">
			<TextField label="School" type="text" required />
			<TextField label="Degree" type="text" required />
			<TextField label="Field of Study" type="text" required />
			<div className="d-flex dates">
				<TextField label="Start Date" type="month" required />
				<TextField
					label="End Date"
					type="month"
					helperText="Or expected graduation"
					required
				/>
			</div>
			<div className="d-flex justify-between">
				<Button
					variant="contained"
					color="secondary"
					className="submit"
          type="button"
          onClick={props.handleEducationChange}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					color="primary"
					className="submit"
					type="submit"
				>
					Submit
				</Button>
			</div>
		</form>
	);
}
