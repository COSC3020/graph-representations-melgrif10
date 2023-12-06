function convertToAdjList(adjMatrix) {
    if(adjMatrix.length==0){    //If the input is an empty array
        return [];              //Return an empty array
    }
    var list=[];                //Initialize the adjacency list as an empty array
    for(let i=0; i<adjMatrix.length; i++){  //Iterate over each row of the matrix
        var edges=[];           //Initialize the amount of edges as an empty array
        for(let j=0; j<adjMatrix.length; j++){  //Iterate over each column of the matrix
            if(adjMatrix[i][j]==1){     //Check to see if there is an edge between vertex i and j
                edges.push(j);      //If there is, add j to the list of edges for i
            }
        }
        list.push(edges);           //Add the list of edges for vertex i to the adjacency list 
    }
    return list;                //Return the adjacency list               
}
