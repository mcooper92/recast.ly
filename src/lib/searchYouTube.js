var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',  
    data: {
      part: 'snippet',
      key: YOUTUBE_API_KEY, 
      q: options.query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      callback(data.items);
      
    }
  });


};

window.searchYouTube = searchYouTube;

