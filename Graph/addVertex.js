console.log("Adding vertexes in our Graph\n");

class Graph{
    constructor(){
        this.data = {};
    }

    // Add vertex
    addVertex = (vertex) => {
        // Make sure we do not override old vertex if present
        if(!this.data[vertex]){
            this.data[vertex] = [];
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

console.log(myGraph.data)