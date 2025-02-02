<div align="justify">

# Who-s-that-pokemon

Repositorio dedicado a la actividad de VUE del módulo DAD acerca de la adivinacion de un pokemon a través de su silueta

<div align="center">
<img src="./capturas/portada.jpg" />
</div>

## Índice

- [Reto 1](#reto1)
    - [Creacion del proyecto en VueJS:](#creacion-del-proyecto-en-vuejs)
    - [limpieza del proyecto](#Limpieza-de-la-estructura-de-la-aplicacion)
    - [Tailwind en el proyecto](#Tailwind)
- [Reto 2](#reto2)
    - [Creacion de la estructura de carpetas](#creacion-de-la-estructura-de-carpetas)
- [Reto 3](#reto3)
    - [PokemonPicture.vue](#pokemonpicturevue)
    - [PokemonOptions.vue](#pokemonoptionsvue)
- [Reto 4](#reto4)
    - [Conexion a la api](#conexion-a-la-api)
    - [Tipando la petición a la api](#tipando-la-petición-a-la-api)
        - [instalacion de axios](#instalacion-de-axios)
- [Reto 5](#reto5)
    - [Modificando método getPokemons()](#modificando-método-getPokemons)
- [Reto 6](#reto6)





# Retos


## Reto1 - Iniciando Proyecto Pokemon Game

### Creacion del proyecto en VueJS:

Utilizamos el siguiente comando para la creacion del proyecto

```bash
npm create vue@latest
```

A continuación, VueJS nos preguntara que configuracion queremos en nuestro proyecto siendo esta la siguiente:

<img src="./capturas/cap1.png" />

Respondemos a las siguientes preguntas

> ¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?
>
> Vue Router: Es una herramienta para manejar el enrutamiento en las aplicaciones Vue.
>
>    Pinia: Es una biblioteca de tiendas para Vue, le permite compartir un estado entre componentes/páginas.
>
>   Vitest: Se puede escribir y ejecutar pruebas de manera eficiente en proyectos Vue.
>
>   ESLint: Es un proyecto de código abierto que lo ayuda a encontrar y solucionar problemas con su código JavaScript.
>
>    Prettier: Es una herramienta para formatear el codigo dandole un estilo consistente.


Para continuar, ejecutamos los compandos y comprobamos que nuesta aplicacion VueJS funciona correctamente.

accedemos a la carpeta del proyecto

```bash
cd pokemon-game
```
hacemos las instalaciones necesarias

```bash
npm install
```
<img src="./capturas/cap2.png" />

```bash
npm run format
```

<img src="./capturas/cap3.png" />



y por ultimo inicializamos el proyecto

```bash
npm run dev
```

<img src="./capturas/cap4.png" />

y accedemos a la direccion local que en este caso es: __http://localhost:5173/

y vemos que  funciona correctamente

<img src="./capturas/cap5.png" />


Nuestro Pokemon Game lo vamos a realizar siguiendo Composition API y además, nuestra estructura de archivos va a estar basada en screaming architecture.

> ¿Qué es Composition API y en qué se diferencia de Option API en VueJS?
>Composition API es un conjunto que nos permite crear componentes de Vue utilizando funciones importadas en lugar de como en Option Api utiliza Objetos.

>  ¿Qué es screaming architecture y qué ventajas tiene?
>Se enfoca en organizar el código alrededor de los objetos de negocio, en lugar de una estructura convencional de carpetas lo que facilita la comprensión, el mantenimiento y la escabilidad del código.



Ahora, vamos a modificar y borrar todo lo que no necesitamos que nos ha creado de forma automática VueJS: 

<img src="./capturas/cap6.png" />


El contenido de App.vue y deja la estructura básica de VueJS teniendo en cuenta que usaremos Composition API. Recuerda que vamos a utilizar TS en lugar de JS, 
> ¿Cómo se lo indicamos a Vue?
>
> Como se ve en la imagen anterior en el scrip le indicamos que utilizamos ts


Añade un mensaje de Hola mundo en App.vue

Se veria el codigo de la siguiente manera:

<img src="./capturas/cap7.png" />

Siendo como resultado la siguiente vista:

<img src="./capturas/cap8.png" />


## Limpieza de la estructura de la aplicacion

En la carpeta de assets, borra los archivos base.css y logo.svg
Cambia el nombre de main.css de la carpeta assets a styles.css y modifica la ruta en el archivo main.ts para que funcione correctamente nuestra hoja de estilo.

<img src="./capturas/cap9.png" />

Ejecuta el comando npm run dev y muestra el resultado.

<img src="./capturas/cap10.png" />

## Tailwind

Para realizar nuestra aplicación en lugar del framework de CSS Bootstrap, vamos a usar Tailwind CSS,
> ¿lo conoces?
>
>    Tailwind CSS es un framework de CSS de código abierto para el diseño de páguinas web.

Configuramos el proyecto para poder installar Tailwind
    primero usamos el siguiente comando para la instalacion de dependendias y la generacion de los archivos tailwind.config.js and postcss.config.js

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Añadimos los Paths de los ficheros en tailwind.config.js

<img src="./capturas/cap11.png" />

Añadimos tailwind al CSS

<img src="./capturas/cap12.png" />

Probamos añadiendole una clase al h1 del hola mundo que pusimos anteriormente

<img src="./capturas/cap13.png" />

Verificamos el funcionamiento utilizando npm run dev

<img src="./capturas/cap14.png" />

Y aqui finaliza el primer reto


## Reto2 - Estructura de la aplicación


### Creacion de la estructura de carpetas 

Como no cumplimos con la filosofia de screamin architecture vamos a comenzar modificando la estructura del proyecto.

primero eliminamos la carpeta components y creamos una nueva carpeta dentro de src llamada modules y dentro de esta una llamada pokemon 

<img src="./capturas/cap15.png" />

Dentro de la carpeta pokemon creamos las carpetas composables

> ¿Qué es un composable en VueJS y cual es la nomenclatura común que se utiliza en los ficheros que contiene?
>
>    Un composable en Vue.js es una función que encapsula lógica reutilizable para que puedas usarla en varios componentes. Sirve para organizar mejor el código y evitar repetir la misma lógica en diferentes partes de tu aplicación.




Creamos las carpetas components y views.


<img src="./capturas/cap16.png" />


Dentro de la carpeta de view creamos un archivo PokemonGame.vue

> ¿Cuál crees que será la lógica que irá dentro de este archivo?
>
>Estaremos utilizando Composition API

> ¿Conoces algún atajo para generar esta estructura de forma automática? ¿Con qué extensión y cuál?
>
>Con la extension de VSCode de vue-Official, puedes utilizar el snippet vcc para definir que es un componente de composition con el siguiente contenido __vbase-3-ts-setu__


### Separacion de la estructuras en secciones

Utilizando la etiqueta __<section>__ podemos separar nuestra aplicación en secciones donde tendremos:

  - Una sección que tenga un mensaje que indique al usuario que: ``Espere por favoy y Cargando Pokémon`` de tal manera que:

  <img src="./capturas/cap18.PNG" />

  las clases utilizadas son de Tailwind para darle un estilo a nuestra sección siendo:

   - __flex__ : Aplica el layout de flexbox al contenedor haciendo que los hijos se alineen en horizontal o vertical.

   - __flex-col__ : Cambia la dirección del eje principal a vertijal haciendo que los hijos se alineen de arriba a abajo
   
   - __justify-center__ : Centra los hijos en el eje pincipal siendo este caso en vertical por la clase anterior
   
   - __items-center__ : Centra los hijos en el eje secundario
   
   - __w-screen__ : Define que el ancho del contenedor sea igual al ancho de la pantalla
   
   - __h-screen__ : Define que el alto del contenedor sea igual al alto de la pantalla
   
   - __text-3xl__ : Define el tamaño del texto como 3xl siendo este una fuente de 30px
   
   - __animate-pulse__ : Aplica animaciones de pulsación al contenedor


>Saca una captura de como se ve actualmente nuestra aplicación. ¿No ves los cambios? Algo se te olvida... ¿qué es? Indica los archivos que has tenido que modificar.__
>
>   Antes que nada hay que añadir un export del archivo PokemonGame.vue

   <img src="./capturas/cap19.PNG" />

>y en app.vue añadiremos el componente PokemonGame

<img src="./capturas/cap20.PNG" />

</br>

>Viendose finalmente de la siguiente manera:

<img src="./capturas/cap17.png" />


__Utilizando una directiva de VueJS, ¿cómo ocultaríamos esta sección por completo?__

La podemos ocultar de varias maneras, pero en este caso hemos optado por utilizar v-show.

<img src="./capturas/cap21.PNG" />

Creamos una nueva seccion igual a la anterior pero que muestre al usuario el mensaje: ``¿Cuál es este pokémon?``

    Primero creamos las clases __PokemonPicture__ y __PokemonOptions__ dentro de la carpeta components.

<img src="./capturas/cap22.PNG" />


y creamos la seccion de la siguiente manera:

<img src="./capturas/cap23.PNG" />

Y aqui finaliza el segundo reto


## Reto3- Generando el "esqueleto" de la aplicacion

### PokemonPicture.vue
Lo que vamos a hacer en este componente es mostrar una imagen directamente desde PokeApi (Gengar para ser más exactos):

<img src="./capturas/cap25.PNG" />

Quedando como resultado la siguiente vista:

<img src="./capturas/cap24.PNG" />


Ahora nos interesa que el pokemon no se vea tan claro y para ello añadimos la clase brightness-0 a la imagen y tambien le añadimos un altura a la imagen de 200px.

Quedando como resultado la siguiente vista:

<img src="./capturas/cap26.PNG" />

### PokemonOptions.vue

En cuanto al componente PokemonOptions crearemos una lista con 4 botones en cada elemento iniciales:

<img src="./capturas/cap27.PNG" />

Una vez realizado, añadiremos unos estilos a los botones de la lista quedando una vista de la siguiente manera: 

<img src="./capturas/cap28.PNG" />

por ultimo necesitamos que el fondo de nuestra aplicacion sea el color __#f1f1f1__ colocandolo en el archivo __assets/styles.css__ como:

```css

body{
    background-color: #f1f1f1;
}
```

Y aqui finaliza el tercer reto


## Reto4

### conexion a la api

En este reto vamos a conectarnos a la PokeApi pero antes que nada dentro de la carpeta __src/assets/__ copiarepos y pegaremos el contenido dado en la actividad __animation.css__ siendo esta una animación que usaremos cuando desvelemos el Pokémon.

<img src="./capturas/cap29.PNG" />

Ahora emepzaremos con la lógica de nuestra aplicación:

En primer lugar crearemos un archivo que se llamara __usePokemonGame.ts__ dentro de la carpeta __src/composables__ y dentro de este archivo vamos a comenzar con toda la lógica de nuestra aplicación.	

<img src="./capturas/cap30.PNG" />

Nuestro juego va a tener 3 estados los cuales los almacenaremos en una propiedad reactiva:

- Gana
- Pierde
- Jugando

Ahora crearemos una interfaz dentro de una nueva carpeta llamada __interfaces__ y crearemos el un archivo llamado game-status.enum.ts y aunque técnicamente la enumeracion no cuenta como interfaz vamos a crearlo de esta manera

```ts
export enum GameStatus {
  Playin = 'playin',
  Won = 'won',
  Lost = 'lost'
}
```

### Tipando la petición a la api

Ahora crearemos un nuevo arvhivo que se llamara index.ts que sera nuestro __archivo de barril__ 

> ❓ ¿Qué es un archivo de barril? 
> 
> Un archivo de barril es un archivo que contiene la lógica de nuestra aplicación. Este archivo se encarga de manejar la lógica de nuestra aplicación y de comunicar con otros archivos.

volvamos a nuestro archivo usePokemonGame.ts

<img src="./capturas/cap31.PNG" />

> ¿Qué es lo que estamos haciendo con el código hasta ahora?
>
> Importamos el enum GameStatus para poder utilizarlo en nuestro componente haciendo que el estado este en jugando


Ahora vamos a conectarnos con nuesta PokeApi para poder recuperar una lista de los pokemons que vamos a usar en nuestro juego. para ello vamos a utilzar __Axios__
> ¿Qué es Axios? ¿Lo has usado antes?
>
> Axios es una herramienta que te ayuda a hacer peticiones o solicitudes a un servidor siendo como un mensajero entre aplicacion y servidor
>
>En este curso lo hemos utilizado antes también con la PokeApi y otras api personalizadas en otros módulos.


Dentro de la carpeta __pokemon__ crearemos una nueva llamda __api__ y crearemos un archivo llamado __pokemonApi.ts__

<img src="./capturas/cap32.PNG" />

### Instalacion de axios

Ahora instalamos axios en nuestro proyecto

```bash
npm install axios
```

Dentro del archivo pokemonApi.ts vamos a crear una clase llamada PokemonApi que nos permitira recuperar los pokemons de la PokeApi

<img src="./capturas/cap33.PNG" />

En usePokemonGame.ts lo que tenemos que hacer ahora es obtener esa informacion sobre los 151 pokemons:

<img src="./capturas/cap34.PNG" />


en PokemonGame.vue vamos a añadir un import para el usePokemonGame.ts

<img src="./capturas/cap35.PNG" />

dejando como resultado el siguiente console log:

<img src="./capturas/cap36.PNG" />


Los datos que hemos obtenido no son técnicamente los que nos interesan ya que solo necesitamos el id y el nombre de los Pokemon. Para ello vamos a crear un tipado estricto para que podamos tipar los resultados de las peticiones HTTP que hagamos a la API:

 Abrimos POSTMAN y ejecutamos la siguiente petición:
```bash
 https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0
```

En Visual Studio dentro de la carpeta __interfaces__ creamos un nuevo archivo llamado __pokemon-list.response.ts__

Usando la extension Paste JSON as Code pegamos el contenido de la anterior peticion poniendole como nivel superior __PokemonListResponse__

<img src="./capturas/cap37.PNG" />

Exportamos este nuevo archivo en nuestro archivo de barril

```ts
export * from './pokemon-list.response';
```

Modificamos pokemonApi.ts para que use este nuevo tipado

<img src="./capturas/cap38.PNG" />

Y finalmente modificamos usePokemonGame.ts para que use este nuevo tipado

<img src="./capturas/cap39.PNG" />

Y aqui finaliza el cuarto reto


## Reto5 

### Modificando método getPokemons()

Vamos a modificar el método getPokemons() para quedarnos solo con el nombre y el id 

Creamos un nuevo archivo llamado __pokemon.interface.ts__ dentro de la carpeta __interface__ 

<img src="./capturas/cap40.PNG" />


y añadiremos el siguiente contenido:

<img src="./capturas/cap41.PNG" />

lo exportamos desde __index.ts__ como hicimos anteriormente

Modificamos el metodo getPokemons() de la siguiente manera:

<img src="./capturas/cap42.PNG" />

> ¿Qué es lo que estamos haciendo?
>Estamos obteniendo los datos de la PokeApi y lo transformamos en un array de objetos Pokemon
>¿Para qué sirve la línea de código __const id = urlParts[urlParts.length -2 ] ?? 0;__?
>Sirve para extraer el id del Pokemon desde la URL que viene en la respuesta de la PokeApi
>urlParts: es el resultado de dividir la url del Pokemon en partes utilizando el caracter __/__ como delimitador
>siendo como ejemplo la url del Pokemon __https://pokeapi.co/api/v2/pokemon/1__ quedaria de la siguiente manera: 

```bash
urlParts = ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""];

```

> urlParts.length -2: Obtiene el penultimo elemento del array anterior siendo este el id del Pokemon
>
>?? 0 : Devuelve el valor de la izquierda si no es null ni undefined si no usara el valor por defecto 0


Ahora llamaremos a nuestro método modificando el onMounted() de la siguiente manera:

<img src="./capturas/cap43.PNG" />

Mostramos el resultado en la consola:

<img src="./capturas/cap44.PNG" />

Vemos como resultado nos muestra una lista de los 151 pokemon ordenados por su id

Vamos a hacer que nuestra lista nos la devuelva de forma aleatoria
>¿Se te ocurre como?
> Modificamos el return del método getPokemons() usando la funcion __sort__ junto a la de __Math.random()__

<img src="./capturas/cap45.PNG" />

Dejando como resultado la siguiente consola:

<img src="./capturas/cap46.PNG" />

y aqui finalizamos el quinto reto
</div>



## Reto6

### FINAL


Para continuar, lo que debemos hacer es poder determinar varias propiedades computadas que vamos a necesitas, por ejemplo: cuando nuestra página está cargando. Hay un momento en la petición HTTP está trayendo la información, por tanto, podemos crear una propiedad computada para que se cambie automáticamente. 

> ¿Qué es una propiedad computada?
>
>Es una propiedad reactiva que se recalcula automáticamente cuando se cambian los valores de sus dependencias alacenadose en cache para optimizar el rendimiento.

En usePokemonGame.ts crea una nueva propiedad computada llamada isLoading de la siguiente forma:

<img src="./capturas/cap47.PNG" />

<img src="./capturas/cap48.PNG" />

Lo que estamos haciendo aquí es determinar si el array de Pokemon está o no vacío, de tal forma que podamos mostrar o no cierta información en base a ello, como por ejemplo:
    Mostrar en PokemonGame.vue el mensaje de __"Espere por favor"__ y __"Cargando Pokemons"__:

<img src="./capturas/cap49.PNG" />

como lo que hemos ha sido modificar el valor de la directiva v-if con la propiedad computada y añadido v-else cuando cambie el valor inicial de esa propiedad.

Al probar lo anterior, notarás que el cambio es prácticamente imperceptible. Por tanto:

    Añade una promesa en onMounted() del archivo usePokemonGame usando la función setTimeout para que al cargar la respuesta, tarde 1000 milésimas de segundo.

    Comprueba que ahora se modifica el componente.
    Una vez compruebes que funciona correctamente, puedes borrarlo, ya que no nos va a hacer falta

<img src="./capturas/cap50.PNG" />


Ahora vamos a crear otra propiedad reactiva a la que vamos a llamar pokemonOptions
<img src="./capturas/cap51.PNG" />


    Estos pokemonOption van a ser las opciones de los Pokemons que vamos a mostrar, y por tanto, tenemos que crear una nueva función para manejarlas.
    En usePokemonGame añade:

<img src="./capturas/cap52.PNG" />


> ¿Cómo funciona este fragmento de código? Muestra por consola pokemonOptions.value para comprobar que efectivamente nos está devolviendo 4 pokemons como propiedades reactivas
>
>Maneja el estado del juego donde se cargan opciones de Pokemon y se dividen en grupos.
>
>La funcion getNextOption() es la que se encarga de cambiar el estado del juego y de devolver los pokemons que se van a mostrar.

>¿Cómo determinamos cuál es el Pokemon correcto? 
Tenemos que ser capaces de determinar cual es el Pokemon correcto. Vamos a hacerlo mediante una propiedad computada. Para ello vamos a crear:

<img src="./capturas/cap53.PNG" />





De esta forma, lo que estamos haciendo es, obtener un valor que va desde 0 hasta el largo de elementos que tenemos en pokemonOptions (4 en nuestro caso).

<img src="./capturas/cap54.PNG" />


Vamos a añadirlo en nuestro componente:

<img src="./capturas/cap55.PNG" />


Comprueba que el Pokémon que aparece está en la lista que aparece por consola y no que siempre ocupa la primera posición.
Hasta este punto, tenemos esto:

<img src="./capturas/cap56.PNG" />

Ahora lo que debemos hacer es saber cual es la imagen correspondiente con ese Pokémon.

<img src="./capturas/cap57.PNG" />

>¿Qué es lo que estamos haciendo?
>
> En PokemonPicture le añadimos el id del pokemonrandom

Vamos a PokemonPicture.vue y lo que tenemos que hacer es:
Definir las props

<img src="./capturas/cap58.PNG" />


Hacer el bind de src usando una propiedad computada: 

<img src="./capturas/cap59.PNG" />



donde el enlace se modifica de la siguiente forma:

<img src="./capturas/cap60.PNG" />


Muestra el resultado y comprueba que es correcto.


<img src="./capturas/cap62.PNG" />


Ahora necesitamos crear otra propiedad que se encargue de mostrar la imagen original si se ha seleccionado la opción correcta. De la misma forma que lo anterior, hacemos:

<img src="./capturas/cap63.PNG" />


En PokemonPicture.vue:

<img src="./capturas/cap64.PNG" />

Comprueba que ahora se visualiza la imagen del Pokémon original.

<img src="./capturas/cap65.PNG" />

En v-else, añade la clase que tenemos en animations.css para que se aplique cuando se visualice la imagen original.

<img src="./capturas/cap66.PNG" />


Siguiendo con nuestro PokemonGame, nosotros ya podemos determinar cuando se debe visualizar la imagen correcta. ¿Cómo? Pues usando la propiedad que ya habíamos creado llamada GameStatus. Teníamos 3 estados: 'Playing', 'Won', y 'Lost'. Por tanto, modificamos el código:

<img src="./capturas/cap67.PNG" />

Se muestra el Pokémon si y solo si NO se está jugando.

Mostrar las posibles opciones:
Nosotros ya tenemos creado nuestras opciones en pokemonOpcions, por tanto, en PokemonGame.vue:


<img src="./capturas/cap68.PNG" />

Ahora, en PokemonOptions.vue, borramos la lista que teniamos de ejemplo y la sustituimos por botones:


<img src="./capturas/cap69.PNG" />

>Explica el funcionamiento del componente hasta ahora y muestra el resultado de la aplicación.
>
> Esta recorriendo las opciones que recibe y las convierte en botones.

<img src="./capturas/cap70.PNG" />


Ahora tenemos que saber, cuando el usuario haga click sobre un botón, emitir cual es esa opción, para ello creamos defineEmits: 

<img src="./capturas/cap71.PNG" />

y en PokemonGame.vue:

<img src="./capturas/cap72.PNG" />


Ahora, en la consola debería aparecer el id del Pokemon al que estamos haciendo click.

<img src="./capturas/cap73.PNG" />

Ahora vamos a centrarnos en saber cuando el jugador gana.
    -La lógica es muy sencilla. Será true cuando el id de la imagen del Pokemon sea igual al id que se emite cuando el usuario hace click sobre una opción.
    -Recuerden que teníamos una variable llamada GameStatus. 
    -En nuestro composable, vamos a crear una nueva función llamada checkAnswer. Esta función recibe el id de la opción que el usuario está pulsando y tendremos que verificar si ese id es igual el id del Pokemon. 
    -Si gana, el gameStatus cambia de valor. Pasará de Playing a Won. 
    -Cuando el usuario gana, vamos a lanzar una animación. Para ello: 
        -https://www.npmjs.com/package/canvas-confetti
        -Instala el paquete en el proyecto.
>   npm install canvas-confetti
>   

        -Importa el paquete en el composable. (Vale, aquí nos va a saltar un error ya que el paquete está pensado para javascript y no typescript. Para arreglarlo tendremos que ejecutar otro comando: npm i --save-dev @types/canvas-confetti, lo que estamos haciendo con este comando es instalar el paquete DT (archivo de definición) y eso debería hacer que el error desaparezca).
>   npm i --save-dev @types/canvas-confetti
>   import confetti from 'canvas-confetti';
        -Ahora, si la persona gana, vamos a lanzar la animación


<img src="./capturas/cap74.PNG" />

<img src="./capturas/cap75.PNG" />

Comprueba que funciona.


<img src="./capturas/cap76.PNG" />

Vamos a seguir completando nuestra función, ¿qué pasa si el usuario pierde?
Si el usuario no gana, tendremos que cambiar el status a Lost.

<img src="./capturas/cap77.PNG" />

Una vez que se determine que el usuario perdió, hay que bloquear los botones restantes para evitar que el usuario haga click hasta encontrar la respuesta correcta. 
Vamos a añadir una nueva propiedad en <PokemonOptions /> llamada block-selection. Será un booleano que recibiremos en PokemonOptions.vue y que tendremos que deshabilitar.


<img src="./capturas/cap78.PNG" />

<img src="./capturas/cap79.PNG" />

<img src="./capturas/cap80.PNG" />



Comprueba que funciona.

<img src="./capturas/cap81.PNG" />

Ahora añadimos un boton de reinicio para que el usuario pueda volver a jugar.



devolvemos todo a una forma inicial y volvemos a cargar el pokemon y sus opciones

<img src="./capturas/cap82.PNG" />




Si el el estado del juego es que no esta en juego se muestra el boton
<img src="./capturas/cap83.PNG" />


quedando como resultado:

<img src="./capturas/cap84.PNG" />


Finalizando la tarea.