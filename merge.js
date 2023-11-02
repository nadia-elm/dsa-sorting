function merge(arr1, arr2) {
  let mergedArr = [];
  let current;
  let i = 0;
  let j = 0;
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] <= arr2[j]) {
      current = arr1[i];
      mergedArr.push(current);
      i++;
    } else {
      current = arr2[j];
      j++;
      mergedArr.push(current);
    }
  }

  if (j <= arr2.length - 1) {
    mergedArr.push(...arr2.slice(j));
  }
  if (i <= arr1.length - 1) {
    mergedArr.push(...arr1.slice(i));
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  console.log(arr);
  let midIdx = Math.floor((arr.length - 1) / 2);
  let leftArr = mergeSort(arr.slice(0, midIdx + 1));
  let rightArr = mergeSort(arr.slice(midIdx + 1));

  return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort };
