import React from 'react';

const Announcement = (props) => {
	return (
		<div className={props.note}>
			<div className="note">公告：16道春節料理大賽新食譜已更新</div>
			<span className="button" onClick={() => props.deleteAnnouncement()}>
				&#10005;
			</span>
		</div>
	);
};

export default Announcement;
