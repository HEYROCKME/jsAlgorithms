const transposeMatrix = (array) => {
    //let [row] = array
    // return row.map((value, column) => array.map(row => row[column]))

    return array[0].map((_, index ) => array.map(value => value[index]))

    // map over fist idnex of array, get idexes of that nested array
    // in callback: map over original array- set each value in then nested arrays to index 
}


console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))
 // [[1,1,1],[2,2,2],[3,3,3]]