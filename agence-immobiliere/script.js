const properties = [
<<<<<<< HEAD
  {
    title: "Villa moderne avec piscine",
    type: "villa",
    city: "Sfax",
    price: 850000,
    desc: "Villa haut standing avec piscine, jardin et garage.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Appartement premium",
    type: "appartement",
    city: "Tunis",
    price: 320000,
    desc: "Appartement moderne proche centre-ville avec terrasse.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Terrain constructible",
    type: "terrain",
    city: "Sousse",
    price: 180000,
    desc: "Terrain bien situé, idéal pour projet immobilier.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Villa familiale",
    type: "villa",
    city: "Tunis",
    price: 690000,
    desc: "Grande villa familiale avec espace extérieur.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Appartement S+3",
    type: "appartement",
    city: "Sfax",
    price: 240000,
    desc: "Appartement lumineux, quartier calme et sécurisé.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Terrain commercial",
    type: "terrain",
    city: "Sfax",
    price: 450000,
    desc: "Terrain idéal pour commerce ou résidence.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  }
];

const grid = document.getElementById("propertyGrid");

function displayProperties(list){
  grid.innerHTML = "";

  list.forEach(item => {
    grid.innerHTML += `
      <article class="property-card">
        <img src="${item.img}" alt="${item.title}">
        <div class="property-content">
          <h3>${item.title}</h3>
          <p>${item.city} • ${item.type}</p>
          <p>${item.desc}</p>
          <strong>${item.price.toLocaleString()} TND</strong>
          <a href="https://wa.me/21651649956?text=Bonjour%20je%20veux%20plus%20d'informations%20sur%20${encodeURIComponent(item.title)}" target="_blank">
            Demander une visite
          </a>
        </div>
      </article>
    `;
  });
}

function filterProperties(){
  const type = document.getElementById("typeFilter").value;
  const city = document.getElementById("cityFilter").value;
  const maxPrice = Number(document.getElementById("priceFilter").value);

  const filtered = properties.filter(item => {
    return (type === "all" || item.type === type)
      && (city === "all" || item.city === city)
      && item.price <= maxPrice;
  });

  displayProperties(filtered);
}

function sendWhatsapp(event){
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const request = document.getElementById("request").value;
  const msg = document.getElementById("msg").value;

  const text = encodeURIComponent(
    `Bonjour ImmoNova 👋\n\nNom : ${name}\nTéléphone : ${phone}\nBesoin : ${request}\nMessage : ${msg}`
  );

  window.open(`https://wa.me/21651649956?text=${text}`, "_blank");
}

displayProperties(properties);
=======
  {type:'villa', city:'Sfax', price:850000, title:'Villa moderne avec piscine', rooms:'5 pièces', area:'420 m²', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'},
  {type:'appartement', city:'Tunis', price:320000, title:'Appartement haut standing', rooms:'3 pièces', area:'118 m²', img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop'},
  {type:'terrain', city:'Sousse', price:210000, title:'Terrain constructible', rooms:'Zone calme', area:'600 m²', img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'},
  {type:'villa', city:'Tunis', price:920000, title:'Villa luxe zone résidentielle', rooms:'6 pièces', area:'500 m²', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop'},
  {type:'appartement', city:'Sfax', price:245000, title:'Appartement proche centre-ville', rooms:'4 pièces', area:'135 m²', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'},
  {type:'appartement', city:'Sousse', price:410000, title:'Appartement vue mer', rooms:'3 pièces', area:'105 m²', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop'}
];

function formatPrice(price){return new Intl.NumberFormat('fr-FR').format(price)+' TND'}
function renderProperties(list){
  const grid=document.getElementById('propertyGrid');
  grid.innerHTML=list.map(p=>`<article class="property-card"><img src="${p.img}" alt="${p.title}"><div class="property-body"><h3>${p.title}</h3><div class="property-meta"><span>${p.city}</span><span>${p.rooms} • ${p.area}</span></div><div class="price">${formatPrice(p.price)}</div><button onclick="askVisit('${p.title}','${p.city}','${formatPrice(p.price)}')">Demander une visite</button></div></article>`).join('');
}
function filterProperties(){
  const type=document.getElementById('typeFilter').value;
  const city=document.getElementById('cityFilter').value;
  const price=Number(document.getElementById('priceFilter').value);
  const filtered=properties.filter(p=>(type==='all'||p.type===type)&&(city==='all'||p.city===city)&&p.price<=price);
  renderProperties(filtered);
}
function askVisit(title,city,price){
  const text=encodeURIComponent(`Bonjour ImmoNova 👋\nJe veux visiter ce bien : ${title}\nVille : ${city}\nPrix : ${price}`);
  window.open(`https://wa.me/21651649956?text=${text}`,'_blank');
}
function sendWhatsapp(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const request=document.getElementById('request').value;
  const msg=document.getElementById('msg').value.trim();
  const text=encodeURIComponent(`Bonjour ImmoNova 👋\nNom : ${name}\nTéléphone : ${phone}\nBesoin : ${request}\nMessage : ${msg}`);
  window.open(`https://wa.me/21651649956?text=${text}`,'_blank');
}
function toggleMenu(){document.getElementById('menu').classList.toggle('active')}
renderProperties(properties);
>>>>>>> 52c47e087c9ac474fa456fa477bb91bf56120188
