import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import "../styles/general.css";

export default function General(props) {
	function handleFocusOnReadOnly() {
		return props.isReadOnly ? "" : "focus-input";
	}

	return (
		<div id="general">
			<InputBase
				className="name heading"
				id="standard-multiline-flexible"
				placeholder="Jane Doe"
				readOnly={props.isReadOnly}
				multiline
				inputProps={{ "aria-label": "name" }}
			/>
			<InputBase
				className={`profession profession-mb heading ${handleFocusOnReadOnly()}`}
				placeholder="Profession"
				readOnly={props.isReadOnly}
				inputProps={{ "aria-label": "profession" }}
			/>
			<div className="d-flex">
				<InputBase
					className={`address-font-size form-inputs ${handleFocusOnReadOnly()}`}
					placeholder="Fake address"
					readOnly={props.isReadOnly}
					inputProps={{ "aria-label": "address" }}
					type="text"
					startAdornment={
						<InputAdornment position="start">
							<HomeIcon />
						</InputAdornment>
					}
				/>
			</div>
			<div className="d-flex">
				<InputBase
					className={`telephone-font-size form-inputs ${handleFocusOnReadOnly()}`}
					placeholder="0890483883838"
					readOnly={props.isReadOnly}
					inputProps={{ "aria-label": "telephone" }}
					type="tel"
					startAdornment={
						<InputAdornment position="start">
							<PhoneIcon />
						</InputAdornment>
					}
				/>
			</div>
			<div className="d-flex">
				<InputBase
					className={`email-font-size form-inputs ${handleFocusOnReadOnly()}`}
					placeholder="youremail@gmail.com"
					readOnly={props.isReadOnly}
					inputProps={{ "aria-label": "email" }}
					type="email"
					startAdornment={
						<InputAdornment position="start">
							<EmailIcon />
						</InputAdornment>
					}
				/>
			</div>
			<InputBase
				className="description"
				placeholder="Tell me about yourself"
				readOnly={props.isReadOnly}
				multiline
				rowsMax={4}
				inputProps={{ "aria-label": "description" }}
			/>
		</div>
	);
}
