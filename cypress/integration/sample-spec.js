describe("my first test case", () => {
    it("Does not do match", () => {
        expect(true).to.equal(true);
    });
    it("visit site", () => {
        cy.visit("/");
        //cy.contains("swarna").click();
        cy.contains("swarna").rightclick();
        cy.url().should("include", "/");
        cy.pause();
        cy.debug();
        cy.get("#root").find(".App");
        cy.get("#root").find("a.App-link").should("contain", "swarna");
    });
});
