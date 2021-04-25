1. The bug is that the numbers being inputted are strings so the + sign with concatente the two strings, ie, if we do 7 + 3, we get 73, it is returning a variable of string type. 
2. To fix the bug, we can call the function parseInt() to convert the datatypes of num1 & num2 into ints instead of strings. So when we calculate result we get an integer value. Here is the screenshot: <img width="1081" alt="Fixed_Code" src="https://user-images.githubusercontent.com/62210140/115983886-d984db80-a558-11eb-830f-48fd5e28fa5b.png">
3. The name of the new json file is citylots.json
4. The file that intiailize the json to download was part2.js
5. The file size is 11.7 MB.
6. It took 13.15 seconds to download.
7. The user agent is as follows: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. It came from the Apache server.
9. The file was last modifed Tue, 26 Jan 2021 22:14:13 GMT.
10. The content type is application/json
11. The method that was inside the intializing file that made the request was fetchData in part2.js:2 
