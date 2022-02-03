function fetchGitHubInformation(event){

    var username = $('#gh-username').val();
    if (!username){
        $('#gh-user-data').html(`<h2>Please enter a GitHub Username</h2>`);
        return;
    }
    $('#gh-user-data').html
        (`<div id = "loader">
            <img src="assets/css/loader.gif" alt="loading..."/>
        </div>`)

        $.when(
            $.getJSON(`hhtp://api.github.com/users/${username}`)
        ).then (
            function(response) {
                var userData = response;
                $('#gh-user-data').html(userInformation.html(userData));
            }, function(errorResponse){
                if (errorResponse === 404){
                    $('#gh-user-data').html(`<h2>No info found for user ${username}</h2>`);
                } else {
                    console.log(errorResponse);
                    $('#gh-user-data').html(
                        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                }
            });
}