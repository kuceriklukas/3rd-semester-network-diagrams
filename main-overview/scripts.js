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
    { id: 11, label: "Forsknings\ndatabasen", shape: "ellipse" },
    { id: 12, label: "Jobnet.dk", shape: "ellipse" },
    { id: 13, label: "Domstol", shape: "ellipse" },
    { id: 14, label: "Arbejdstilsynet", shape: "ellipse" },
    { id: 15, label: "Autorisationsregistret", shape: "ellipse" },
    { id: 16, label: "DK-hostmaster", shape: "ellipse" },

    { id: 20, label: "Region", shape: "box", color: "#C2FABC" },
    { id: 21, label: "Address", shape: "box", color: "#C2FABC" },
    { id: 22, label: "Name", shape: "box", color: "#C2FABC" },
    { id: 23, label: "E-mail", shape: "box", color: "#C2FABC" },
    { id: 24, label: "Phone Number", shape: "box", color: "#C2FABC" },
    { id: 25, label: "Education", shape: "box", color: "#C2FABC" },
    { id: 26, label: "Work Title", shape: "box", color: "#C2FABC" },
    { id: 27, label: "Gender", shape: "box", color: "#C2FABC" },
    { id: 28, label: "Age", shape: "box", color: "#C2FABC" },
    { id: 29, label: "Facial Image", shape: "box", color: "#C2FABC" },
    { id: 30, label: "Age Group", shape: "box", color: "#C2FABC" },
    { id: 31, label: "Department/Party", shape: "box", color: "#C2FABC" },


    { id: 34, label: "Jurisdiction", shape: "box", color: "#C2FABC" },

    { id: 36, label: "Work Address", shape: "box", color: "#C2FABC" },
    { id: 37, label: "Work\nPhone Number", shape: "box", color: "#C2FABC" },
    { id: 38, label: "Work E-mail", shape: "box", color: "#C2FABC" },
    { id: 39, label: "Company\nAddress", shape: "box", color: "#C2FABC" },
    { id: 40, label: "Company Name", shape: "box", color: "#C2FABC" },
    

    { id: 43, label: "CVR", shape: "box", color: "#C2FABC" },
    { id: 44, label: "Court", shape: "box", color: "#C2FABC" },
    { id: 45, label: "Educational\nInstitution", shape: "box", color: "#C2FABC" },
    { id: 46, label: "Date Range", shape: "box", color: "#C2FABC" },
    { id: 47, label: "Free Text", shape: "box", color: "#C2FABC" },
    { id: 48, label: "Domain Name", shape: "box", color: "#C2FABC" },
    { id: 49, label: "Appointment Date", shape: "box", color: "#C2FABC" },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 20, arrows: "from", color: { color: "red" }},
    { from: 1, to: 21, arrows: "from", color: { color: "red" }},
    { from: 1, to: 20, arrows: "to", color: { color: "blue" }},
    { from: 1, to: 21, arrows: "to", color: { color: "blue" }},

    { from: 2, to: 21, arrows: "from", color: { color: "red" } },
    { from: 2, to: 21, arrows: "to", color: { color: "blue" } },
    { from: 2, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 2, to: 39, arrows: "to", color: { color: "blue" } },
    { from: 2, to: 40, arrows: "to", color: { color: "blue" } },

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
    { from: 5, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 5, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 5, to: 26, arrows: "to", color: { color: "blue" } },

    { from: 6, to: 47, arrows: "from", color: { color: "red" } },
    { from: 6, to: 20, arrows: "from", color: { color: "red" } },
    { from: 6, to: 27, arrows: "from", color: { color: "red" } },
    { from: 6, to: 30, arrows: "from", color: { color: "red" } },
    { from: 6, to: 21, arrows: "from", color: { color: "red" } },
    { from: 6, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 26, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 27, arrows: "to", color: { color: "blue" } },
    { from: 6, to: 30, arrows: "to", color: { color: "blue" } },

    { from: 7, to: 22, arrows: "from", color: { color: "red" } },
    { from: 7, to: 31, arrows: "from", color: { color: "red" } },
    { from: 7, to: 26, arrows: "from", color: { color: "red" } },
    { from: 7, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 26, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 7, to: 29, arrows: "to", color: { color: "blue" } },

    { from: 8, to: 47, arrows: "from", color: { color: "red" } },
    { from: 8, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 8, to: 23, arrows: "to", color: { color: "blue" } },
    { from: 8, to: 24, arrows: "to", color: { color: "blue" } },

    { from: 9, to: 22, arrows: "from", color: { color: "red" } },
    { from: 9, to: 40, arrows: "from", color: { color: "red" } },
    { from: 9, to: 34, arrows: "from", color: { color: "red" } },
    { from: 9, to: 20, arrows: "from", color: { color: "red" } },
    { from: 9, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 40, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 43, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 26, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 49, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 9, to: 44, arrows: "to", color: { color: "blue" } },
    
    { from: 10, to: 22, arrows: "from", color: { color: "red" } },
    { from: 10, to: 21, arrows: "from", color: { color: "red" } },
    { from: 10, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 10, to: 40, arrows: "to", color: { color: "blue" } },
    { from: 10, to: 21, arrows: "to", color: { color: "blue" } },
    { from: 10, to: 39, arrows: "to", color: { color: "blue" } },

    { from: 11, to: 47, arrows: "from", color: { color: "red" } },
    { from: 11, to: 22, arrows: "from", color: { color: "red" } },
    { from: 11, to: 45, arrows: "from", color: { color: "red" } },
    { from: 11, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 45, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 38, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 11, to: 29, arrows: "to", color: { color: "blue" } },

    { from: 12, to: 47, arrows: "from", color: { color: "red" } },
    { from: 12, to: 26, arrows: "from", color: { color: "red" } },
    { from: 12, to: 20, arrows: "from", color: { color: "red" } },
    { from: 12, to: 21, arrows: "from", color: { color: "red" } },
    { from: 12, to: 25, arrows: "from", color: { color: "red" } },
    { from: 12, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 12, to: 26, arrows: "to", color: { color: "blue" } },
    { from: 12, to: 36, arrows: "to", color: { color: "blue" } },
    { from: 12, to: 37, arrows: "to", color: { color: "blue" } },
    { from: 12, to: 38, arrows: "to", color: { color: "blue" } },

    // Domstol
    { from: 13, to: 22, arrows: "to", color: { color: "blue" } },
    { from: 13, to: 26, arrows: "to", color: { color: "blue" } },
    
    // Arbejdstilsynet
    // Removed: Safety rating
    { from: 14, to: 40, arrows: "from", color: { color: "red" } },
    { from: 14, to: 40, arrows: "to", color: { color: "blue" } },

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
