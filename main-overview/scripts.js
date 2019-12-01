console.log("startiiiing");

// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: "dawa", shape: "ellipse" },
    { id: 2, label: "Tinglysning", shape: "ellipse" },
    { id: 3, label: "Statstidende", shape: "ellipse" },
    { id: 4, label: "CVR (Virk)", shape: "ellipse" },
    { id: 5, label: "Sogn", shape: "ellipse" },
    { id: 6, label: "Sundhed", shape: "ellipse" },
    { id: 7, label: "Folketingets\ntelefonbog", shape: "ellipse" },
    { id: 8, label: "Borgerforslag", shape: "ellipse" },
    { id: 9, label: "Advokatnølgen", shape: "ellipse" },
    { id: 10, label: "Det centrale\nhusdyrbrugssregister", shape: "ellipse" },
    { id: 11, label: "Forskningsdatabasen", shape: "ellipse" },
    { id: 12, label: "Jobnet.dk", shape: "ellipse" },
    { id: 13, label: "Domstol", shape: "ellipse" },
    { id: 14, label: "Arbejdstilsynet", shape: "ellipse" },

    { id: 20, label: "Partial Address", shape: "box", color: "#C2FABC" },
    { id: 21, label: "Address", shape: "box", color: "#C2FABC" },
    { id: 22, label: "Name", shape: "box", color: "#C2FABC" },
    { id: 23, label: "E-mail", shape: "box", color: "#C2FABC" },
    { id: 24, label: "Phone Number", shape: "box", color: "#C2FABC" },
    { id: 25, label: "Education", shape: "box", color: "#C2FABC" },
    { id: 26, label: "Profession", shape: "box", color: "#C2FABC" },
    { id: 27, label: "Gender", shape: "box", color: "#C2FABC" },
    { id: 28, label: "Age", shape: "box", color: "#C2FABC" },
    { id: 29, label: "Image", shape: "box", color: "#C2FABC" },
    { id: 30, label: "Age group", shape: "box", color: "#C2FABC" },
    { id: 31, label: "Department/party", shape: "box", color: "#C2FABC" },
    { id: 32, label: "Position", shape: "box", color: "#C2FABC" },
    { id: 33, label: "Expertise", shape: "box", color: "#C2FABC" },
    { id: 34, label: "Jurisdiction", shape: "box", color: "#C2FABC" },
    { id: 35, label: "Indication of\npolitical belief", shape: "box", color: "#C2FABC" },
    { id: 36, label: "Work Address", shape: "box", color: "#C2FABC" },
    { id: 37, label: "Work\nPhone Number", shape: "box", color: "#C2FABC" },
    { id: 38, label: "Work E-mail", shape: "box", color: "#C2FABC" },
    { id: 39, label: "Company Address", shape: "box", color: "#C2FABC" },
    { id: 40, label: "Company Name", shape: "box", color: "#C2FABC" },
    { id: 41, label: "Company Owner", shape: "box", color: "#C2FABC" },
    { id: 42, label: "Company Information", shape: "box", color: "#C2FABC" },
    { id: 43, label: "CVR", shape: "box", color: "#C2FABC" },
    { id: 44, label: "Court", shape: "box", color: "#C2FABC" },
    { id: 45, label: "University", shape: "box", color: "#C2FABC" },
    { id: 46, label: "Date Range", shape: "box", color: "#C2FABC" },
    { id: 47, label: "Free text", shape: "box", color: "#C2FABC" },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 20, arrows: "from", color: { color: "red" }},
    { from: 1, to: 21, arrows: "to", color: { color: "blue" }},

    { from: 2, to: 20, arrows: "from", color: { color: "red" } },
    { from: 2, to: 21, arrows: "from", color: { color: "red" } },
    { from: 2, to: 21, arrows: "to", color: { color: "blue" } },
    { from: 2, to: 40, arrows: "to", color: { color: "blue" } },
    { from: 2, to: 41, arrows: "to", color: { color: "blue" } },

    { from: 3, to: 22, arrows: "from", color: { color: "red" } },
    { from: 3, to: 46, arrows: "from", color: { color: "red" } },
    { from: 3, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 3, to: 25, arrows: "to", color: { color: "blue" } },
    { from: 3, to: 43, arrows: "to", color: { color: "blue" } },

    { from: 4, to: 21, arrows: "from", color: { color: "red" } },
    { from: 4, to: 22, arrows: "from", color: { color: "red" } },
    { from: 4, to: 40, arrows: "from", color: { color: "red" } },
    { from: 4, to: 43, arrows: "from", color: { color: "red" } },
    { from: 4, to: 39, arrows: "to", color: { color: "blue" } },
    { from: 4, to: 43, arrows: "to", color: { color: "blue" } },

    { from: 5, to: 47, arrows: "from", color: { color: "red" } },
    { from: 5, to: 22, arrows: "from", color: { color: "red" } },
    { from: 5, to: 21, arrows: "from", color: { color: "red" } },
    { from: 5, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 5, to: 21, arrows: "to", color: { color: "blue" } },
    { from: 5, to: 24, arrows: "to", color: { color: "blue" } },
    { from: 5, to: 26, arrows: "to", color: { color: "blue" } },

    { from: 6, to: 47, arrows: "from", color: { color: "red" } },
    { from: 6, to: 20, arrows: "from", color: { color: "red" } },
    { from: 6, to: 27, arrows: "from", color: { color: "red" } },
    { from: 6, to: 30, arrows: "from", color: { color: "red" } },
    { from: 6, to: 36, arrows: "from", color: { color: "red" } },
    { from: 6, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 26, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 27, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 30, arrows: "to", color: { color: "blue" } },

    { from: 7, to: 22, arrows: "from", color: { color: "red" } },
    { from: 7, to: 31, arrows: "from", color: { color: "red" } },
    { from: 7, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 32, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 29, arrows: "to", color: { color: "blue" } },

    { from: 8, to: 47, arrows: "from", color: { color: "red" } },
    { from: 8, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 8, to: 23, arrows: "to", color: { color: "blue" } },
    { from: 8, to: 24, arrows: "to", color: { color: "blue" } },
    { from: 8, to: 35, arrows: "to", color: { color: "blue" } },

    { from: 9, to: 22, arrows: "from", color: { color: "red" } },
    { from: 9, to: 40, arrows: "from", color: { color: "red" } },
    { from: 9, to: 34, arrows: "from", color: { color: "red" } },
    { from: 9, to: 20, arrows: "from", color: { color: "red" } },
    { from: 9, to: 33, arrows: "from", color: { color: "red" } },
    { from: 9, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 42, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 32, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 33, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 44, arrows: "to", color: { color: "blue" } },

    { from: 11, to: 47, arrows: "from", color: { color: "red" } },
    { from: 11, to: 45, arrows: "from", color: { color: "red" } },
    { from: 11, to: 22, arrows: "from", color: { color: "red" } },
    { from: 11, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 45, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 29, arrows: "to", color: { color: "blue" } },

    // TODO from here 
    // { from: 12, to: 47, arrows: "from", color: { color: "red" } },
    // { from: 12, to: 22, arrows: "to", color: { color: "blue" } },

]);


// create a network
var container = document.getElementById("network-diagram");
var data = {
    nodes,
    edges
};

var options = {
    physics: {
        forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 100,
            springConstant: 0.18
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 190 }
    }
};
var network = new vis.Network(container, data, options);
