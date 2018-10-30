import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCC3szf_4HtQRTmmFpom2rHHVIqoVa5mUY'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

    this.videoSearch('Sidemen');
	}

	videoSearch(term) {
		YTSearch( {key: API_KEY, term: term}, (data) => {
			this.setState( {
        videos: data
      });
      // console.log(data);
		});
	}
	
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
    		);
  	}
}

export default App;
