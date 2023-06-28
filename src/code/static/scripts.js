
let stations_line = [
    "Ilanz",
    "Castrisch",
    "Versam",
    "Reichenau",
    "Rothenbrunnen",
    "Rodels",
    "Thusis",
    "Surava"
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

function addPoint(key) {

    const svg = document.getElementById("svg");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','circle');

    newLine.setAttribute('id', key);

    newLine.setAttribute('cx', stations[key][0] + "%");
    newLine.setAttribute('cy', stations[key][1] + "%");
    newLine.setAttribute('r', 6);
    newLine.setAttribute('fill', "rgb(0, 255, 0)");

    newLine.style = "stroke:rgb(0, 255, 0);stroke-width:2";
    svg.appendChild(newLine);

}

function drawLine(stations_line) {
    const svg = document.getElementById("svg");
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    for (key in stations_line) {
        if (x1 == 0 || y1 == 0) {
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

            newLine.style = "stroke:rgb(0, 0, 255);stroke-width:6";
            svg.appendChild(newLine);

            x1 = x2
            y1 = y2
        }
        
    }
}


drawLine(stations_line);

for (key in stations) {
    
    addPoint(key);
}
