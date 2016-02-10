(function() {
  "use strict";

  var demodays = angular.module('demodaysControllers', [
     'ngSanitize',
     'restangular'
  ]).config(function(RestangularProvider) {
     RestangularProvider.setBaseUrl('https://api.tnyu.org/v3');
     // Configuring Restangular to work with JSONAPI spec
     RestangularProvider.setDefaultHeaders({
       'Accept': 'application/vnd.api+json, application/*, */*',
       'Content-Type': 'application/vnd.api+json; ext=bulk'
     });
     RestangularProvider.addResponseInterceptor(function(data) {
       return data;
     });
  });

  /* Controller of index/homepage */
  demodays.controller('IndexCtrl', function($scope, Restangular) {
    var attributes, RSVP, RSVPForm, demoForm;
    /* About current demoday row */
    Restangular.one("events?sort=-startDateTime&filter[simple][teams]=53f99d48c66b44cf6f8f6d81")
      .get()
      .then(function(data) {
        /* Commonly used */
        var attributes = data.data[0].attributes;
        var relationships = data.data[0].relationships;
        var RSVP = "RSVP";
        var RSVPForm = attributes.rsvpUrl;

        /* TO-DO: Parses the and looks for the demo form*/
        var demoForm = "http://goo.gl/forms/HF2s2uBxSY";

        $scope.RSVP = "RSVP";
        $scope.RSVPForm = RSVPForm;

        /* Title row */
        $scope.title = "DemoDays";
        $scope.tagline = "Student demos at the intersections of art, design, and code";
        $scope.image = "";

        /* Info in box */
        $scope.date = attributes.endDateTime;
        $scope.start = attributes.startDateTime;
        $scope.detailTime = "<li>Hacking</li><li>Demos</li><li>Keynote</li><li>Fooooood</li>"; // sanitize

        $scope.currentTitle = attributes.title;
        $scope.currentDesc = attributes.description; /* sanitize */

        /* Show off & hang out row */
        $scope.showHangs = [
          {
            icon: "ion-ios7-lightbulb",
            title: "Wanna show off?",
            subtitle: "SIGN UP",
            href: demoForm,
            cls: "demo"
          },
          {
            icon: "ion-ios7-glasses",
            title: "Wanna hang out?",
            subtitle: "RSVP",
            href: RSVPForm,
            cls: "attend"
          }
        ];
        /* About DemoDays row */
        $scope.aboutTitle = "What is DemoDays?";
        $scope.aboutDesc = "DemoDays is a monthly student-run event in NYC, organized by tech@NYU, Parsons Code Club, Create@Cooper and Columbia ADI. We're all about fostering a community of students who create things. We want to provide a platform for student builders to present their work, to celebrate their creations, and let that inspire other students to build projects they care about."; /* sanitize */
        $scope.signupDesc = "Want to demo your project? Sign up <a href=" + demoForm + ">here</a>!"; // sanitize

        /* Sign up for demos row */
        $scope.signupTitle = "Demo Program";

        /* Hosts row */
        $scope.hostsTitle = "Hosts";
        $scope.hostsImg = [
          {
            src: "../assets/logos/techatnyu.png",
            name: "tech@nyu",
            href: "http://techatnyu.org"
          }
        ];

        /* Previous Sponsors and Hosts row */
        $scope.prevSponsorsTitle = "Previous Sponsors and Hosts";
        $scope.prevSponsorsImg = [
          {
            href: "http://createatcooper.org/",
            title: "create@cooper",
            src: "../assets/logos/cooper.png",
            alt: "create@cooper"
          },
          {
            href: "https://www.facebook.com/Eianyupoly",
            title: "EIA",
            src: "../assets/logos/eia.png",
            alt: "NYU Poly Entrepreneurship and Innovation Association"
          },
          {
            href: "http://localhackday.mlh.io",
            title: "Local Hack Day",
            src: "../assets/logos/mlh.png",
            alt: "Major League Hacking"
          },
          {
            href: "http://spotify.com",
            title: "Spotify",
            src: "../assets/logos/spotify.png",
            alt: "Spotify"
          },
          {
            href: "http://quirky.com",
            title: "Quirky",
            src: "../assets/logos/quirky.png",
            alt: "Quirky"
          },
          {
            href: "http://squarespace.com",
            title: "Squarespace",
            src: "../assets/logos/squarespace.png",
            alt: "Squarespace"
          },
          {
            href: "https://www.catercow.com/",
            title: "CaterCow",
            src: "../assets/logos/catercow.png",
            alt: "CaterCow"
          },
          {
            href: "https://www.facebook.com/parsonscodeclub",
            title: "Parsons Code Club",
            src: "../assets/logos/pcc.png",
            alt: "Parsons Code Club"
          },
          {
            href: "http://adicu.com/",
            title: "Columbia Application Development Initiative",
            src: "../assets/logos/adi.png",
            alt: "Columbia ADI"
          }
        ]

        /* Footer */
        $scope.footerTitle = "DemoDays";
        $scope.footerDesc = "<a href=\"http://techatnyu.org\">tech@NYU</a>. Want to attend more events like this? <a href=\"http://techatnyu.org\">Learn more about tech@NYU</a>!</p>"; // sanitize
        $scope.footerSocial = [
          {
            href: "https://www.facebook.com/TechatNYU",
            icon: "ion-social-facebook",
            title: "facebook"
          },
          {
            href: "https://twitter.com/TechatNYU",
            icon: "ion-social-twitter",
            title: "twitter"
          },
          {
            href: "mailto:hello@techatnyu.org",
            icon: "ion-ios7-email",
            title: "email"
          }
        ];
        $scope.footerSignature = "made with <i class=\"ion-ios7-heart-outline\"><span>love</span></i> by";
        $scope.footerAuthors = [
          {
            name: "Cheryl Wu, ",
            link: "http://grungerabbit.com"
          },
          {
            name: "Dana Lee",
            link: "http://danagilliann.me"
          }
        ];

        /* Looks for venue */
        Restangular.one("venues/" + relationships.venue.data.id)
          .get()
          .then(function(venueData) {
            $scope.location = venueData.data.attributes.name;
            $scope.address = venueData.data.attributes.address;
          }); /* Closes the venues Restangular */

      }); /* Closes the event Restangular */

    /* Ignore this for now */
    /* Current program row */
    $scope.programTitle = "April 12th Program";
    $scope.programDesc = [
      "2:00 - 2:45 Refreshments",
      "3:00 - 4:00 Surprise keynote speaker",
      "4:00 - 5:30 Student demos!",
      "See <a href=\"http://hacknyu.org/#schedule\">HackNYU</a> for the hackathon leading up to this event.</p>"
    ]; /* sanitize */

    /* Keynote speakers row */
    $scope.keynoteTitle = "Keynote Speaker";
    $scope.keynoteSpeakers = [
      {
        //img: "../assets/img/hilary-mason.jpg",
        name: "Hilary Mason",
        desc: "<a href=\"https://www.twitter.com/hmason\">Hilary Mason</a>, founder of <a href=\"http://www.fastforwardlabs.com/\">Fast Forward Labs</a> and former Data Scientist at <a href=\"https://accel.com\">Accel</a> and <a href=\"https://bitly.com/\">Bit.ly</a>. Cofounder of <a href=\"http://hackny.org/\">HackNY</a>." // sanitize
      }
    ];

  });

})();
