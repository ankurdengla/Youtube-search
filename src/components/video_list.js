import React from 'react';
import VideoListItem from './video_list_item';

const scroll = {
	overflow: "auto"
};

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onUserSelected = {props.onVideoSelect}
				key = {video.etag}
				video = {video} />
		);
	});

	return (
		<ul>
			{videoItems}
		</ul>
	);
};

export default VideoList;
