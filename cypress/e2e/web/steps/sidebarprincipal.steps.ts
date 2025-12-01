import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

import { SidebarPrincipal } from '../pages/sidebarprincipal.page';

const sidebarprincipal = new SidebarPrincipal();

Given('el usuario da click en cada opcion de sidebar del dashboard', () => {
 sidebarprincipal.obtenerOpcionesAdmin(); 
 sidebarprincipal.obtenerOpcionesPIM(); 
 
});
