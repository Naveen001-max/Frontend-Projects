/* ============================================
   modal.js — Product Detail Modal
   ============================================ */
'use strict';

const PRODUCTS = {
  'roof-mate': {
    name: 'Aneeb Roof Mate',
    tag: 'Waterproofing',
    img: 'https://cpimg.tistatic.com/06017527/b/4/Aneeb-Roof-Mate.jpg',
    desc: 'High-performance elastomeric waterproofing coating for flat and sloped roofs. Forms a seamless, flexible membrane that expands and contracts with temperature changes, preventing cracking and water ingress.',
    specs: [
      { label: 'Coverage',     value: '1–1.5 L / sq.m (2 coats)' },
      { label: 'Drying Time',  value: '4–6 hrs (touch dry)' },
      { label: 'Pack Size',    value: '1 L, 5 L, 20 L' },
      { label: 'Shelf Life',   value: '12 months (sealed)' },
      { label: 'Application',  value: 'Brush / Roller / Spray' },
      { label: 'Substrate',    value: 'Concrete, Masonry, Asbestos' },
    ]
  },
  'aw-plus': {
    name: 'Aneeb AW Plus Compound',
    tag: 'Waterproofing',
    img: 'https://cpimg.tistatic.com/06017536/b/4/Aneeb-AW-plus-Waterproofing-Compound.jpg',
    desc: 'Crystalline waterproofing compound that penetrates deep into concrete capillary pores, reacting with moisture to form insoluble crystals that permanently block water passage — even under hydrostatic pressure.',
    specs: [
      { label: 'Coverage',     value: '0.8–1 kg / sq.m' },
      { label: 'Setting Time', value: '45 mins initial set' },
      { label: 'Pack Size',    value: '1 kg, 5 kg, 25 kg' },
      { label: 'Shelf Life',   value: '12 months (dry storage)' },
      { label: 'Application',  value: 'Brush / Slurry Coat' },
      { label: 'Standard',     value: 'IS 2645 compliant' },
    ]
  },
  'epoxy-grout': {
    name: 'Aneeb Epoxy Grout',
    tag: 'Tile Fixing',
    img: 'https://cpimg.tistatic.com/06017529/b/4/Aneeb-Epoxy-Grout.jpg',
    desc: 'Two-component epoxy grout offering exceptional resistance to chemicals, staining, and moisture. Ideal for kitchens, hospitals, laboratories, and food-processing areas where hygiene and durability are critical.',
    specs: [
      { label: 'Coverage',     value: '1.5–2 kg / sq.m (3mm joint)' },
      { label: 'Pot Life',     value: '45 mins at 30°C' },
      { label: 'Pack Size',    value: '1 kg, 5 kg kit' },
      { label: 'Shelf Life',   value: '24 months' },
      { label: 'Joint Width',  value: '2–12 mm' },
      { label: 'Colors',       value: '8 standard shades' },
    ]
  },
  'gypsum-bond': {
    name: 'Gypsum Bond',
    tag: 'Plastering',
    img: 'https://cpimg.tistatic.com/08230779/b/5/Gypsum-Bond.jpg',
    desc: 'SBR-polymer based bonding agent applied to smooth concrete surfaces before gypsum plaster. Dramatically improves adhesion, reduces delamination, and allows thinner plaster coats — saving both material and time.',
    specs: [
      { label: 'Coverage',     value: '4–6 sq.m / L (undiluted)' },
      { label: 'Drying Time',  value: '30–45 mins before plaster' },
      { label: 'Pack Size',    value: '1 L, 5 L, 20 L' },
      { label: 'Shelf Life',   value: '12 months' },
      { label: 'Application',  value: 'Brush / Roller' },
      { label: 'Substrate',    value: 'Concrete, RCC, Brick' },
    ]
  },
  'spray-90': {
    name: 'Spray 90',
    tag: 'Adhesive',
    img: 'https://cpimg.tistatic.com/06017524/b/4/Spray-90.jpg',
    desc: 'Professional-grade contact adhesive spray delivering an instant, strong bond on foam, fabric, carpet, laminates, and decorative panels. Fast tack and high initial grip make it ideal for large surface bonding.',
    specs: [
      { label: 'Coverage',     value: '3–5 sq.m / can (both surfaces)' },
      { label: 'Open Time',    value: '5–15 mins after application' },
      { label: 'Pack Size',    value: '500 ml aerosol' },
      { label: 'Shelf Life',   value: '18 months' },
      { label: 'Application',  value: 'Spray (30–40 cm distance)' },
      { label: 'Bond Type',    value: 'Contact / Pressure-activated' },
    ]
  },
  'bond-plus': {
    name: 'Aneeb Bond Plus',
    tag: 'Bonding',
    img: 'https://cpimg.tistatic.com/06017534/b/5/Aneeb-Bond-Plus.jpg',
    desc: 'Versatile SBR-based polymer bonding agent used for concrete repair, bonding old to new concrete, waterproofing screeds, and enhancing tile adhesive. Improves flexibility, adhesion, and chemical resistance.',
    specs: [
      { label: 'Coverage',     value: '5–8 sq.m / L (as bonding coat)' },
      { label: 'Dilution',     value: '1:1 to 1:3 with water (by use)' },
      { label: 'Pack Size',    value: '1 L, 5 L, 20 L, 200 L' },
      { label: 'Shelf Life',   value: '12 months' },
      { label: 'Application',  value: 'Brush / Spray / Mixed in mortar' },
      { label: 'Standard',     value: 'IS 9103 compatible' },
    ]
  },
};

function openModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  const specsHTML = p.specs.map(s => `
    <div class="modal-spec">
      <dt>${s.label}</dt>
      <dd>${s.value}</dd>
    </div>`).join('');

  const imgHTML = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;color:var(--accent);opacity:.2;"><i class="fa fa-flask"></i></div>`;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img">${imgHTML}</div>
    <div class="modal-info">
      <span class="modal-tag">${p.tag}</span>
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <dl class="modal-specs">${specsHTML}</dl>
      <div class="modal-actions">
        <a href="pages/contact.html" class="btn btn--primary"><i class="fa fa-envelope"></i> Send Inquiry</a>
        <a href="https://wa.me/918045478219?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}.%20Please%20share%20price%20and%20details."
           class="btn btn--outline" target="_blank" rel="noopener" style="border-color:var(--accent);color:var(--accent);">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>`;

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('productModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
