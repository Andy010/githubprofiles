

$(document).ready(function(){
        $('#add-profile').on('submit', function(e){
          e.preventDefault();
          var url = 'https://api.github.com/users/' + $('#username').val() + '?access_token=35fe801e8c68c709df97205cc9ca047668d17aa9';

          var userData = $.get(url, function(user) {            
            $('<article class="profile"><section class="pic"><img src="' + user.avatar_url + '"></section><section class="statistics"><h3><a href="https://github.com/' + user.login + '">' + user.login + '</a></h3><strong>Repos: ' + user.public_repos + '</strong><strong>Followers: ' + user.followers + '</strong></section><br clear="all"></article>').appendTo('.profile-container');
          }).fail(function(){
            alert('Could not find this user.');
          }).always(function() {
            $('#username').val('');
      })
    })
  })