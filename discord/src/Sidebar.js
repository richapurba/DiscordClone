import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Built by Richa</h3>
				<ExpandMoreIcon />
			</div>
			<div className="sidebar__channels">
				<div className="channels__header">
					<div className="sidebar__header">
						<ExpandMoreIcon />
						<h4>Text Channels</h4>
					</div>
					<AddIcon className="sidebar__addChannel" />
				</div>
			</div>
			<div className="sidebar__channelList">
				<SidebarChannel />
			</div>
		</div>
	);
}

export default Sidebar;