const properties = [
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
