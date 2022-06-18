const mapCanvas = doucment.querySelector("canvas");
const context = mapCanvas.getContext("webgl");

let event = new MouseEvent("click", {
  clientX: 500,
  clientY: 500,
  bubbles: true,
});

const mouseDown = (x, y) => {
  document.querySelector("canvas").dispatchEvent(
    new MouseEvent("click", {
      clientX: x,
      clientY: y,
      bubbles: true,
      cancelable: true,
    })
  );
};

const mouseMove = (x, y, dx, dy) => {
  document.querySelector("canvas").dispatchEvent(
    new MouseEvent("mousemove", {
      clientX: x + dx,
      clientY: y + dy,
      bubbles: true,
      cancelable: true,
    })
  );
};

const mouseUp = (x, y, dx, dy) => {
  document.querySelector("canvas").dispatchEvent(
    new MouseEvent("mouseup", {
      clientX: x + dx,
      clientY: y + dy,
      bubbles: true,
      cancelable: true,
    })
  );
};

const dragEvent = new DragEvent("dragstart", {
  clientY: 300,
  clientX: 300,
  bubbles: true,
});

const drag = new DragEvent("drag", {
  clientY: 400,
  clientX: 400,
  bubbles: true,
});

const dragEnd = new DragEvent("dragend", {
  clientY: 400,
  clientX: 400,
  bubbles: true,
});

function drag(x, y, dx, dy) {
  mouseDown(x, y);
  mouseMove(x, y, dx, dy);
  mouseUp(x, y, dx, dy);
}

drag(400, 400, 200, 200);

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
