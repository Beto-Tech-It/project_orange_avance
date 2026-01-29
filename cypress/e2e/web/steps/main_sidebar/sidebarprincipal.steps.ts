import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

import { SidebarPrincipal } from '../../pages/main_sidebar/sidebarprincipal.page';

 import { LoginPage } from '../../pages/login/login.page';

const sidebarprincipal = new SidebarPrincipal();
const loginPage = new LoginPage();

Given('que el usuario se encuentra en la página de login', () => {
  loginPage.visit();
});


When('ingresa el username {string} y la contraseña {string}', (username: string, password: string) => {
  loginPage.ingresarCredenciales(username, password);
  loginPage.clickLoginButton();
});



When('el usuario da click en la opcion {string} del sidebar', (opcion: string) => {
    sidebarprincipal.getMenuOptionSetup(opcion);
});
