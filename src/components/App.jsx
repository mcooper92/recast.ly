class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
       
    };
  }
  
  onVidEntryClickHandler(newVideo) {
    this.setState({currentVideo: newVideo});
    
  }
  
  searchHandler(videoArray) {
    //this.setState({videos: videoArray});
    // console.log(videoArray
  }
  
  componentDidMount(query, searchHandler) { 
    // console.log(this)
    searchYouTube({'query': query, 'max': 5, key: window.YOUTUBE_API_KEY}, this.searchHandler); 
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video= {this.state.currentVideo} />
            
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videos} clickFunction = {this.onVidEntryClickHandler.bind(this)} />
            
          </div>
        </div>
      </div>); 
  }
  
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; 


// unifying idea behind react, info flows down 
// 12/14: TRY WILLMOUNT JUST TO EXPERIMENT