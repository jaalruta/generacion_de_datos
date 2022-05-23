

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

1. Login : Todos los campos con numeros
2. Login : Nombre diligenciado y contraseña diligenciada (ambos incorrectos)
3. Login : Nombre diligenciado y contraseña vacia
4. Login : Nombre vacio y contraseña diligenciada
5. Login : Todos los campos vacios
6. Login : Todos los campos con un solo caracter
7. Login : Todos los campos con un solo numero
8. Login : Todos los campos con dos numeros
9. Login : Todos los campos con dos caracteres
10. Login : Todos los campos con un numero y un caracter



### Seudo aleatorias
<i>Los siguientes 27 escenarios estan en el archivo "members.spec.js" y se generan a partir del API de mockaroo:</i>
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
16. members : Limite superior label
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
27. members : Nombre con valor no valido, correo con valor  no valido,label con valor no valido, nota con valor no valido <br>
<i>Los siguientes 13 escenarios de Login estan en el archivo "1_TestPseudoLoginCon13Escenarios.spec.js":</i>
28. Login: Intento de login inválido, con usuario y contraseña aleatoria - datetime
29. Login: Intento de login inválido, con usuario y contraseña aleatoria - base64
30. Login: Intento de login inválido, con usuario email aleatorio y contraseña pass aleatoria
31. Login: Intento de login inválido, con usuario y contraseña aleatoria - naughty_string
32. Login: Intento de login inválido, con usuario y contraseña aleatoria - URL
33. Login: Intento de login inválido, con usuario y contraseña aleatoria - chine
34. Login: Intento de login inválido, con usuario y contraseña aleatoria - hex color
35. Login: Intento de login inválido, con usuario y contraseña aleatoria - encrypt
36. Login: Intento de login inválido, con usuario y contraseña aleatoria - guid 
37. Login: Intento de login inválido, con usuario y contraseña aleatoria - binomial 
38. Login: Intento de login inválido, con usuario y contraseña aleatoria - parrafos
39. Login: Intento de login inválido, con usuario y contraseña aleatoria - time 
40. Login: Intento de login inválido, con usuario y contraseña aleatoria - isbn



### Aleatorias
1. post: crear post con título y cuerpo llenos, válido
2. post: crear post con título lleno y cuerpo vacío, no válido
3. post: crear post con título vacio y cuerpo lleno, válido
4. post: crear post con campos numéricos, válido
5. post: crear post con caracteres especiales, válido
6. post: crear post programado con título y cuerpo llenos, válido
7. post: crear post programado con título lleno y cuerpo vacío, no válido
8. post: crear post programado con título vacio y cuerpo lleno, válido
9. post: crear post programado con campos numéricos, válido
10. post: crear post programado con caracteres especiales, válido
11. post: borrar post con título y cuerpo llenos, válido
12. post: borrar post con título lleno y cuerpo vacío, no válido
13. post: borrar post con título vacio y cuerpo lleno, válido
14. post: borrar post programado con título y cuerpo llenos, válido
15. post: borrar post programado con título lleno y cuerpo vacío, no válido
16. post: borrar post programado con título vacio y cuerpo lleno, válido
17. post: editar post con título y cuerpo llenos, válido
18. post: editar post con título lleno y cuerpo vacío, no válido
19. post: editar post con título vacio y cuerpo lleno, válido
20. post: editar post con caracteres numéricos, válido
21. post: editar post con caracteres especiales, válido
22. post: editar post programado con título y cuerpo llenos, válido
23. post: editar post programado con título lleno y cuerpo vacío, no válido
24. post: editar post programado con título vacio y cuerpo lleno, válido
25. post: editar post programado con caracteres numéricos, válido
26. post: editar post programado con caracteres especiales, válido
27. staff: Invitar staff con email aleatorio, valido
28. pagina: crear pagina con título y cuerpo llenos, válido
29. pagina: crear pagina con título lleno y cuerpo vacío, no válido
30. pagina: crear pagina con título vacio y cuerpo lleno, válido
31. pagina: crear pagina programado con título y cuerpo llenos, válido
32. pagina: crear pagina programado con título lleno y cuerpo vacío, no válido
33. pagina: crear pagina programado con título vacio y cuerpo lleno, válido
34. pagina: borrar pagina con título y cuerpo llenos, válido
35. pagina: borrar pagina con título lleno y cuerpo vacío, no válido
36. pagina: borrar pagina con título vacio y cuerpo lleno, válido
37. pagina: borrar pagina programado con título y cuerpo llenos, válido
38. pagina: editar pagina con título lleno y cuerpo, válido
39. Configuracion-titulo,descripcion : Titulo Vacio  , descripcion llena
40. Configuracion-titulo,descripcion : Titulo Lleno  , descripcion vacia
41. Configuracion-titulo,descripcion : Ambos campos llenos
42. configuración-cambiar nomber: campo numérico, válido. 
43.  configuración-cambiar nomber: caracteres especiales, válido.
44. configuración-cambiar nomber: campo lleno, válido.<br> 
<i>Los siguientes 7 escenarios de Login estan en el archivo "1_TestFakerLoginCon7Escenarios.js":</i>
45. Login: Visita el formulario de login y lo llena con datos inválidos
46. Login: Visita el formulario de login y lo llena con datos del formato esperado pero que no corresponden a un usuarios real
47. Login: Clic en el botón de autenticar con un formulario vacío
48. Login: Visita el formulario de login y lo llena con datos pero que no corresponden a un usuarios real
49. Login: Visita el formulario de login y llena solo un campo
50. Login: Visita el formulario de login y lo llena con imágenes
51. Login: Visita el formulario de login y lo llena caracteres largos
52. Pagina: Borrar pagina programada con titulo y sin descripción, no válido
53. Pagina: Borrar pagina programada sin titulo y con descripción, válido
54. Pagina: Editar pagina con titulo y sin descripción, no válido
55. Pagina: Editar pagina sin titulo y con descripción, válido
56. Pagina: Editar pagina programada con titulo y con descripción, válido
57. Pagina: Editar pagina programada con titulo y sin descripción, no válido
58. Pagina: Editar pagina programada sin titulo y con descripción, válido
59. Pagina: Crear pagina con datos numericos, válido
60. Pagina: Crear pagina con caracteres especiales, válido
61. Pagina: Editar pagina con datos numericos, válido
62. Pagina: Editar pagina con caracteres especiales, válido
63. Staff: Editar ubicacion en staff , valido
64. Staff: Invitar staff con caracteres especiales en el email, valido
65. Staff: Invitar staff con caracteres numericos en el email, valido
66. Pagina: Crear pagina con emoji en la descripcion, válido
67. Pagina: Crear pagina programada con un avatar en la descripcion, válido
68. Staff: Editar staff con palabras aleatorias en la bio, valido
69. Staff: Editar url del staff, valido
70. Configuración : Cambiar nombre administador vacio 
71. Configuración : Cambiar nombre administador aleatorio



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

