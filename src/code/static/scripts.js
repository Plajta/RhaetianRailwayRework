
var from = "";
var ziel = "";

let stations_line = [
    
]

let stations = {
    "Diesentis": [19, 44],
    "Rabius": [22, 44],
    "Tavanasa": [24.75, 44],
    "Rueum": [26.75, 44],
    "Schnaus": [29, 44],
    "Ilanz": [30.6, 44],
    "Castrisch": [33.25, 44],
    "Versam": [38, 38.2],
    "Reichenau": [39.75, 35.75],
    "Chur": [43.5, 30],
    "Peter": [48.3, 30],
    "Langweis": [50.4, 30.3],
    "Arosa": [50.75, 34.7],
    "Untervaz": [43.5, 23],
    "Landquart": [43.5, 18],
    "Schniers": [51.6, 15.7],
    "Furna": [53.9, 17.4],
    "Kublis": [55.1, 19.1],
    "Klosters": [58.2, 24.2],
    "DavosDorf": [58.45, 38.9],
    "DavosPlatz": [57.2, 41],
    "Preda": [55.3, 51.8],
    "Spinas": [57.2, 54.8],
    "Rothenbrunnen": [41.6, 41.4],
    "Rodels": [42.8, 43.2],
    "Thusis": [44.4, 46],
    "Surava": [49.5, 47.4],
    "Scuol": [74.5, 30.5],
    "Zernez": [66.2, 43.5],
    "Samedan": [54.7, 61.6],
    "Pontresina": [56, 69],
    "Poschiavo": [63, 80],
    "Campocologno": [67.3, 86.8],
    "Tirano": [68.7, 89.2]
};

let st_to_st = {
    "Diesentis": ["Rabius", 44],
    "Rabius": ["Diesentis", "Tavanasa"],
    "Tavanasa": ["Rabius", "Rueum"],
    "Rueum": ["Tavanasa", "Schnaus"],
    "Schnaus": ["Rueum", "Ilanz"],
    "Ilanz": ["Schnaus", "Castrisch"],
    "Castrisch": ["Ilanz", "Versam"],
    "Versam": ["Castrisch", "Reichenau"],
    "Reichenau": ["Versam", "Chur", "Rothenbrunnen"],
    "Chur": ["Reichenau", "Peter", "Untervaz"],
    "Peter": ["Chur", "Langweis"],
    "Langweis": ["Peter", "Arosa"],
    "Arosa": ["Langweis"],
    "Untervaz": ["Chur", "Landquart"],
    "Landquart": ["Untervaz", 18],
    "Schniers": ["Landquart", 15.7],
    "Furna": [53.9, 17.4],
    "Kublis": [55.1, 19.1],
    "Klosters": [58.2, 24.2],
    "DavosDorf": [58.45, 38.9],
    "DavosPlatz": [57.2, 41],
    "Preda": [55.3, 51.8],
    "Spinas": [57.2, 54.8],
    "Rothenbrunnen": ["Reichenau", 41.4],
    "Rodels": [42.8, 43.2],
    "Thusis": [44.4, 46],
    "Surava": [49.5, 47.4],
    "Scuol": [74.5, 30.5],
    "Zernez": [66.2, 43.5],
    "Samedan": [54.7, 61.6],
    "Pontresina": [56, 69],
    "Poschiavo": [63, 80],
    "Campocologno": [67.3, 86.8],
    "Tirano": [68.7, 89.2]
};

function circClick(event) {
    var target = event.target;
    if (from == "") {
        from = target.id;
        target.style.stroke = "rgb(255, 150, 0)"
    } else if (from == target.id) {
        from = "";
        target.style.stroke = "rgb(0, 255, 0)"
    } else if (ziel == target.id) {
        ziel = "";
        target.style.stroke = "rgb(0, 255, 0)"
    } else if (ziel == "") {
        ziel = target.id;
        target.style.stroke = "rgb(255, 150, 0)";
    } else {
        document.getElementById(ziel).style.stroke =  "rgb(0, 255, 0)";
        ziel = target.id;
        target.style.stroke = "rgb(255, 150, 0)";
    }
    stations_line = [from, ziel];
    document.getElementsByClassName("from")[0].value = from;
    document.getElementsByClassName("to")[0].value = ziel;
    
    drawLine(stations_line);
    console.log(from + " " + ziel);
}

function addPoint(key) {

    const svg = document.getElementById("svg");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','circle');

    newLine.setAttribute('id', key);

    newLine.setAttribute('cx', stations[key][0] + "%");
    newLine.setAttribute('cy', stations[key][1] + "%");
    newLine.setAttribute('r', 6);
    newLine.onclick = circClick;

    newLine.style = `transform-origin: ${stations[key][0]}% ${stations[key][1]}%;`

    svg.appendChild(newLine);

}

function drawLine(stations_line) {
    const svg = document.getElementById("svg");
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    var nodes = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'line');

    for (var i = 0, len = nodes.length; i != len; ++i) {
        nodes[0].parentNode.removeChild(nodes[0]);
    }

    for (key in stations_line) {
        if (stations_line[key] == "" || key == NaN) {
            return;
        } else if (x1 == 0 || y1 == 0) {
            x1 = stations[stations_line[key]][0];
            y1 = stations[stations_line[key]][1];

        } else {
            x2 = stations[stations_line[key]][0];
            y2 = stations[stations_line[key]][1];

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');

            newLine.setAttribute('id','line' + key);

            newLine.setAttribute('x1', x1 + "%");
            newLine.setAttribute('y1', y1 + "%");
            newLine.setAttribute('x2', x2 + "%");
            newLine.setAttribute('y2', y2 + "%");
            
            svg.insertBefore(newLine, svg.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'circle')[0]);

            x1 = x2
            y1 = y2
        }
        
    }
}

for (key in stations) {
    
    addPoint(key);
}
