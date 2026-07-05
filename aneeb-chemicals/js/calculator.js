/* ============================================
   calculator.js — Coverage Requirement Calculator
   ============================================ */
'use strict';

const PRODUCT_DATA = {
  roofmate:   { rate: 1.25, unit: 'litres',    name: 'Aneeb Roof Mate' },
  awplus:     { rate: 0.90, unit: 'kg',        name: 'Aneeb AW Plus' },
  tileadh:    { rate: 4.50, unit: 'kg',        name: 'Tile Adhesive (Bond Plus)' },
  epoxy:      { rate: 1.75, unit: 'kg',        name: 'Epoxy Grout' },
  gypsumbond: { rate: 0.20, unit: 'litres',    name: 'Gypsum Bond' },
};

function calculateRequirement() {
  const productKey = document.getElementById('calcProduct').value;
  const area       = parseFloat(document.getElementById('calcArea').value);
  const coats      = parseInt(document.getElementById('calcCoats').value, 10);
  const resultEl   = document.getElementById('calcResult');

  if (!productKey || !area || area <= 0) {
    resultEl.classList.remove('visible');
    alert('Please select a product and enter a valid area.');
    return;
  }

  const product  = PRODUCT_DATA[productKey];
  // Convert sq.ft to sq.m (1 sq.ft = 0.0929 sq.m)
  const areaSqm  = area * 0.0929;
  const raw      = areaSqm * product.rate * coats;
  const withWaste = raw * 1.10; // +10% wastage
  const qty      = withWaste.toFixed(1);

  document.getElementById('calcQty').textContent  = qty;
  document.getElementById('calcUnit').textContent = `${product.unit} of ${product.name} required`;
  document.getElementById('calcNote').textContent =
    `For ${area.toLocaleString()} sq.ft (${areaSqm.toFixed(1)} sq.m), ${coats} coat(s). Includes 10% wastage buffer. ` +
    `Actual consumption varies by surface porosity and application method. Contact us for a precise site estimate.`;

  resultEl.classList.remove('visible');
  // Trigger reflow for animation replay
  void resultEl.offsetWidth;
  resultEl.classList.add('visible');
}
