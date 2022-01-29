describe("simple map example", () => {
  beforeEach(() => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");
  });

  describe("using map canvas class", () => {
    // Works fine
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

    // Does not work
    it("has working pan actions", () => {
      cy.window().then((win) => {
        cy.get("canvas.mapboxgl-canvas")
          .trigger("mouseDown", {
            position: "center",
            view: win,
          })
          .trigger("mousemove", 200, 200, {
            force: true,
          })
          .trigger("mouseup", 200, 200, {
            force: true,
            view: win,
          });
        cy.get("#panCheck").contains("yes");
      });
    });
  });
});
