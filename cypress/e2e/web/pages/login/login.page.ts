export class LoginPage {
  
  ingresarCredenciales(): void {
    cy.fixture("login").then((elements) => {
      cy.get(elements.login_user).type("Admin");
      cy.get(elements.psw_user).type("admin123");
      cy.get(elements.button_click).click();
    });
  }

}


