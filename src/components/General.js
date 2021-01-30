import InputBase from "@material-ui/core/InputBase";
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import "../styles/general.css";

export default function General(props) {
	return (
		<form id="general">
			<InputBase
				className="name heading"
				id="standard-multiline-flexible"
				placeholder="Jane Doe"
				required
				readOnly={props.readOnly}
				multiline
				rowsMax={4}
				inputProps={{ "aria-label": "name" }}
			/>
			<InputBase
				className="profession profession-mb heading general-input"
				placeholder="Profession"
				required
				readOnly={props.readOnly}
				inputProps={{ "aria-label": "profession" }}
			/>
			<div className="d-flex">
				<InputBase
					className="address-font-size form-inputs general-input"
					placeholder="Fake address"
					readOnly={props.readOnly}
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
					className="telephone-font-size form-inputs general-input"
					placeholder="0890483883838"
					readOnly={props.readOnly}
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
					className="email-font-size form-inputs general-input"
					placeholder="youremail@gmail.com"
					required
					readOnly={props.readOnly}
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
				readOnly={props.readOnly}
				multiline
				rowsMax={4}
				inputProps={{ "aria-label": "description" }}
			/>
      <Button color="primary" type="submit" className="float-right" variant="contained">Save</Button>
		</form>
	);
}
