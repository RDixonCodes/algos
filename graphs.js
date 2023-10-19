class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    //ADDING A VERTEX: Write a method called addVertex, which accepts a neame of a vertex
    //It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    //ADDING an EDGE: This function should accept two verices, wwe can call them vertex1 and vertex2
    //The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    //The function should find in the adjacency list the key of vertex and push vertex1 to the array

    addEdge(ver1, ver2){
        this.adjacencyList[ver1].push(ver2);
        this.adjacencyList[ver2].push(ver1);
    }
    //REMOVING EDGE: This function should accept two vertices, we'll call them vertex1 and vertex2
    //The function should reassign the key of vertex1 to be an array that does not contain vetex2
    //The function should reassign the key of vertex2 to be an array that does not contain vertex1

    removeEdge(ver1, ver2){
        this.adjacencyList[ver1] = this.adjacencyList[ver1].filter( vertex => vertex !== ver2);
        this.adjacencyList[ver2] = this.adjacencyList[ver2].filter( vertex => vertex !== ver1);
    }
    //REMOVING A VERTEX: This function should accept a vertex to remove
    //The function should loop as long as there are any other vertices in the adjacency list for the at vertex
    //Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the
    //adjacency list for the vertex
    //Delete the key in the adjacency list for that vertex
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();

g.addVertex("Tokyo");
g.addVertex("San Francisco");
g.addVertex("San Francisco");//duplicate test case
g.addVertex("Tampa");
g.addVertex("Seattle");

g.addEdge("San Francisco", "Tampa")
g.addEdge("Tokyo", "Tampa")
g.addEdge("Seattle", "San Francisco")

g.removeEdge("Tokyo", "Tampa")
// g.removeEdge("San Francisco", "Seattle")

g.removeVertex("Seattle");

console.log(g);