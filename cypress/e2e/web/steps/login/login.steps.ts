import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/login/login.page';

const loginPage = new LoginPage();

Given('el usuario navega a la página de login', () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When('ingresa sus credenciales', () => {
  loginPage.ingresarCredenciales();
});