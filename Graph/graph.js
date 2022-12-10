console.log("Adding vertexes in our Graph\n");

class Graph {
    #data;
    constructor() { this.#data = {} }

    // Get Data
    getGraphData = () => {
        console.log(this.#data);
    }
    // Add vertex
    addVertex = (vertex) => {
        // Make sure we do not override old vertex if present
        if (!this.#data[vertex]) {
            this.#data[vertex] = [];
        }
    }

    // Add Edges
    addEdge = (vertex, edge) => {
        // First check if vertex & edge(vertex 2) is present or not 🧐
        if (this.#data[vertex] && this.#data[edge]) {
            // Check for duplication
            if (!this.#data[vertex].includes(edge)) {                
                this.#data[vertex].push(edge);
                this.#data[edge].push(vertex);
            }
        } else {
            if (!this.data[vertex]) {
                this.addVertex(vertex);
            } else {
                this.addVertex(edge);
            }
            // Recursive call
            this.addEdge(vertex, edge);
        }
    }
}

const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

// console.log(myGraph.data)
myGraph.addEdge("A", "C")
myGraph.addEdge("C", "A")
myGraph.getGraphData();