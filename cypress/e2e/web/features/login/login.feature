Feature: Login de usuario

  Scenario Outline: Usuario valida opciones de logueo con diferentes casuisticas
    Given que el usuario se encuentra en la página de login
    When ingresa el username "<username>" y la contraseña "<password>"

    Examples:
      | username   | password   |
      | Admin      | admin123   |
      | incorrecta | incorrecta |
      | Admin      | incorrecta |
      | incorrecta | admin123   |
      |            | admin123   |
      | Admin      |            |
      |            |            |
 # Scenario: Usuario accede a la página de login para iniciar su proceso de autenticación
  #  Given que el usuario se encuentra en la página de login
   # When ingresa sus credenciales correctas
  #Scenario: Usuario falla en el proceso de login con credenciales incorrectas
   # Given que el usuario se encuentra en la página de login
    #When ingresa sus credenciales incorrectas
