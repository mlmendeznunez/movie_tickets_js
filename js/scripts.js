/*
 * JAVASCRIPT
 */

var movies = [];
var tickets = [];

function Movie(movie, showTimes){
  this.name = name;
  this.showTimes = showTimes;
  movies.push(this);
}

var movie1 = new Movie("Cinderella", ["10:30 AM", " 1:15 PM", " 3:00 PM", " 7:30 PM"]);
var movie2 = new Movie("Nemo", ["11:30 AM", " 3:15 PM", " 8:00 PM", " 12 AM"]);
var movie3 = new Movie("Monsters Inc.", ["9:30 AM", " 2:45 PM", " 5:00 PM", " 6:00 PM"]);


function Ticket( movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  // this.addresses = [];
}

Ticket.prototype.ticketInfo = function() {

  return this.movie + ", " + this.time + ", " + this.age;
}

function calculateTicket( movie, time, age) {
  if (isMatinee)
    return 5; 
  } else {
    if (infant){
      return 0; 
    } else if (student || senior){
      return 7;
    } else {
      return 10;
    }
  }

var isMatinee = function(time){
  if (time === matinee) {
    return true;
  } else {
    return false;
  }
}

function resetFields() {
  $("#new-movie").val("");
  $("#new-time").val("");
  $(".new-age").val("");
}

$(document).ready(function() {
  //debugger;

$("form#select-movie").submit(function(event) {
    event.preventDefault();
    $(option#showtimes).append("<span class='movie'>" + movie.name + "</span>");
    var inputtedMovie = $("#movie").val(" ");
  }

  $("ul#showtimes").append("<span class='location'>" + movie.showTimes + "</span>"); //.text(movie.showTimes)


  // var infant = 0; 
  // var student = 0; 
  // var adult = 0;
  // var senior = 0; 

  /* Form to obtain input for ticket price query */
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#new-movie").val(); //val(" ")
    var inputtedTime = $("#new-time").val();
    var inputtedAge = $("#new-age").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
  });

  /*Routing ticket prices to the web site*/
  $("ul#tickets").append("<li><span class='ticket'>" + newTicket.ticketInfo + "</span></li>");

    // var deleteAdditionalAddresses = new resetAddresses();
    var clear = new resetFields();

  });//closes form new-contact
});
