import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import SortRules from './components/sort_rules';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import searchYoutube from 'youtube-api-v3-search';
import { Row, Col, Navbar, Input } from 'react-materialize';

const scroll = {
	overflowY: "scroll",
	height: "55vh"
}

const API_KEY = 'AIzaSyCC3szf_4HtQRTmmFpom2rHHVIqoVa5mUY'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null
		};

		this.videoSearch('');
		this.sortResults = this.sortResults.bind(this);
	}

	videoSearch(searchTerm) {
		YTSearch( {key: API_KEY, term: searchTerm, max: 10}, (data) => {
			console.log(data);
			this.setState( {
				videos: data,
				selectedVideo: data[0]
			});
		});
	}

	sortResults(e) {
		var videoList = this.state.videos
		if (e.target.value == 'title') {
				videoList.sort((a,b) => {
				return a.snippet.title > b.snippet.title;
			});
		}
		if (e.target.value == 'published') {
			videoList.sort((a,b) => {
				return a.snippet.publishedAt > b.snippet.publishedAt;
			});
		}
		this.setState( {
			videos: videoList
		});	
		// console.log(this.state.videos);
	}
	
	render() {
		return (
			<div className="blue-grey lighten-5">
				<Navbar brand=' Youtube Search' className="grey darken-4" />	
				<Row>
					<SearchBar onSearchTermChange = {searchTerm => this.videoSearch(searchTerm)} />
				</Row>
				<Row>
					<Col s={8}>
						<VideoDetail video = {this.state.selectedVideo} />
					</Col>
					<Col s={4}>
						<Row>
							<Input s={12} type="select" defaultValue="" id="sortBy" onChange={this.sortResults}>
								<option value="" disabled>
									Sort By
								</option>
								<option value="title">Name</option>
								<option value="published">Published On</option>
							</Input>
						</Row>
						<Row>
						<div style={scroll}>
							<VideoList
								onVideoSelect = {userSelected => this.setState({selectedVideo: userSelected}) }
								videos={this.state.videos} />
						</div>
						</Row>
					</Col>
				</Row>
			</div>
    		);
  	}
}

export default App;
