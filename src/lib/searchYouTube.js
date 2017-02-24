var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(error) {
      console.error('YouTube: Failed to fetch video', error);
    }
  });
};

window.searchYouTube = searchYouTube;