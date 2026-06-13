const arr  = [3, 6, 9, 2];

const filterArr = (isDeleted, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (isDeleted(arr[i])) {
            arr.splice(i, 1);
            i--;
           
        }
    }
}

const morethenFive = (num) => num > 5;

filterArr(morethenFive, arr);
