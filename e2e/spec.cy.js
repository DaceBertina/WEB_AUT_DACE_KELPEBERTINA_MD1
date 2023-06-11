import BasePage from "./pageObjects/Base.page";
import GridPage from "./pageObjects/Grid.page";

describe("DemoQA-selectable", () => {
  beforeEach(() => {
    BasePage.visit();
  });

  it("Grid digits buttons", () => {
    //Click Grid section
    GridPage.gridTable.click();
    //Click Two, Four, Six, Eight sections
    GridPage.row1.contains("Two").click();
    GridPage.row2.contains("Four").click();
    GridPage.row2.contains("Six").click();
    GridPage.row3.contains("Eight").click();
    //Validate that Two, Four, Six, Eight are highlighted
    GridPage.row1
      .contains("Two")
      .should("have.class", "list-group-item active list-group-item-action");
    GridPage.row2
      .contains("Four")
      .should("have.class", "list-group-item active list-group-item-action");
    GridPage.row2
      .contains("Six")
      .should("have.class", "list-group-item active list-group-item-action");
    GridPage.row3
      .contains("Eight")
      .should("have.class", "list-group-item active list-group-item-action");
    //Validate that One, Three, Five, Seven, Nine are not highlighted
    GridPage.row1
      .contains("One")
      .should("have.class", "list-group-item list-group-item-action");
    GridPage.row1
      .contains("Three")
      .should("have.class", "list-group-item list-group-item-action");
    GridPage.row2
      .contains("Five")
      .should("have.class", "list-group-item list-group-item-action");
    GridPage.row3
      .contains("Seven")
      .should("have.class", "list-group-item list-group-item-action");
    GridPage.row3
      .contains("Nine")
      .should("have.class", "list-group-item list-group-item-action");
  });
});
