const properties = [

{
title:"Villa moderne avec piscine",
location:"Sfax • villa",
description:"Villa haut standing avec piscine, jardin et garage.",
price:"850 000 TND",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
},

{
title:"Appartement luxueux",
location:"Tunis • appartement",
description:"Appartement premium proche du centre-ville.",
price:"420 000 TND",
image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
},

{
title:"Maison familiale",
location:"Sousse • maison",
description:"Grande maison familiale avec terrasse et garage.",
price:"560 000 TND",
image:"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop"
}

];

const propertyGrid = document.getElementById("property-grid");

properties.forEach(property => {

propertyGrid.innerHTML += `

<div class="property-card">

<img src="${property.image}" alt="${property.title}">

<div class="property-content">

<h3>${property.title}</h3>

<p>${property.location}</p>

<p>${property.description}</p>

<div class="price">${property.price}</div>

<a
class="visit-btn"
href="https://wa.me/21651649956"
target="_blank"
>
Demander une visite
</a>

</div>

</div>

`;

});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const message =
document.getElementById("message").value;

const text =
`Bonjour ImmoNova 👋

Nom : ${name}
Téléphone : ${phone}

Message :
${message}`;

window.open(
`https://wa.me/21651649956?text=${encodeURIComponent(text)}`,
"_blank"
);

});
