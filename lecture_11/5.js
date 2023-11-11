

function getArraySum(array, isEmpty, a) {
    if (isEmpty && a >= 10) {
        console.log('Bos man');
    } else {
        console.log(array);
    }
}

getArraySum([1, 2, 3, 4, 5], false, 5);
getArraySum([1, 2, 3, 4, 5], true, 5);


