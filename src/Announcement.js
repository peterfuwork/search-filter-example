import React from 'react';

const Announcement = (props) => {
	return (
		<div className={props.note}>
			<div className="note">
				公告：總料理已更新至248道,其中16道為春節料理大賽新食譜
			</div>
			<span className="button" onClick={() => props.deleteAnnouncement()}>
				&#10005;
			</span>
		</div>
	);
};

export default Announcement;
