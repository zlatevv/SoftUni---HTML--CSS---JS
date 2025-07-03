function matrixPrinter(size){
    let matrix = []
    for (let i = 0; i < size; i++){
        matrix[i] = []
        for (let j = 0; j < size; j++){
            matrix[i][j] = size
        }
    }
    for (let list of matrix){
        console.log(list.join(" "));
        
    }
}