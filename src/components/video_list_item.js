import React from 'react';
import {Col, Card, CardTitle} from 'react-materialize';

const VideoListItem = (props) => {
	const video = props.video;
	const onUserSelected = props.onUserSelected;
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onUserSelected(video)} className="list-group-item">
			{/* <div className = "video-list media">
				<div className = "media-left">
					<img className = "media-object" src={imageUrl} />
				</div>
				<div className = "media-body">
					<div className = "media-heading">{video.snippet.title}</div>
					<div className = "media-heading">{video.snippet.publishedAt}</div>
				</div>
			</div> */}
			<Col>
				<Card horizontal header={<CardTitle image={imageUrl}></CardTitle>} >
					<p>{video.snippet.title}</p>
					<p>{video.snippet.publishedAt}</p>
				</Card>
			</Col>
			{/* <Card className='small'
				header={<CardTitle image={imageUrl}>{video.snippet.title}</CardTitle>}>
			</Card> */}
		</li>
	);
};

export default VideoListItem;
