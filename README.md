# Práctica DOM Viajes

Proyecto realizado como ejercicio de práctica para trabajar **manipulación del DOM con JavaScript**.
La aplicación muestra una página web de viajes donde parte del contenido se genera dinámicamente utilizando JavaScript.

## 📌 Descripción

La web contiene:

* Una **sección de bienvenida** con una imagen añadida dinámicamente desde JavaScript.
* Una sección de **destinos recomendados** que se generan recorriendo un **array de objetos**.
* Un **selector de ciudades** que se crea dinámicamente a partir de un array de strings.
* Estilos aplicados con **CSS** para organizar el layout.

El objetivo principal del ejercicio es practicar:

* Selección de elementos del DOM
* Creación de elementos dinámicamente
* Uso de arrays y bucles para renderizar contenido
* Inserción de HTML con JavaScript

## 🛠 Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

## ⚙️ Funcionalidades

### 1. Imagen dinámica de bienvenida

Se inserta una imagen en la sección **Bienvenidos** usando JavaScript:

```javascript
let img = document.querySelector(".bienvenidos");
img.insertAdjacentHTML("beforeend","<img class='imgBienvenidos' src='../banner/1.jpg'/>");
```

### 2. Renderizado de viajes recomendados

Se utiliza un **array de objetos** con la información de los viajes y se recorren con un bucle para generar las tarjetas en el DOM.

```javascript
const data = [
  {
    img: "../viajes/viajes-1.jpg",
    titulo: "viaje 1",
    descripcion: "Descripción del viaje"
  }
];
```

Cada elemento se inserta dinámicamente dentro de la sección correspondiente.

### 3. Generación de ciudades en el selector

El selector de destinos se crea dinámicamente recorriendo un array de ciudades:

```javascript
const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];
```

Cada ciudad se añade como una opción dentro del `<select>`.

## 📂 Estructura del proyecto

```
dom-viajes
│
├── index.html
├── style.css
├── script.js
│
├── banner
│   └── 1.jpg
│
└── viajes
    ├── viajes-1.jpg
    ├── viajes-2.jpg
    └── viajes-3.jpg
```

## 🚀 Despliegue

El proyecto está desplegado con **GitHub Pages**.

## 👩‍💻 Autor

Proyecto realizado por **Karina Rojas** como práctica de manipulación del DOM con JavaScript.
