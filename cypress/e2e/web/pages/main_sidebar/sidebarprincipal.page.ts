 export class SidebarPrincipal {
    
    getMenuOptionSetup(option: string): void {
        cy.fixture("sidebarprincipal").then((elements) => {
            cy.get(elements.first_level).should("exist").and("be.visible").contains(option).click();
        });
    }

  }

 




    /*obtenerOpcionesAdmin(): void {
    cy.fixture("sidebarprincipal").then((elements) => {
      cy.get(elements.firts_level).contains("Admin").click();
      /*cy.get(elements.firts_level).invoke("text").then((text) => {
          cy.log(text);
          expect(text).to.include("Time"); //primer text es parametro, el segundo text es una funcion*
        });
      cy.get(elements.second_level)
        .contains("Personal Details")
        .click()
        .wait(2000);
    });
  }
  obtenerOpcionesPIM(): void {
    cy.fixture("sidebarprincipal").then((elements) => {
      cy.get(elements.firts_level).contains("PIM").click();
      /*cy.get(elements.firts_level).invoke("text").then((text) => {
          cy.log(text);
          expect(text).to.include("Time"); //primer text es parametro, el segundo text es una funcion*
        });
      /*cy.get(elements.second_level)
        .contains("Personal Details")
        .click()
        .wait(2000);
    });
  }*/
  
