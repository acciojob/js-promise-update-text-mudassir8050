//your JS code here. If required.
function delayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Update the text of an HTML element with ID "output"
function updateOutputText() {
  const outputElement = document.getElementById('output');

  delayHello().then((result) => {
    outputElement.textContent = result;
  });
}
