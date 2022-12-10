console.log("Graph Data-Structures 🔥\n");

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

    // Remove Edge(Connection)
    removeEdge = (vertex,edge) => {
        // Check whether both vertexes are present or not 🧐
        if(this.#data[vertex] && this.#data[edge]){
            // Update 1st 🥇 vertex
            this.#data[vertex] = this.#data[vertex].filter((data)=> data != edge);
            // Update 2nd 🥈 Vertex
            this.#data[edge] = this.#data[edge].filter((data)=> data != vertex);
        }
    }
}

const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

// console.log(myGraph.data)
myGraph.addEdge("A", "C");
myGraph.addEdge("C", "A");
myGraph.addEdge("A", "D");

console.log("Before removing...");
myGraph.getGraphData();
myGraph.removeEdge("A","D");
console.log("After removing...");
myGraph.getGraphData();