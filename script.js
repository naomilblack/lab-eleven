

$(function(){
  $.get("https://www.reddit.com/r/aww/.json", function(responseBody) {
    console.log(responseBody.data.children[1].data);

    responseBody.data.children.forEach(function(post){
      var $post= $('<div class ="posts">');

      var $title = post.data.title;
      $post.append('<h1 class ="title">' + $title + '</h1>');

      var $author = post.data.author;
      $post.append('<h2 class ="author">' + $author + '</h2>')

      var $image = post.data.preview.url;
      $post.append("<img src='" + $image + "' />" );

      var $comments = post.data.num_comments;
      $post.append('<p class ="comments">' + $comments + ' ' + "comments" + '</p>')


      $('.container').append($post);


    });




  });

});
