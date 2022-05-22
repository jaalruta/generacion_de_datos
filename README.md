

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
21. pagina: crear pagina con título lleno y cuerpo vacío, no válido
22. pagina: crear pagina con título vacio y cuerpo lleno, válido
23. pagina: crear pagina programado con título y cuerpo llenos, válido
24. pagina: crear pagina programado con título lleno y cuerpo vacío, no válido
25. pagina: crear pagina programado con título vacio y cuerpo lleno, válido
26. pagina: borrar pagina con título y cuerpo llenos, válido
27. pagina: borrar pagina con título lleno y cuerpo vacío, no válido
28. pagina: borrar pagina con título vacio y cuerpo lleno, válido
29. pagina: borrar pagina programado con título y cuerpo llenos, válido
30. pagina: editar pagina programada con título lleno y cuerpo vacío, no válido
31. Configuracion-titulo,descripcion : Titulo Vacio  , descripcion llena
32. Configuracion-titulo,descripcion : Titulo Lleno  , descripcion vacia
33. Configuracion-titulo,descripcion : Ambos campos llenos




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

![Captura de pantalla 2022-05-22 a la(s) 3 39 44 p  m](https://user-images.githubusercontent.com/98671337/169714928-54cd9956-1993-4b95-9478-a8b54915fa6f.png)



En este punto se nos permitirá ejecutar los test, podremos ingresar a cualquier carpeta y ejecutar los test de cada estrategia.

## Descripción de las estrategias usadas 

### A-priori

Para esta estrategia de pruebas se crearon varias archivos .JSON lo cuales se encuenta en la carpeta DataPool de la carpeta a-priori  de integrations , dependiendo del escenario se leen estos datos y se realiza la ejecución de la prueba.

### Seudo Aleatorio

Para esta estrategia usados dos maneras de ejecutar los test 

1. Se lee del API de mockaroo los datos para los diferentes escenarios , luego esto se guardar en un archivo JSON en el directorio de fixture de cypress  y en cada test se van leyendo los datos necesarios para el escenario que se quiere probar .
2. Se lee del API de mockaroo los datos para todos los escenarios , en este punto se garantiza que los datos van a contener al menos uno de los escenario que se quieren probar (campos vacios,campos llenos , limites inferiores y superiores , naughty string etc ) , se lee posicion por posicion y se ejecutan los test con estos datos.

 ### Aleatorio
 
 Para estos escenarios usamos @faker-js , esta libreria nos permite generar datos aleatorios cada vez que ejecutamos la prueba.


