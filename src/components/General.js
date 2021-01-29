import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import "../styles/general.css";
export default function General(props) {
	return (
		<div id="general">
			<InputBase
				className="name heading"
				id="standard-multiline-flexible"
				placeholder="Jane Doe"
				readOnly={props.readOnly}
				multiline
				rowsMax={4}
				inputProps={{ "aria-label": "name" }}
			/>
			<InputBase
				className="profession profession-mb heading"
				placeholder="Profession"
				readOnly={props.readOnly}
				inputProps={{ "aria-label": "profession" }}
			/>
			<div className="d-flex">
				<Typography variant="h6" className="input-margin">
					Tel:
				</Typography>
				<InputBase
					className="telephone-font-size form-inputs"
					placeholder="0890483883838"
					readOnly={props.readOnly}
					inputProps={{ "aria-label": "telephone" }}
					type="tel"
				/>
			</div>
			<div className="d-flex">
				<Typography variant="h6" className="input-margin">
					Email:
				</Typography>
				<InputBase
					className="email-font-size form-inputs"
					placeholder="youremail@gmail.com"
					readOnly={props.readOnly}
					inputProps={{ "aria-label": "email" }}
					type="email"
				/>
			</div>
			<InputBase
				className="description"
				placeholder="Tell me about yourself"
				readOnly={props.readOnly}
				multiline
				rowsMax={4}
				inputProps={{ "aria-label": "description" }}
			/>
		</div>
	);
}
