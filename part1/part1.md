##Part 1A
1. values added: 20
2. final result: 20
3. values added: 20
4. This returns an error because the variable result is declared using 'let' so this means the visibility scope of the variable result is limited to the if statement block and cannot be accessed outside the block like 'var'.
5. Line 9 will not print due to an error caused in line 4 because result is a const variable and cannot be changed. 
6. Line 13 also will not print due to the error mentioned above. To add on, the scope of the variable is within the if block and has same scope as 'let' so it will not be able to access result.


##Part 1B
1. Line 12 will print out 3 because we are running through the for loop and the for loop breaks on the last iteration when i goes from 2 to 3 since 3 is not less than 3 so it breaks the for loop and i is equal to 3 and line 12 will print that out.
2. Line 13 will print out 150. This is because the final iteration of the for loop before breaking is when i is equal to 2 so when you plug these values into what discountedPrice is equal to then we get 300*(1-0.5) = 150. Also, the variable can be accessed out the for loop block since it uses the var declaration. 
3. Line 14 will print 150. This is because once you perform the finalprice calcuation you get 150 and finalprice is declared using var so it can be accessed outside the scope. so line 14 will be 150. 
4. The function will return a new array of [50,100,150]. This is because the function iterates through each element of the array given and calculates a new given discounted price with specified discount value and then finalizes that price and pushes it to the array that is created on line 3. Also, elements can all be accessed due to the var declaration. 
5. Line 12 will produce an error because i is declared using 'let' which means it can only stay in the scope of the for-loop block and since line 12 is outside that scope it will not be able to access it. 
6. Line 13 will also produce an error because discountedPrice is declared using 'let' and is within the scope of the for-loop so line 13 cannot access it since it is not within that scope, so it cannot access it. 
7. Line 14 will print out 150. This is because finalprice is declared outside the for-loop but inside the function using 'let' and since it is outside of the for-loop line 14 can access the value since line 14 is still within the function. 
8. This function will still return the array [50,100,150]. Even though it changed the declaration of variable discounted to 'let' declaration, it is declared inside the function discountPrices block outside the for loop block. So line 16 still has access to this variable since it is within the function. Same logic as earlier is applied to update the array.
9. Line 11 will have an error because i is declared with 'let' and is within the scope of the for loop so it cannont be accessed outside of said loop, so line 11 will not be able to access it. 
10. Line 12 will return 3 because it is taking the length of the array that is given to us. It is declared using 'const' so the value will not change and is declared within the same scope as line 12 which is all within the function but not inside the loop.
11. The function will still return the array [50,100,150]. As mentioned above in line 10, even though length is changed to 'const' declaration, it does not affect anything because the value is never changed. We are only pushing more elements into the array and const discounted is still holding the same array, it is that the array itself is just changing. So the discounted variable will not affect anything. 
