import React from 'react';
import {Row, Col, Preloader} from 'react-materialize';

const player = {
	height: "55vh",
	width: "100%",
};

const Row2 = {
	height: "20vh"
}

const VideoDetail = (props) => {
	const video = props.video;

	if (!video) {
		return <div align="middle"><Row style={Row2} /><Preloader flashing size="big"/></div>;
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
					<div><b>{video.snippet.title}</b></div>
					<div>{video.snippet.description}</div>
				</Col>
			</Row>
		</div>
	);
};

export default VideoDetail;
