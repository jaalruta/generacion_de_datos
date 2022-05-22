

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
1. members : Nombre con valor valido , demas campos vacios
2. members : Email con valor valido , demas campos vacios
3. members : Label con valor valido, demas campos vacios
4. members : Nota con valor valido, demas campos vacios
5. members : Nombre con valor valido ,correo con valor valido, demas campos vacios
6. members : Nombre con valor valido,Label con valor valido, demas campos vacios
7. members : Nombre con valor valido,nota con valor valido, demas campos vacios
8. members : Email con valor valido,Label con valor valido, demas campos vacios
9. members : Email con valor valido,nota con valor valido, demas campos vacios
10. members : Label con valor valido,Nota con valor valido, demas campos vacios
11. members : Limite inferior nombre
12. members : Limite superior nombre
13. members : Limite inferior email
14. members : Limite superior email
15. members : Limite inferior label
16 .members : Limite superior label
17. members : Limite inferior Nota
18. members : Limite superior Nota
19. members : Email con formato no valido,demas campos llenos
20. members : Nombre con caracteres especiales,demas campos llenos
21. members : Notas con caracteres especiales,demas campos llenos
22. members : Labels con caracteres especiales,demas campos llenos
23. members : Nombre con valor valido, correo con valor valido ,label con valor valido 
24. members : Nombre con valor valido, correo con valor valido ,nota con valor valido 
25. members : Correo con valor valido ,label con valor valido ,nota con valor valido 
26. members : Nombre con valor valido, correo con valor valido ,label con valor valido , nota con valor valido
27. members : Nombre con valor no valido, correo con valor  no valido,label con valor no valido, nota con valor no valido
28. Configuracion-titulo,descripcion : Titulo Vacio  , descripcion llena
29.Configuracion-titulo,descripcion : Titulo Lleno  , descripcion vacia
30. Configuracion-titulo,descripcion : Ambos campos vacios

### Aleatorias
1. post: crear post con título y cuerpo llenos, válido
2. post: crear post con título lleno y cuerpo vacío, no válido
3. post: crear post con título vacio y cuerpo lleno, válido
4. post: crear post programado con título y cuerpo llenos, válido
5. post: crear post programado con título lleno y cuerpo vacío, no válido
6. post: crear post programado con título vacio y cuerpo lleno, válido
7. post: borrar post con título y cuerpo llenos, válido
8. post: borrar post con título lleno y cuerpo vacío, no válido
9. post: borrar post con título vacio y cuerpo lleno, válido
10. post: borrar post programado con título y cuerpo llenos, válido
11. post: borrar post programado con título lleno y cuerpo vacío, no válido
12. post: borrar post programado con título vacio y cuerpo lleno, válido
13. post: editar post con título y cuerpo llenos, válido
14. post: editar post con título lleno y cuerpo vacío, no válido
15. post: editar post con título vacio y cuerpo lleno, válido
16. post: editar post programado con título y cuerpo llenos, válido
17. post: editar post programado con título lleno y cuerpo vacío, no válido
18. post: editar post programado con título vacio y cuerpo lleno, válido
19. staff: Invitar nuevo usuario staff.
20. pagina: crear pagina con título y cuerpo llenos, válido
21. post: crear post con título lleno y cuerpo vacío, no válido
22. post: crear post con título vacio y cuerpo lleno, válido
23. post: crear post programado con título y cuerpo llenos, válido
24. post: crear post programado con título lleno y cuerpo vacío, no válido
25. post: crear post programado con título vacio y cuerpo lleno, válido
26. post: borrar post con título y cuerpo llenos, válido
27. post: borrar post con título lleno y cuerpo vacío, no válido
28. post: borrar post con título vacio y cuerpo lleno, válido
29. post: borrar post programado con título y cuerpo llenos, válido
30. pagina: editar pagina programada con título lleno y cuerpo vacío, no válido





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

