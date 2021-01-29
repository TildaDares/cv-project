import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import logo from "../logo.png";
import "../styles/navbar.css";
import "../styles/main.css";
function NavBar(props) {
	return (
		<AppBar color="default">
			<ToolBar className="d-flex justify-around">
				<div className="d-flex">
					<img src={logo} alt="logo" className="main-logo" />
					<Typography variant="h6">CV Maker</Typography>
				</div>
				<FormControlLabel
					control={
						<Switch
							onChange={props.handleChange}
							name="read-only"
							color="primary"
						/>
					}
					label="Read-Only"
				/>
			</ToolBar>
		</AppBar>
	);
}
export default NavBar;
