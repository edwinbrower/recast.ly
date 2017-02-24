class App extends React.Component {
  constructor(props) {
    super(props);
    // window.searchYouTube();
    // var options = {
    //   key: window.YOUTUBE_API_KEY,
    //   q: 'cats',
    //   maxResults: 10,
    // };
    this.state = {
      video: window.exampleVideoData[0],
      // video: null,
      // videoList: props.searchYouTube(options, _.identity)
      videoList: window.exampleVideoData
      // videoList: []
    };
    // this.handleVideoListEntryClick = this.handleVideoListEntryClick.bind(this);
  }

  handleVideoListEntryClick(video) {
    this.setState({
      video: video
    });
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      q: 'beyonce',
      maxResults: 10,
    };
  //   this.setState = {
  // //     // video: window.exampleVideoData[0],
  //     videoList: props.searchYouTube(options) //, _.identity)
  // //     // videoList: window.exampleVideoData
  //   };
    this.getVideos(options);
  }

  getVideos(options) {
    this.props.searchYouTube(options, (videos) => 
      this.setState({
        video: videos[0],
        videoList: videos
      })
    );
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList entryClick={this.handleVideoListEntryClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
