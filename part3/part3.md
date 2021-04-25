1. The bug is that the numbers being inputted are strings so the + sign with concatente the two strings, ie, if we do 7 + 3, we get 73, it is returning a variable of string type. 
2. To fix the bug, we can call the function parseInt() to convert the datatypes of num1 & num2 into ints instead of strings. So when we calculate result we get an integer value. Here is the screenshot: <img width="1081" alt="Fixed_Code" src="https://user-images.githubusercontent.com/62210140/115983886-d984db80-a558-11eb-830f-48fd5e28fa5b.png">
3. 
