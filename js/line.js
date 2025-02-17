

function connectBoxes() {
    let svgContainer = document.getElementById('lines');
    // Sélection des éléments
    let devWebBox = document.getElementById('dev_web');
    let compBox = document.getElementById('comp');
    let possederBox = document.getElementById('posseder');
    let projetBox = document.getElementById('projet');
    let studyBox = document.getElementById('study');
    let obtenirBox = document.getElementById('obtenir');
    svgContainer.innerHTML = ''; // Réinitialise les lignes existantes
    //let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox,possederBox, svgContainer);

    //let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(compBox, possederBox, svgContainer);

    //let line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox, projetBox, svgContainer);

    //let line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(devWebBox, obtenirBox, svgContainer);
    //let line5 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    createline(studyBox,obtenirBox, svgContainer);
  }
  function createline(box1, box2, svgContainer){
    let box1Pos = box1.getBoundingClientRect();
    let box1X = box1Pos.left + box1Pos.width / 2 + window.scrollX;
    let box1Y = box1Pos.top + box1Pos.height / 2 + window.scrollY;
    let box2Pos = box2.getBoundingClientRect();
    let box2X = box2Pos.left + box2Pos.width / 2 + window.scrollX;
    let box2Y = box2Pos.top + box2Pos.height / 2 + window.scrollY;
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('x1', box1X);
    line.setAttribute('y1', box1Y);
    line.setAttribute('x2', box2X);
    line.setAttribute('y2', box2Y);
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');
    svgContainer.appendChild(line);
  }
  
  // Connecte initialement les boîtes
  connectBoxes();
  window.addEventListener("load", connectBoxes);
  // Met à jour les connexions lors du redimensionnement
  window.addEventListener('resize', () => {
    connectBoxes();
  });
  