luego de esto debemos ingresar a la carpeta generada y ejecutar el comando 

```
npm install
```

con esto garantizamos la instalacion correcta de las dependencias.


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

Para esta estrategia usamos el API que no provee mockaroo y generamos dos maneras de ejecutar los diferentes escenarios

1. Se lee del API de mockaroo los datos para los diferentes escenarios , luego esto se guardar en un archivo JSON en el directorio de fixture de cypress  y en cada test se van leyendo los datos necesarios para el escenario que se quiere probar .

Esta es la API que se uso en este escenario 

[https://my.api.mockaroo.com/users.json?key=d0994460](https://my.api.mockaroo.com/users.json?key=d0994460)


3. Se lee del API de mockaroo los datos para todos los escenarios , en este punto se garantiza que los datos van a contener al menos uno de los escenario que se quieren probar (campos vacios,campos llenos , limites inferiores y superiores , naughty string etc ) , se lee posicion por posicion y se ejecutan los test con estos datos.

Esta es la API que se uso en este escenario 

[https://my.api.mockaroo.com/users.json?key=d0994460](https://my.api.mockaroo.com/datos1.json?key=0bed1ab0)

para garantizar que se cubren todos los escenarios propuestos se realizo la siguiente configuracion en mockaroo

1. Todos los campos en algun momento van a generar datos vacios
2. Todos los campos tiene un 10% de probabildad de generar un naugthy string , para esto se uso la formula
  ```
  naughty(nombre_campo, 10)
  ```
  
  por ejemplo : 
  
  ![Captura de pantalla 2022-05-22 a la(s) 3 58 33 p  m](https://user-images.githubusercontent.com/98671337/169715527-407a6d97-00e5-48ef-bd87-c5ca056c06ef.png)

3. Los campos para pruebas de limite superior tiene entren un 5 a 10 porciento de generar datos , cuando generan datos se usa la formula 
  ```
  nombre_campo = "0" * cantidad_caracteres
  ```
  
  por ejemplo: 
  
  ![Captura de pantalla 2022-05-22 a la(s) 3 59 15 p  m](https://user-images.githubusercontent.com/98671337/169715563-656a445d-dce0-4a17-b5c6-9ca966b61aac.png)


La siguiente es la URL publica de la configuración de mockaroo 

[https://www.mockaroo.com/82c7be70](https://www.mockaroo.com/82c7be70)

 ### Aleatorio
 
 Para estos escenarios usamos @faker-js , esta libreria nos permite generar datos aleatorios cada vez que ejecutamos la prueba.


