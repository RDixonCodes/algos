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

    //The function should accept a starting node
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
            //If any of those values have not been visited, recursively invoke the helper function with that vertex
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
    }
    //The function should accept a starting node
    dfs_iterative(start) {
    //Create a stack to help us keep track of vertices(use a list/array)
    const   stack = [start]; //initialize variable
    //Create a list to store the end result, to be returned at the very end
    const result = [];
    //Create an object to store visited vertices
    const visited = {}
    let currentVertex;
    //add the starting vertex to the stack, and mark it visited
        visited[start] = true;
    //While the stack has somethibg in it:
    //Pop the next vertex from the stack
    while(stack.length){

        console.log(stack);

        currentVertex = stack.pop();
        result.push(currentVertex);
        //If that vertex hasn't been visited yet:
        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                //Mark it as visited
                visited[neighbor] = true;
                //Push all of its neighbors into the stack
                stack.push(neighbor);
            }
        })
    }
    //Add it to the result list
    //Return the result array
    return result;
    }
    //******BREADTH FIRST SEARCH******/
    //This function should accept a starting vertex
    BFS(start) {
    //Create a queue(you can use an array) and place the starting vertex in it
        const queue = [start];
        //Create an array to store the nodes visited
        const result = []
        //Create an object to store nodes visited
        const visited = {};
        let currentVertex;
        //Mark the starting vertex as visited
        visited[start] = true;
        //Loop as long as there is anything in the queue
        while(queue.length){
        // Remove the first vertex from the queue and push it into the array that stores nodes visited
            currentVertex = queue.shift();
            result.push(currentVertex);
            //Loop over each vertex in the adjancency list for the vertex you are visiting
            //.slice().reverse() would switch the visit order of neighbors(i.e. C-B instead of B-C)
            this.adjacencyList[currentVertex].forEach(neighbor => {
            //If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vetex
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });

        }
        //Once you have finished looping, return the array of visited nodes
        return result;
    }
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
// console.log(g.dfs_recursive("A"))
// console.log(g.dfs_iterative("A"))
console.log(g.BFS("A"))