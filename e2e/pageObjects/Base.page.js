class BasePage {
  static get url() {
    return "/selectable";
  }

  static visit() {
    cy.visit(this.url);
  }
}

export default BasePage;
