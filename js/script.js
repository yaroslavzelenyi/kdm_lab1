// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: 'x1' },
    { id: 2, label: 'x2' },
    { id: 3, label: 'x3' },
    { id: 4, label: 'x4' },
    { id: 5, label: 'x5' },
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 2, arrows: 'to' },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4, arrows: 'to' },
    { from: 5, to: 5 },
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    manipulation: {
        enabled: true,
        addEdge: function (edgeData, callback) {
            if (graphType) {
                edgeData.arrows = 'to';
            }
            callback(edgeData);
        },
    },
};

// initialize your network!
var network = new vis.Network(container, data, options);
