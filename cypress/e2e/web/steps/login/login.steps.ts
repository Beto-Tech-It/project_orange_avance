
import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from '../../pages/login/login.page';


const loginPage = new LoginPage();


Given('que el usuario se encuentra en la página de login', () => {
  loginPage.visit();
});


When('ingresa el username {string} y la contraseña {string}', (username: string, password: string) => {
  loginPage.ingresarCredenciales(username, password);
  loginPage.clickLoginButton();
});







/*import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/login/login.page';

const loginPage = new LoginPage();

Given('que el usuario se encuentra en la página de login', () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When('ingresa el username {string} y la contraseña {string}',
  (username: string, password: string) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }
);
Then('el sistema muestra el mensaje {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});

When('ingresa sus credenciales correctas', () => {
  loginPage.ingresarCredencialesCorrectas();

});

When('ingresa sus credenciales incorrectas', () => {
  loginPage.ingresarCredencialesIncorrectas();

});*/