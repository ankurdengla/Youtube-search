import React from 'react';
import {Row, Col, MediaBox} from 'react-materialize';

const player = {
	height: "55vh",
	width: "100%",
};

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
				<Col s={12}>
					<iframe src={url} style={player}></iframe>
				</Col>
			</Row>
			<Row>
				<Col>
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</Col>
			</Row>
		</div>
	);
};

export default VideoDetail;
