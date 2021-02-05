import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

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
						<h4>Channels</h4>
					</div>
					<AddIcon className="sidebar__addChannel" />
				</div>
				<div className="sidebar__channelList">
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
			</div>
			</div>
			<div className="sidebar__voice">
				<SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
				<div className="sidebar__voiceInfo">
					<h3>Voice Connected</h3>
					<p>Stream</p>
				</div>
				<div className="sidebar__voiceIcons">
					<InfoOutlinedIcon />
					<CallIcon />
				</div>
			</div>
			<div className="sidebar__profile">
				<Avatar src="https://avatars.githubusercontent.com/u/61378336?s=460&u=008ad1757084930a61ea5e9cff4e11263d3176e2&v=4" />
				<div className="sidebar__profileInfo">
					<h3>@richaulivia</h3>
					<p>#theCreatorID</p>
				</div>
				<div className="sidebar__profileIcons">
					<MicIcon />
					<HeadsetIcon />
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;