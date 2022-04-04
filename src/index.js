function partIt(arr, low, high) {
  let i = low,
    pivot = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      // console.log("in", i, j);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
    // console.log("in",i, j);
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let res = partIt(arr, low, high);
    quickSort(arr, low, res - 1);
    quickSort(arr, res + 1, high);
  }
  console.log("==final", arr);
}

quickSort([7, 2], 0, 1);

// partIt([7, 6, 5, 4, 3, 2], 0, 5);
