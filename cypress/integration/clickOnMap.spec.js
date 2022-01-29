describe("on map click", () => {
  it("displays a popup", () => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");

    cy.get("canvas.mapboxgl-canvas").trigger("click", 500, 300);

    cy.findByText(/hello click event/).should("exist");
  });
});

describe("On double map click", () => {
  it("displays a different popup", () => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");

    cy.get("canvas.mapboxgl-canvas").trigger("dblclick", 500, 300);

    cy.findByText(/hello double click event/).should("exist");
  });
});
