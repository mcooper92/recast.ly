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

  onSubmitClickHandler(newQuery) {
    var newQuery = ($('#formQuery').val());
    searchYouTube({key: window.YOUTUBE_API_KEY, 'query': newQuery, 'max': 5}, (itemsArray) => this.searchHandler(itemsArray)); 
  }

  
  searchHandler(videoArray) {
    this.setState({videos: videoArray, currentVideo: videoArray[0]});
   
    
  }
  
  componentDidMount(query = 'Chance the Rapper', searchHandler) {  
    searchYouTube({key: window.YOUTUBE_API_KEY, 'query': query, 'max': 5}, (itemsArray) => this.searchHandler(itemsArray)); 
    
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search clickFunction= {this.onSubmitClickHandler.bind(this)} />
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