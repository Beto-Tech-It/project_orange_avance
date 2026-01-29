
export class LoginPage {

  visit(): void  {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  get usernameInput() {
    return cy.get("[name=username]");
  }
  get passwordInput() {
    return cy.get("[placeholder=Password]");
  }
  get loginButton() {
    return cy.get("[type=submit]");
  }
ingresarCredenciales(username: string, password: string): void {
    if (username) {
      this.usernameInput.clear().type(username).wait(1000);
    }
    if (password) {
      this.passwordInput.clear().type(password).wait(1000);
    }
  }

  clickLoginButton(): void {
    this.loginButton.click().wait(2000);
  }
  



}






 /* // Selectores
  private selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
  };

  // Acciones
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  ingresarCredenciales(username: string, password: string) {
    if (username) {
      cy.get(this.selectors.usernameInput).clear().type(username);
    }
    if (password) {
      cy.get(this.selectors.passwordInput).clear().type(password);
    }
  }

  clickLoginButton() {
    cy.get(this.selectors.loginButton).click();
  }

  verificarMensaje(mensaje: string) {
    cy.contains(mensaje).should('be.visible');
  }
}

export default new LoginPage();


/*export class LoginPage {
  
  ingresarCredencialesCorrectas(): void {
    cy.fixture("login").then((elements) => {
      cy.get(elements.login_user).type("Admin");
      cy.get(elements.psw_user).type("admin123");
      cy.get(elements.button_click).click().wait(2000);
    });
  }

   ingresarCredencialesIncorrectas(): void {
    cy.fixture("login").then((elements) => {
      cy.get(elements.login_user).type("pepito");
      cy.get(elements.psw_user).type("gatito");
      cy.get(elements.button_click).click();
    });
  }


}*/




