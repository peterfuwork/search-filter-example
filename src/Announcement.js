import React from 'react';

const Announcement = (props) => {
	return (
		<div className={props.note}>
			<div className="note">
				<div>
					公告：已更新6月後新食譜: 5道新料理、6道魚、18道檸檬、23道馬鈴薯料理!
				</div>
				<div>NEW !!! 9道2020年端午節料理 ~</div>
			</div>
			<span className="button" onClick={() => props.deleteAnnouncement()}>
				&#10005;
			</span>
		</div>
	);
};

export default Announcement;
