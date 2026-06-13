const arr  = [3, 6, 9, 2];

const filterArr = (isDeleted, arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isDeleted(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

const morethenFive = (num) => num > 5;

console.log(filterArr(morethenFive, arr));