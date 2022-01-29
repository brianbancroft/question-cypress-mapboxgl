describe("simple map example", () => {
  beforeEach(() => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");
  });

  describe("using map canvas class", () => {
    it("detects mouse action", () => {
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

    it("has working pan actions", () => {
      cy.get("canvas.mapboxgl-canvas").trigger("mouseDown", {
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
      cy.get("canvas.mapboxgl-canvas").trigger("mouseup", {
        x: 320,
        y: 240,
        force: true,
      });
      cy.get("#panCheck").contains("yes");
    });
  });
});
