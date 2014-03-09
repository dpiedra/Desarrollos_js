/**
 * Created by davidpr on 01/02/14.
 */


var app = app || {};

$(function() {
    $( '#releaseDate' ).datepicker();
    new app.LibraryView();
    new app.userView();
});