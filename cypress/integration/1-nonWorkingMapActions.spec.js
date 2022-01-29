describe("simple map example", () => {
  beforeEach(() => {
    cy.visit("https://cypress-mapboxgl-click-event.netlify.app/");
  });

  describe("using map canvas class", () => {
    // Works fine

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
