# Práctica 12. Modelo Vista Controlador. Programación gráfica, orientada a objetos y dirigida por eventos en TypeScript. Calculadora de áreas usando la regla del trapecio.
### Esta práctica junto con la siguiente constituyen el examen final de la asignatura

### Objetivos
Los objetivos de esta tarea son poner en práctica:
* La arquitectura Modelo Vista Controlador
* Conceptos de Programación orientada a eventos en TypeScript.
* Conceptos de Programación Gráfica en TypeScript usando la API Canvas.
* Metodologías y conceptos de Programación Orientada a Objetos en TypeScript.
* Principios y Buenas prácticas de programación Orientada a Objetos.
* El uso de elementos HTML básicos.
* El uso de algunas propiedades básicas de CSS para dotar de estilo a una página web simple.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El comportamiento del programa debe ajustarse a lo descrito en este documento
* Capacidad de la programadora de introducir cambios en el programa desarrollado
* Se acredita conocimiento y puesta en práctica de principios y buenas prácticas de programación orientada a objetos
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Ser capaz de desarrollar programas simples en TypeScript en el entorno Linux de la VM de la asignatura usando
  `ts-node`
* Ser capaz de generar documentación para sus programas TS utilizando
  [TypeDoc](https://typedoc.org/)
  y de visualizar dicha documentación en un servidor web
* Acreditar que conoce las etiquetas de 
  [JSDoc](https://jsdoc.app/)
* El alumnado debe ser capaz de resolver problemas tanto en JS como en TS en la plataforma Exercism subiendo sus soluciones a la misma
* Ser capaz de desarrollar tests unitarios para sus programas utilizando
  [Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
  [ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code
* El alumnado ha de acreditar que es capaz de desarrollar programas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de las Guías de Estilo de Google para 
[TypeScript](https://google.github.io/styleguide/tsguide.html)
y/o
[JavaScript](https://google.github.io/styleguide/jsguide.html)
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio Code

### Indicaciones de caracter general
* La aplicación que desarrolle ha de ser orientada a objetos.
Ponga en práctica en su desarrollo los fundamentos, principios y buenas prácticas de la OOP así como los
conocimientos que haya adquirido en el uso de patrones de diseño.

* Configure adecuadamente ficheros `package.json` y `tsconfig.json` en el directorio raíz de su proyecto que
permitan gestionar las dependencias del mismo.

* Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos públicos.

* Utilice un fichero distinto para el código de cada una de las clases que intervienen en su programa.

* Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

* Todo el código estará ubicado en el directorio `src` del proyecto. Use subdirectorios de éste si le resulta conveniente.

* Antes de comenzar a desarrollar su programa dedique el tiempo necesario a diseñar la estructura de clases que
utilizará en su programa, así como las relaciones existentes entre las mismas.
Desarrolle un diagrama UML para esas clases, que ha de añadir a la página índice de esta práctica.
Asegúrese de la corrección de su diagrama.
Una aplicación para la realización de diagramas UML como
[Mermaid](https://mermaid.live/edit#pako:eNptkU1PwzAMhv9KlBOI9Q9UuyC2SRx22m2KhNzEdFbzAfnQBKP_nbSlYXT4ZD-OX72xL1w6hbzmUkMIG4LWgxGW5Xi0ZECz9VdVsU2S3S3dUTjd0iM2Hv7gmj2QjQxaXOJD9GRb1qJV6K-bw0jYg8np3f2iYSDiDEfbo73LBFgRbRC6J6edL41wJjMP5vI9gezmur_WGz5W9KrBe6BPfLY7xFiwBLuF-O_8uIJfQ41zmlF4OZNWBfpkF7Nz8BU36A2QyncZVQSPJzQoeJ1Tha-QdBRc2D4_TW8q72OrKDrP6-gTrjik6A4fVs719ObnuhPsvwES3pny)
puede resultarle útil para esta finalidad, aunque puede usar cualquier otro programa que conozca, 
o simplemente papel y bolígrafo.

* Realice, como siempre, un diseño incremental del programa comprobando cada una de las funcionalidades que añade, siguiendo un
desarrollo TDD.

* Cuando finalice su desarrollo **modifique el fichero `README.md`** de su proyecto incluyendo la información
habitual en cualquier proyecto público en GitHub.
Puede usar este
[README.md](https://github.com/taniarascia/mvc?tab=readme-ov-file)
como referencia pero incluya además de la información que allí se indica, dos apartados,
`### Building and Running the code` y `Live Demo`.
En el primero de ellos ha de explicar en detalle cómo a partir de clonar su repo público ha de compilarse y
ejecutarse su aplicación, mientras que en el segundo ha de incluir un enlace (véase el apartado *Presentación
de resultados* de este documento) a la URL pública donde encontrar su aplicación.

### El patrón Modelo Vista Controlador
El 
[modelo-vista-controlador](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
(MVC) es un patrón de diseño arquitectónico habitualmente utilizado para el desarrollo de interfaces de usuario 
que divide la lógica de la aplicación en tres elementos relacionados. 
Esta división se realiza para separar la representación interna de la información (modelo) 
de las formas en que se presenta (vista) y se acepta la información del usuario (contolador).
Este patrón se ha utilizado tradicionalmente para interfaces gráficas de usuario (GUIs) de escritorio, 
y se ha popularizado asimismo para el diseño de aplicaciones web.

Es fácil encontrar en la web información sobre el patrón MVC, así como ejemplos de implementación del
mismo en diferentes lenguajes.
Los siguientes son elementos que puede utilizar para iniciarse en el estudio del patrón MVC:
* [Estas transparencias](https://campusingenieriaytecnologia2324.ull.es/pluginfile.php/7746/mod_resource/content/2/FAlmeida-Transparencias-MVC2020.pdf)
del profesor F. Almeida pueden ser un buen punto de toma de contacto con MVC.
* En [esta otra página](https://www.roseindia.net/tutorial/java/jdbc/javamvcdesignpattern.html)
puede hallar otra explicación detallada del modelo con una imagen que muestra el papel y las relaciones entre
los componentes del mismo.
* El directorio `MVC-ejemplo-java` de este proyecto contiene una aplicación java para un conversor de monedas
que sigue el patrón MVC.
* Por último, en el artículo
[Build a Simple MVC App From Scratch in JavaScript](https://www.taniarascia.com/javascript-mvc-todo-app/)
se explica con detalle la implementación de una aplicación (lista de tareas) siguiendo el patrón MVC.
En el repositorio del trabajo expuesto en clase sobre MVC
[Trabajo MVC](https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-mvc-pablo-medina-moreno/tree/master/src/todo)
puede encontrar el código adaptado a TypeScript de la aplicación.

### Cálculo de áreas usando la regla del trapecio 
En esta práctica se propone desarrollar una aplicación TypeScript basada en el patrón MVC.
La aplicación permitirá el cálculo aproximado del área bajo una curva utilizando la regla del trapecio y
dispondrá de una interfaz gráfica que permitirá visualizar la aplicación de la regla así como modificar
algunos parámetros del cálculo.

La 
[regla del trapecio](https://en.wikipedia.org/wiki/Trapezoidal_rule)
es un método de integración numérica, es decir, un método para calcular aproximadamente el valor de una integral definida. 
La regla se basa en aproximar el valor de la integral por la suma de las áreas de una serie de trapecios,
siendo muy fácil calcular el área de un trapecio.
Cuanto mayor es el número de trapecios, mejor será la aproximación que se consiga para el área.

[Esta aplicación](https://academo.org/demos/trapezoidal-rule-calculator/)
se tomará como referencia para la que se propone desarrollar y en ella dispone de una explicación más
detallada de la regla del trapecio.

Diseñe su aplicación web como una SPA
([Single-page application](https://en.wikipedia.org/wiki/Single-page_application))
de modo que toda la simulación se muestre en el viewport del navegador sin necesidad de usar las barras de scroll.

En su aplicación (y a diferencia de la de referencia), al pulsar el botón 'Update' el valor aproximado del área de la
curva se imprimirá (*Sum of all Trapezium areas:*) dentro del canvas en el que se visualiza la curva.

En su aplicación necesitará evaluar una función que es introducida como texto por el usuario (Campo *Expression*).
Para ello puede resultarle útil usar una librería como 
[mathjs](https://mathjs.org/)
que entre otras funcionalidades incluye un analizador sintáctico de expresiones.

Alternativamente puede también limitar las funciones que se permiten a algunas que el usuario seleccione en la
interfaz gráfica.

### Presentación de resultados
La visualización de la ejecución del programa se realizará a través de una página web alojada
en la máquina IaaS-ULL de la asignatura y cuya URL tendrá la forma:

[1] `http://10.6.129.123:8080/einstein-albert-trapezoidal-rule.html`

en la que se incustará un lienzo (canvas) para dibujar las manos de la partida de poker.
Sustituya *Albert Einstein* por su nombre y apellido en la URL de su página
y la dirección IP anterior por la correspondiente a su máquina IaaS.
Coloque en esa página una cabecera con su nombre y apellido.

Utilice código HTML y CSS para lograr una página funcional y visualmente correcta.

Diseñe asimismo otra página HTML simple 

[2] `http://10.6.129.123:8080/index.html`

que sirva de "página índice" para los ejercicios de la sesión de evaluación de la práctica.
La página [1] será uno de los enlaces de [2] y a su vez [1] tendrá un enlace "Home" que apunte a [2].
Enlace también en la página índice [2] la página que contiene la documentación de su proyecto generada con
Typedoc.

Incluya una tercera página

[3] `http://10.6.129.123:8080/uml.html`

que muestre el diagrama UML de las clases que intervienen en su aplicación.

Utilice lo que haya aprendido de CSS para dotar de estilo propio a las páginas HTML que
desarrolle, aunque el CSS es el aspecto de menor importancia en este ejercicio.

**Es importante** para la evaluación de su práctica que, una vez finalizada la sesión de evaluación la página
índice ([2]) de su proyecto esté disponible para ser consultada a través de una URL pública.
Si esa página no está disponible, la práctica no se podrá evaluar.
Esta referencia
[Runing Node JS Server In Background](https://iulianpopa.ro/nodejs/2021/06/04/running-node-js-server-in-background/)
puede serle útil para hacer que su servidor se ejecute en background y la página esté disponible después de
que Ud. haya cerrado la sesión linux en la máquina IaaS.

## Referencias
* [Modelo-vista-controlador](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [Build a Simple MVC App From Scratch in JavaScript](https://www.taniarascia.com/javascript-mvc-todo-app/)
* [Trabajo MVC](https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-mvc-pablo-medina-moreno/tree/master/src/todo-example)
* [mathjs](https://mathjs.org/)
* [Runing Node JS Server In Background](https://iulianpopa.ro/nodejs/2021/06/04/running-node-js-server-in-background/)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2023-2024/PAI-class-code-examples)
* [The Modern Javascript Tutorial](https://javascript.info)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [ESLint](https://eslint.org/)
* [TypeDoc](https://typedoc.org/)
* [JSDoc](https://jsdoc.app/)
