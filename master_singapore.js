 var page = require('webpage').create();

 page.onConsoleMessage = function(msg) {
     console.log(msg);
 };

page.onError = function(msg, trace) {
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error(msgStack.join('\n'));
};

var finishedCb = null;
page.onLoadFinished = function (status) {
  console.log('LOADED:', page.url, '; STATUS:', status);
  if (status === 'success') {
    if (finishedCb) {
      var realCb = finishedCb;
      finishedCb = null;
      realCb();
    }
  } else {
    phantom.exit(1);
  }
}

page.open("https://www.singaporeair.com/en_UK/ppsclub-krisflyer/flightsearch/");

finishedCb = function () {
   page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
       page.evaluate(function() {
          $(".login").trigger("click");
          $("#membership-1").val("8818722849");
          $("#membership-2").val("123456");
          $("#submit-1").trigger("click");
    
        });   
        finishedCb = function () {
          page.goBack();
          //page.evaluate(function () {
            //$(".menu__item a")[1].click();
          //});
            finishedCb = function () {
              page.evaluate(function () {
              console.log($(".main-heading").text());
              })
              phantom.exit(0);
          }
       };
   });
};
//$("#travel-radio-2").click();
//$("#city1-1").val("San Francisco - SFO");
//$("#city1-2").val("Hong Kong - HKG");
//$("#city1-travel-start-day").val("30/03/2016");
//$("#city1-travel-return-day").val("4/04/2016");
//  $("#city-travel-input-2").click();
// take a break onto another page and do another finishedCb = function()
//



