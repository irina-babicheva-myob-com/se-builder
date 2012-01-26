var builder = {};
builder.loader = {};

builder.loader.loadScripts = function() {
  for (var i = 0; i < arguments.length; i++) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    // Force no caching.
    script.setAttribute('src', "js/" + arguments[i] + "?" + Math.random());
    // Above line may not work due to security reasons, so let's try a different
    // way too.
    document.getElementsByTagName('head')[0].appendChild(script);
  }
};

builder.loader.loadScripts(
  // Load Libraries
  "lib/jquery.js",
  "lib/cssQuery-p.js",
  "lib/browserdetect.js",
  "lib/json2.js",
  "lib/js-xpath.js",
  // Load Selenium IDE Formats & TestCase/Suite
  "selenium-ide/xhtml-entities.js",
  "selenium-ide/preferences.js",
  "selenium-ide/tools.js",
  "selenium-ide/file-utils.js",
  "selenium-ide/testCase.js",
  "selenium-ide/testSuite.js",
  "selenium-ide/format.js",
  // Load SB/Selenium IDE format adapter
  "builder/seleniumadapter.js",
  // Load Selenium
  "selenium/htmlutils.js",
  "selenium/selenium-logging.js",
  "selenium/selenium-browserdetect.js",
  "selenium/selenium-browserbot.js",
  "selenium/selenium-api.js",
  "selenium/selenium-commandhandlers.js",
  // Load Selenium Builder
  "builder/nodegen.js",
  "builder/storage.js",
  "builder/loadlistener.js",
  "builder/seleniumfunction.js",
  "builder/locator.js",
  "builder/recorder.js",
  "builder/assertexplorer.js",
  "builder/interface.js",
  "builder/seleniumpatch.js",
  "builder/methods.js",
  // Load in user-extensions.js
  "user-extensions.js",
  // Deal with the changes it made
  "builder/extensions.js",
  // Load more Builder
  "builder/selenium2/methods.js",
  "builder/selenium2/versionconverter.js",
  "builder/selenium2/io.js",
  "builder/selenium2/script.js",
  "builder/selenium2/stepdisplay.js",
  "builder/selenium2/playback.js",
  "builder/selenium2/recorder.js",
  "builder/selenium2/record.js",
  "builder/selenium2/docs.js",
  "builder/dialogs/dialogs.js",
  "builder/dialogs/method.js",
  "builder/dialogs/locator.js",
  "builder/dialogs/values.js",
  "builder/dialogs/exportscript.js",
  "builder/dialogs/editparam.js",
  "builder/dialogs/rc.js",
  "builder/dialogs/record.js",
  "builder/dialogs/runall.js",
  "builder/step.js",
  "builder/rc.js",
  "builder/local.js",
  "builder/suite.js"
);