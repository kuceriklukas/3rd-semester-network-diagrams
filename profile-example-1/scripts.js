console.log("startiiiing");

// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "dawa", shape: "ellipse" },
    { id: 2, label: "Tinglysning", shape: "ellipse" },
    { id: 3, label: "Statstidende", shape: "ellipse" },
    { id: 4, label: "CVR", shape: "ellipse" },
    { id: 5, label: "Sogn", shape: "ellipse" },
    { id: 6, label: "Sundhed", shape: "ellipse" },
    { id: 7, label: "Folketingets\ntelefonbog", shape: "ellipse" },

    { id: 8, label: "Address", shape: "box", color: "#C2FABC" },
    { id: 10, label: "Name", shape: "box", color: "#C2FABC" },
    { id: 11, label: "Email", shape: "box", color: "#C2FABC" },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 8 },
    { from: 2, to: 8 },
    { from: 3, to: 10 },
    { from: 5, to: 10 },
    { from: 6, to: 10 },
    { from: 7, to: 10 },
    { from: 3, to: 11 },
    { from: 4, to: 11 }
]);


// create a network
var container = document.getElementById("network-diagram");
var data = {
    nodes,
    edges
};

var options = {};
var network = new vis.Network(container, data, options);
