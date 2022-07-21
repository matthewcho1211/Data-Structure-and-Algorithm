let arr = [5,3,2,4,1];

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let min_idx = i;
        for(let j = i; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                min_idx = j + 1;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort(arr));