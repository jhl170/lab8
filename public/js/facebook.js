function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  $('.facebookLogin').hide("p");
  $("#name").text(response.name);
  $("#photo").attr("src", "https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/12140755_10153739321334697_3181428523284105369_n.jpg?oh=45db2b73230ab407c26a0b064bb23e5c&oe=59379FDA");
}