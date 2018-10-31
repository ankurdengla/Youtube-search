import React from 'react';
import {Col, Card, CardTitle} from 'react-materialize';

const VideoListItem = (props) => {
	const video = props.video;
	const onUserSelected = props.onUserSelected;
	// console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;
	var date = String(video.snippet.publishedAt);
	date = date.split("T");

	console.log(date);

	return (
		<li onClick={() => onUserSelected(video)} className="list-group-item">
			<Col>
				<Card horizontal header={<CardTitle image={imageUrl}></CardTitle>} >
					<p><b>Title - </b>{video.snippet.title}</p>
					<p><b>Date Published - </b>{date[0]}</p>
					<p><b>Time Published - </b>{date[1].slice(0,8)}</p>
				</Card>
			</Col>
		</li>
	);
};

export default VideoListItem;
