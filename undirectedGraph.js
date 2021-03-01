// // Graph Visual Representation

// Graph
//      2 - 0
//     / \
//    1 - 3

// // Edge List
// const graph = [
//     [0, 2],
//     [2, 3],
//     [2, 1],
//     [1, 3]
// ];

// // Abjacent List
// graph = [
//     [2],
//     [2, 3],
//     [0, 1, 3],
//     [1, 2]
// ];

// graph = {
//     0: [2],
//     1: [2, 3],
//     2: [0, 1, 3],
//     3: [1, 2]
// }

// // Adjacent Matrix
// graph = [
//     [0, 0, 1, 0],
//     [0, 0, 1, 1],
//     [1, 1, 0, 1],
//     [0, 1, 1, 0],
// ]

// graph = {
//     0: [0, 0, 1, 0],
//     1: [0, 0, 1, 1],
//     2: [1, 1, 0, 1],
//     3: [0, 1, 1, 0],
// }

// Abjacent List

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVerex(node) {
        this.adjacentList[node] = [];
        ++this.nodes;
    }
    addEdge(fromNode, toNode) {
        if (fromNode, toNode){
            this.adjacentList[fromNode].push(toNode);
            this.adjacentList[toNode].push(firstNode);
        }
    }
}

const graph = new Graph(); 
graph.addVerex("1");
graph.addVerex("3");
graph.addVerex("4");
graph.addVerex("5");
graph.addVerex("6");
graph.addVerex("8");
graph.addEdge("3", "5");
graph.addEdge("6", "3");
graph.addEdge("1", "6");
graph.addEdge("1", "3");
graph.addEdge("1", "4");
graph.addEdge("4", "5");
graph.addEdge("8", "4");