// Define a function to load the navigation
function loadNavigation() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Specify the path to the navigation HTML file
    xhr.open('GET', 'navigation.html', true);
    // Define a callback function to handle the response
    xhr.onload = function() {
      // Check if the request was successful
      if (xhr.status >= 200 && xhr.status < 300) {
        // Inject the navigation HTML into the placeholder div
        document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
      } else {
        // Log an error message if the request fails
        console.error('Failed to load navigation: ' + xhr.status);
      }
    };
    // Send the request
    xhr.send();
  }
  
  // Call the loadNavigation function when the page loads
  window.addEventListener('load', loadNavigation);