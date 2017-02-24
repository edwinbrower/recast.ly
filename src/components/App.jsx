class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      // video: null,
      videoList: []
    };
  }

  handleVideoListEntryClick(video) {
    this.setState({
      video: video
    });
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'beyonce',
      max: 10,
    };
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
