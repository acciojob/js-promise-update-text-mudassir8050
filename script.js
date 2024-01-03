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

it('should update output text after delay', () => {
  cy.visit(baseUrl + "/main.html");

  // Wait for the element to be visible
  cy.get("div#output").should('be.visible');

  // Verify initial text is an empty string
  cy.get("div#output").should('have.text', '');

  // Wait for 1 second
  cy.wait(1000);

  // Verify updated text is 'Hello, world!'
  cy.get("div#output").should('have.text', 'Hello, world!');
});

