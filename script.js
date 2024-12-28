document.getElementById('fetchButton').addEventListener('click', function() {
  const urlInput = document.getElementById('urlInput').value.trim();
  const responseDiv = document.getElementById('response');

  let responseMessage;

  switch (urlInput) {
      case '/':
          responseMessage = 'Hello World';
          break;
      case '/pizza':
          responseMessage = 'This is your pizza';
          break;
      case '/home':
          responseMessage = 'Welcome home';
          break;
      case '/about':
          responseMessage = 'Welcome to About Us';
          break;
      case '/node':
          responseMessage = 'Welcome to my Node Js project';
          break;
      default:
          responseMessage = 'Page Not Found';
  }

  // Display the response message on the webpage
  responseDiv.textContent = responseMessage;
});
