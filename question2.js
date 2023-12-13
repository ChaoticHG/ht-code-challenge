// outerLoop function is done by calculating the totalElement of the current array to determine whether to perform map, slice, reverse on the array to prevent possible error
// and return spread loop1, loop2, loop3, loop4 to the main function
function outerLoop(array) {
  let totalElement = array.reduce((sum, row) => sum + row.length, 0);
  let loop1 = [];
  let loop2 = [];
  let loop3 = [];
  let loop4 = [];
  if (totalElement > 1) {
    loop1 = array[0];
  } else {
    return array[0];
  }
  if (totalElement > 2) {
    loop2 = array.map((x) => x[x.length - 1]).slice(1);
  }

  if (totalElement > 3) {
    loop3 = array[array.length - 1].reverse().slice(1);
  }

  if (totalElement > 4) {
    loop4 = array.map((x) => x[0]).slice(1, -1);
  }
  return [...loop1, ...loop2, ...loop3, ...loop4];
}

// arrange function is used to run the outerLoop recursively to extract the element in clockwise manner
function arrange(array) {
  let totalElement = array.reduce((sum, row) => sum + row.length, 0);
  let extractedElement = 0;
  let arrangedArray = [];

  while (extractedElement !== totalElement) {
    arrangedArray = [...arrangedArray, ...outerLoop(array)];
    array = array.slice(1, -1).map((row) => row.slice(1, -1));
    extractedElement = arrangedArray.length;
  }

  console.log(...arrangedArray);
}

array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arrange(array);

array = [
  [1, 2, 3, 1],
  [4, 5, 6, 4],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
];
arrange(array);
