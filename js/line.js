

function connectBoxes() {
    svgContainer.innerHTML = ''; // Réinitialise les lignes existantes
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox,possederBox, line);

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(compBox, possederBox, line2);

    const line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox, projetBox, line3);

    const line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox, obtenirBox, line4);
    const line5 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(studyBox,obtenirBox, line5);
  }
  function createline(box1, box2, line){
    const box1Pos = box1.getBoundingClientRect();
    const box1X = box1Pos.left + box1Pos.width / 2;
    const box1Y = box1Pos.top + box1Pos.height / 2;
    const box2Pos = box2.getBoundingClientRect();
    const box2X = box2Pos.left + box2Pos.width / 2;
    const box2Y = box2Pos.top + box2Pos.height / 2;
    line.setAttribute('x1', box1X);
    line.setAttribute('y1', box1Y);
    line.setAttribute('x2', box2X);
    line.setAttribute('y2', box2Y);
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');
    svgContainer.appendChild(line);
  }
  // Sélection des éléments
  let devWebBox = document.getElementById('dev_web');
  let compBox = document.getElementById('comp');
  let possederBox = document.getElementById('posseder');
  let projetBox = document.getElementById('projet');
  let studyBox = document.getElementById('study');
  let obtenirBox = document.getElementById('obtenir');
  const svgContainer = document.getElementById('lines');
  
  // Connecte initialement les boîtes
  connectBoxes();
  
  // Met à jour les connexions lors du redimensionnement
  window.addEventListener('resize', () => {
    connectBoxes();
  });
  