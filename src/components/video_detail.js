import React from 'react';
import {Row, Col, MediaBox} from 'react-materialize';

const VideoDetail = (props) => {
	const video = props.video;

	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className = "video-detail">
			<Row>
				<iframe src={url}></iframe>
			</Row>
			<Row>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</Row>
		</div>
	);
};

export default VideoDetail;
