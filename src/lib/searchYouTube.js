var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET', 
    data: {
      part: 'snippet',
      key: options.key,
      query: options.query,
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      callback(data.items);
    }
  });


};

window.searchYouTube = searchYouTube;

