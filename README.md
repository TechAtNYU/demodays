# DemoDays.co

## About
Version 2 of the event page for Tech@NYU DemoDays in NYC. Live at [demodays.co](http://demodays.co/)

## Tech
Originally built with Jekyll, but started using AngularJS because it was a more reliable front-end. The site uses the following technologies:
- AngularJS
- Sass
- Gulp
- Bootstrap
- Restangular

# Documentation
## `controllers.js`
- `demodays` becomes a variable for the `angular.module`
- [Restangular](https://github.com/mgonto/restangular)
  - Used twice.
  - Base url is the general api (v3)
  - The default headers is for avoiding security issues
  - The response interceptor is for retrieving the API data
- First use of Restangular
  - Gets the DemoDays events and sorts it such that the most recent event is shown first. This allows easier parsing of data.
  - There are five variables: `attributes`, `relationships`, RSVPForm`, and `demoForm` because they are used extremely often
    - `attributes`: Make it easier to get the DemoDays information
    - `relationships`: Required for the second Restangular request because the site will make requests to different parts of the API
    - `RSVPForm`: Gets the RSVP url since the site uses the RSVP url often
    - `demoForm`: Same idea except for demo urls
  - All of the relevant scope variables are in the first Restangular
- Second use of Restangular
  - Makes a call to venues
  - Nested within the first Restangular because it uses attributes needed from first call
- The ending of both Restangular uses are indicated in the comment
- `/\* Ignore this for now \*/` 
  - Features that have yet to be implemented because the API doesn't support it yet
- Code Aesthetics
  - Indicate which Strings need to be sanitized
  - If you have a long block, indicate where it closes
- File notes
  - `controllers.js` have all the calls to the API
  - `index.js` has the jQuery and other Javascript
