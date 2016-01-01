(function() {
  "use strict";

  var demodays = angular.module('demodaysControllers', ['ngSanitize']);
  
  /* Controller of index/homepage */
  demodays.controller('IndexCtrl', function($scope) { 
    /* Commonly used */
    $scope.RSVP = "RSVP";
    $scope.FBEvent = "https://www.facebook.com/events/389260677946329/";

    /* Title row */
    $scope.title = "Demodays";
    $scope.tagline = "Student demos at the intersections of art, design, and code";
  
    /* Info in box */
    $scope.date = "6/11/2015";
    $scope.day = "Sunday";
    $scope.time = "2:00-6:00";
    $scope.detailTime = "<li>Hacking</li><li>Demos</li><li>Keynote</li><li>Fooooood</li>";
    $scope.location = "Pfizer Auditorium, NYU Poly";
    $scope.address = "<li>5 MetroTech Center 1st Floor, Dibner Building</li><li>Brooklyn, NY 11201</li>";

    /* About current demoday row */
    $scope.currentTitle = "Demo Days + Startup Week + HackNYU";
    $scope.currentDesc = "Join us for a special Demo Days and Keynote Speaker as part of <a href=\"http://nyusw.com/\">Startup Week</a>, in partnership with <a href=\"http://hacknyu.org/\">Hack NYU</a>!"; // sanitize
    
    /* Show off & hang out row */
    $scope.showOff = [
      { 
        icon: "ion-ios7-lightbulb",
        title: "Wanna show off?",
        subtitle: "SIGN UP",
        href: "https://docs.google.com/forms/d/1pAs9qC2fjLJ2EUA6Fr-vZJ9gY7sZFhk0Zwr4qDphQEE/viewform"
      },
      {
        icon: "ion-ios7-glasses",
        title: "Wanna hang out?",
        subtitle: "RSVP",
        href: "https://www.facebook.com/events/389260677946329/"
      }
    ];

    /* About DemoDays row */
    $scope.aboutTitle = "What is DemoDays?";
    $scope.aboutDesc = "DemoDays is a monthly student-run event in NYC, organized by tech@NYU, Parsons Code Club, Create@Cooper and Columbia ADI. We're all about fostering a community of students who create things. We want to provide a platform for student builders to present their work, to celebrate their creations, and let that inspire other students to build projects they care about."; // sanitize

    /* Current program row */
    $scope.programTitle = "April 12th Program";
    $scope.programDesc = "<p>2:00 - 2:45 Refreshments</p><p>3:00 - 4:00 Surprise keynote speaker</p><p>4:00 - 5:30 Student demos!</p><p>See <a href=\"http://hacknyu.org/#schedule\">HackNYU</a> for the hackathon leading up to this event.</p>";

    /* Keynote speakers row */
    $scope.keynoteTitle = "Keynote Speaker";
    $scope.keynoteSpeakers = [
      {
        img: "assets/img/hilary-mason.jpg",
        desc: "<a href=\"https://www.twitter.com/hmason\">Hilary Mason</a>, founder of <a href=\"http://www.fastforwardlabs.com/\">Fast Forward Labs</a> and former Data Scientist at <a href=\"https://accel.com\">Accel</a> and <a href=\"https://bitly.com/\">Bit.ly</a>. Cofounder of <a href=\"http://hackny.org/\">HackNY</a>." // sanitize
      }
    ];

    /* Sign up for demos row */
    $scope.signupTitle = "Demo Program";
    $scope.signupDesc = "Want to demo your project? Sign up <a href=\"https://docs.google.com/forms/d/1pAs9qC2fjLJ2EUA6Fr-vZJ9gY7sZFhk0Zwr4qDphQEE/viewform\">here</a>!";

    /* Hosts row */
    $scope.hostsTitle = "Hosts";
    $scope.hostsImg = [
      {
        src: "assets/logos/techatnyu.png",
        alt: "tech@nyu"
      },
      { 
        src: "assets/logos/nyuscc.png",
        alt: "hacknyu"
      }
    ];

    /* Previous Sponsors and Hosts row */
    $scope.prevSponsorsTitle = "Previous Sponsors and Hosts";
    $scope.prevSponsorsImg = [ 
      { 
        href: "http://createatcooper.org/",
        hrefTitle: "create@cooper",
        src: "assets/logos/cooper.png",
        alt: "create@cooper"
      },
      {
        href: "https://www.facebook.com/Eianyupoly",
        hrefTitle: "EIA",
        src: "assets/logos/eia.png",
        alt: "NYU Poly Entrepreneurship and Innovation Association"
      },
      { 
        href: "http://localhackday.mlh.io",
        hrefTitle: "Local Hack Day",
        src: "assets/logos/mlh.png",
        alt: "Major League Hacking"
      },
      {
        href: "http://spotify.com",
        hrefTitle: "Spotify",
        src: "assets/logos/spotify.png",
        alt: "Spotify"
      },
      {
        href: "http://quirky.com",
        hrefTitle: "Quirky",
        src: "assets/logos/quirky.png",
        alt: "Quirky"
      },
      {
        href: "http://squarespace.com",
        hrefTitle: "Squarespace",
        src: "assets/logos/squarespace.png",
        alt: "Squarespace"
      },
      {
        href: "https://www.catercow.com/",
        hrefTitle: "CaterCow",
        src: "assets/logos/catercow.png",
        alt: "CaterCow"
      },
      {
        href: "https://www.facebook.com/parsonscodeclub",
        hrefTitle: "Parsons Code Club",
        src: "assets/logos/pcc.png",
        alt: "Parsons Code Club"
      },
      {
        href: "http://adicu.com/",
        hrefTitle: "Columbia Application Development Initiative",
        src: "assets/logos/adi.png",
        alt: "Columbia ADI"
      }
    ]

  });

})();
