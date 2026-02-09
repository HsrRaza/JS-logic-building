

function divideArr(arr, l, r) {
    if (l < r) {
        let m = Math.floor((l + r) / 2)

        divideArr(arr, l, m);
        divideArr(arr, m + 1, r)
        merge(arr, l, m, r)
    }
}

function merge(arr, l, m, r) {
    let s1 = m - l + 1;
    let s2 = r - m;        // (m+1) + 1;  -> r-m 

    let leftArr = [0] * s1;
    let rightArr = [0] * s2;

    for (const i of s1) {
        leftArr[i] = arr[l + 1];
    }

    for (const j of s2) {
        rightArr[j] = arr[m + 1 + j]
    }

    i = j = 0;
    k = l


    while (i < s1 && j < s2) {
        if (leftArr[i] < rightArr[j]) {
            arr[k] = leftArr[i]
            i++
            k++
        } else {
            arr[k] = rightArr[j]
            j++
            k++
        }
    }

    while (i < s1) {
        arr[k] = leftArr[i]
        i++
        k++
    }
}
