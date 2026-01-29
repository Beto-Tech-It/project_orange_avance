Feature: Navegación del menu lateral principal

  Background:

  Scenario Outline: Usuario valida opciones de logueo con diferentes casuisticas
    Given que el usuario se encuentra en la página de login
    When ingresa el username "<username>" y la contraseña "<password>"

    Examples:
      | username | password |
      | Admin    | admin123 |

  Scenario Outline: Verificar navegación de opciones del sidebar
    When el usuario da click en la opcion "<opcion>" del sidebar

    Examples:
      | opcion      |
      | Admin       |
      | PIM         |
      | Leave       |
      | Time        |
      | Recruitment |
      | My Info     |
      | Performance |
      | Dashboard   |
      | Directory   |
      | Maintenance |
      | Claim       |
      | Buzz        |
