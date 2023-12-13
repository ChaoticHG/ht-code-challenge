# HT Group code challenges

## **Question 1**

1. Description of the problem and solution

   Given a number, write a function that returns the next bigger number using the same digits.

   The input number is converted into string and then split into array in number type.

   The digit array is then sorted in ascending to make the combination larger than the input numbers starting from right to left with increasing range example last 2 digit and increasing by 1 until the max digit length.

2. Reasoning of solution

   The conversion of the input type into string is to ensure that the input is iterable as Array.from is used to convert all element inside the string into numeric form.

   The slice and sort is used to ensure that the combination is changed as shown in the example from right to left instead of sorting the whole digit in descending.

   The slice sorted digit is then combined with the rest and form a combination and using if else statement to determine whether the digit is larger than the input number or not.

3. Alternatives solution and possible enhancement

   Edge case testing that are not included might need to be explored.

   Proper comment to explain how the function works to enable reader to understand the underlying logic.

## **Question 2**

1. Description of the problem and solution

   Given an n x n array, write a function that returns the array elements arranged from outermost elements to the middle element, traveling clockwise.

   The outerLoop function is used recursively by arrange function to run based on the totalElement size of the input array. The final array output is created by extracting array in a outer shell peeling style in a clockwise manner.

2. Reasoning of solution

   The way of how the element is arrange in a clockwise manner can be done by looping 4 different position top > right > bottom > left from a different direction thus outerloop function is used to determine the arrangement using different combination of map, reverse, slice to obtain the array element.

   The outerLoop is used recursively as there might be more than 3 rows or columns thus the arrange is done by removing the outer layer of the 2d array and then outerLoop again to get the rest of the element in clockwise manner.

   The condition for creating loop1,loop2,loop3,loop4 are using if else based on total element so that to avoid undefined error when there is no element in it for the spread operator to work as function.

3. Alternatives solution and possible enhancement

   There are some methods possible such as index based traversing of the matrix, using pop push of the element instead of slicing and reverse to reduce the time complexities and space efficiency without needed to store each array.
