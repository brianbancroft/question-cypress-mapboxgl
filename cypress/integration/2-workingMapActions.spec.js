describe("Working map actions", () => {
  beforeEach(() => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");
  });

  describe("on map click", () => {
    it("displays a popup", () => {
      cy.get("canvas.mapboxgl-canvas").trigger("click", 500, 300);

      cy.findByText(/hello click event/).should("exist");
    });
  });

  describe("On double map click", () => {
    it("displays a different popup", () => {
      cy.get("canvas.mapboxgl-canvas").trigger("dblclick", 500, 300);

      cy.findByText(/hello double click event/).should("exist");
    });
  });

  describe("on mouse move over canvas", () => {
    it("triggers mousemove event in map", () => {
      cy.get("canvas.mapboxgl-canvas").trigger("mousemove", {
        x: 320,
        y: 250,
        force: true,
      });
      cy.wait(100);
      cy.get("canvas.mapboxgl-canvas").trigger("mousemove", {
        x: 320,
        y: 245,
        force: true,
      });
      cy.wait(100);
      cy.get("canvas.mapboxgl-canvas").trigger("mousemove", {
        x: 320,
        y: 240,
        force: true,
      });
      cy.wait(100);
      cy.get("canvas.mapboxgl-canvas").trigger("mousemove", {
        x: 320,
        y: 235,
        force: true,
      });
      cy.wait(100);
      cy.get("canvas.mapboxgl-canvas").trigger("mousemove", {
        x: 320,
        y: 230,
        force: true,
      });

      cy.get("#mouseMoveCheck").contains("yes");
    });
  });
});
