class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0]
    };
    this.handleVideoListEntryClick = this.handleVideoListEntryClick.bind(this);
  }

  handleVideoListEntryClick(e) {
    // debugger;
    this.setState({
      video: e.currentTarget.props.video 
      // video: e
      // video: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList entryClick={this.handleVideoListEntryClick} videos={window.exampleVideoData}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
