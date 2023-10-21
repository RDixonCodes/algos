//*********DEPTH FIRST SEARCH(Recursive)******/

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
    //DEPTH FIRST TRAVERSAL*****

    //The function should accep a starting node
    dfs_recursive(start) {
    //Create a list to store the end result, to be returned at the very end
    const result = [];
    //Create an object to store visited vertices
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    //Create a helper function which accepts a vertex
    (function dfs(vertex){
        //The helper function should return early if the vertex is empty
        if(!vertex) return null;
    //The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
        visited[vertex] = true;
        result.push(vertex);
        //Loop over all of the values in the adjacencyList for that vertex
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start)
    return result;
    }
    
    //If any of those values have not been visited, recursively invoke the helper function with that vertex
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g)
console.log(g.dfs_recursive("A"))