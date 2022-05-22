

## Estudiantes
Nuestro equipo está conformado por 4 integrantes.
|Nombre |Correo|
|--|--|
|Jair Alexander Rueda Tapiero |ja.ruedat1@uniandes.edu.co   |
|Andres Felipe Rodriguez Nuñez|af.rodriguezn@uniandes.edu.co  |
|Juan Esteban Otálvaro Alzate |j.otalvaro@uniandes.edu.co     |
|Ilse Milena Villalba Mantilla|im.villalba1240@uniandes.edu.co|

# Generación de datos
## Estructura del repositorio
En el repositorio se podra encontrar la carpeta cypress , dentro de esta carpeta se encontrara el directorio integration que es donde esta el codigo escrito para las pruebas a-priori, seudo aleatorias y aleatorias



## Sistema Bajo Pruebas

El sistema bajo pruebas usado es [Ghost](https://ghost.org/) en su versión 4.41.3. 

Ghost es un sistema gestor de contenidos para la creación de publicaciones en línea de código libre

## Escenarios generados en las pruebas

A continuación se listan los escenarios generados los cuales usan varias funcionalidades de la aplicación.


### A-priori

1. Login : Todos los campos vacios
2. Login : Nombre lleno , y demas campos vacios
3. Login : Nombre lleno , y contraseña llena (ambos incorrectos)
4. Login : Nombre lleno , y contraseña llena (ambos correctos)
5. Login : contraseña llena y nombre vacio
6. Login : Limite inferior campo nombre
7. Login : Limite superior campo nombre
8. Login : Limite superior campo contraseña
9. Login : Limite inferior campo contraseña


### Seudo aleatorias


### Aleatorias






## Requisitos para la ejecución de las pruebas

- [node](https://nodejs.org/es/blog/release/v16.13.0/) version 16.13.0
- [npm](https://www.npmjs.com/) (se instala junto con node)
- [git](https://git-scm.com/)
- [Google Chrome](https://www.google.com/intl/es-419/chrome/)

- [Ghost](https://ghost.org/) version 4.41.3 y version 3.42 , para la instalacion se debe crear un directorio vacio y correr los siguientes comandos dentro del directorio creado (el siguiente ejemplo es para la version 4.41.3 , se debera realiza lo mismo en directorio diferente para la version 3.42) 

  ```
  npm install ghost-cli@latest -g
  ```
  y luego
  ```
  ghost install 4.41.3 --local
  ```
  con lo anterior Ghost debería estar en ejecución en la máquina local en la url http://localhost:2368/ghost/
 
  Al ingresar por primera vez deberá crear el perfil administrador ***No pierda estos datos ya que son necesarios para las pruebas***
 
- Cypress , una vez instalado node y npm se debe instalar cypress con el siguiente comando
  ```
  npm install -g cypress
  ```

si se quiere parar la ejecucion de una version de ghost se debe usar el comando 

  ```
  ghost stop
  ```

- La url de ghost debera ser http://localhost:2368/ es decir debe estar corriendo en la maquina local y en el puerto 2368

## Ejecución de pruebas

Cuando tengamos listos los requisitos podremos clonar el repositorio usando el comando

```
git clone <URL_REPOSITORIO>
```


### Inicialización de ghost

Asegúrese que Ghost esta en ejecucion ingresando a http://localhost:2368/ghost/ de lo contrario ir a la carpeta de instalación de ghost y ejecutar

```
ghost start
```

### Ejecución de pruebas con Cypress

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /cypress/cypress.json del directorio con la version de ghost que queremos probar, debemos editarlo y agregar el usuario y la contraseña, a continuación se visualiza un ejemplo :

![Captura de pantalla 2022-05-05 a la(s) 11 49 07 p  m](https://user-images.githubusercontent.com/98671337/167069026-5cfb1e10-e713-4f36-af41-96fc9a282024.png)

Para la ejecución de las pruebas con Cypress se debe ejecutar el siguiente comando (en ocasiones es necesario ejecutarlo con privilegios de administrador)

```
cypress open
```

Se abrirá la siguiente interfaz

![Captura de pantalla 2022-05-05 a la(s) 10 55 31 p  m](https://user-images.githubusercontent.com/98671337/167064359-f65996fc-0d57-435c-b379-aa8b2868c936.png)


Debemos seleccionar la carpeta cypress del directorio con la version de ghost que queremos probar obtenidas del repositorio clonado
![Captura de pantalla 2022-05-05 a la(s) 10 57 06 p  m](https://user-images.githubusercontent.com/98671337/167064499-af4e49ab-760b-4bc8-a9fd-35e4c9069dbf.png)

En este punto se nos permitirá ejecutar los test, para los test sobre Ghost debemos buscar la sección ***3-Ghost***

![Captura de pantalla 2022-05-05 a la(s) 10 59 38 p  m](https://user-images.githubusercontent.com/98671337/167064690-1d33a3db-8faf-4334-9dcd-4e6d5035dff6.png)

Luego podremos seleccionar cualquier test del listado , se abrirá un navegador y se ejecutara la prueba

![Captura de pantalla 2022-05-05 a la(s) 11 00 51 p  m](https://user-images.githubusercontent.com/98671337/167064809-25649edc-bdf5-4f3c-b95c-e08eb8ab2f3f.png)

