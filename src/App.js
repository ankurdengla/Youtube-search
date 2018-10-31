import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import SortRules from './components/sort_rules';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import searchYoutube from 'youtube-api-v3-search';

const API_KEY = 'AIzaSyCC3szf_4HtQRTmmFpom2rHHVIqoVa5mUY'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null,
			sortby: ''
		};

		this.videoSearch('');
		this.sortResults = this.sortResults.bind(this);
	}

	videoSearch(searchTerm) {
		YTSearch( {key: API_KEY, term: searchTerm}, (data) => {
			console.log(data);
			this.setState( {
				videos: data,
				selectedVideo: data[0]
			});
		});
	}

	sortResults(e) {
		const videoList = this.state.videos
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
			sortby: e.target.value,
			videos: videoList
		});	
		console.log(this.state.sortby);
		console.log(this.state.videos);
	}
	
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange = {searchTerm => this.videoSearch(searchTerm)} />
				<form>
					<div className="sort-rules" >
						<select value={this.state.sortby} onChange={this.sortResults}>
							<option value="title">Name</option>
							<option value="published">Published On</option>
						</select>	
					</div>
					{/* <SortRules value={this.state.sortby} onChange={this.sortResults} /> */}
					{/* <button type="button" onClick={this.sortResults}>abc</button> */}
				</form>
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList
					onVideoSelect = {userSelected => this.setState({selectedVideo: userSelected}) }
					videos={this.state.videos} />
			</div>
    		);
  	}
}

export default App;
