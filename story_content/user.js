window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var booty1Value = player.GetVar("Booty1"); // Fetch the Booty1 variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(booty1Value).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Booty1display", formattedValue);

}

window.Script2 = function()
{
  // Wait for the slide to fully load before applying the cursor-follow effect
document.addEventListener("DOMContentLoaded", function() {
    // Target the UV Light image element by its accessibility name
    var flashlight = document.querySelector('[data-acc-text="UV Light"]');
    
    // Set initial position to avoid flicker
    flashlight.style.position = "absolute";
    flashlight.style.pointerEvents = "none"; // Ensure it doesn't interfere with other clicks

    // Move UV Light to follow mouse cursor
    document.addEventListener("mousemove", function(event) {
        flashlight.style.left = (event.pageX - flashlight.offsetWidth / 2) + "px";
        flashlight.style.top = (event.pageY - flashlight.offsetHeight / 2) + "px";
    });
});

}

window.Script3 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script4 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script5 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script6 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script7 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script8 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

window.Script9 = function()
{
  var player = GetPlayer(); // Get the Storyline player
var bootyValue = player.GetVar("Booty"); // Fetch the Booty variable

// Convert the number to a string and add commas using toLocaleString()
var formattedValue = Number(bootyValue).toLocaleString('en-US'); 

// Store the formatted value in Bootydisplay for display purposes
player.SetVar("Bootydisplay", formattedValue);

}

};
