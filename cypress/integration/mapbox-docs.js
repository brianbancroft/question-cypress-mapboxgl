// Demo of how hover actions do not appear to work

describe("cursor", () => {
  it("can hover on a canvas", () => {
    cy.visit("https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/");
    cy.wait(2000);
    cy.get("#demo").trigger("mousemove", { x: 320, y: 250, force: true });
    cy.wait(1000);
    cy.get("#demo").trigger("mousemove", { x: 320, y: 245, force: true });
    cy.wait(1000);
    cy.get("#demo").trigger("mousemove", { x: 320, y: 240, force: true });
    cy.wait(1000);
    cy.get("#demo").trigger("mousemove", { x: 320, y: 235, force: true });
    cy.wait(1000);
    cy.get("#demo").trigger("mousemove", { x: 320, y: 230, force: true });
  });
});
