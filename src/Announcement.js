import React from 'react';

const Announcement = (props) => {
	return (
		<div className={props.note}>
			<div className="note">公告：總料理更新至248道,8道為元宵節料理食譜</div>
			<span className="button" onClick={() => props.deleteAnnouncement()}>
				&#10005;
			</span>
		</div>
	);
};

export default Announcement;
