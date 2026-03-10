
let img = document.querySelector(".bienvenidos");
img.insertAdjacentHTML("beforeend","<img class='imgBienvenidos' src = 'banner/1.jpg' />");

/* article 1 */
let seccion = document.querySelector(".opciones");
const data = [
  {
    img: "viajes/viajes-1.jpg",
    titulo: "viaje 1",
    descripcion:
      "Lorem ipsum dolor sit amet,consectetur adipincing elit.Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies.Sed lobortis dignissim lorem,pharetra",
  },
  {
    img: "viajes/viajes-2.jpg",
    titulo: "viaje 2",
    descripcion:
      "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, utricies nec sem id, efficitur convalis arcu.Praesent suscipit augue necvelit egestas",
  },
  {
    img: "viajes/viajes-3.jpg",
    titulo: "viaje 3",
    descripcion:
      "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac, laoreet in metus. Sed dui odio",
  },
];

for (let i = 0; i < data.length; i++) {
  seccion.innerHTML += `<article class = 'contenido'>
       <img src = '${data[i].img}' alt='primera img'/>
       <h3> ${data[i].titulo}</h3>
       <p>${data[i].descripcion}</p>
    </article>`;
}

/* option */
let opciones = document.getElementById("opcion");

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
  "Zaragoza",
];

for (let i = 0; i < cities.length; i++) {
  opciones.innerHTML += `
     <option value="${cities[i]}">${cities[i]}</option>
    `;
}

