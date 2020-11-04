## Setup
install yarn or npm globally 

run `yarn` or `npm install`

## Challenge
Write some code to implement the function `createMenuData`

Use the test runner `jest` to run the `gradTest.test.js` 

Commit your changes and push them up to your own git repositry!
Once done, link us the URL of your solution

## Tips

The data set in the test ends at parent 4, but imagine any number of parents and children could be passed to this function.

When the test passes clean up your code.
It's worth spending time formatting and simplifing thins.
It's more important that humans can read your code than computers.
Software tools like `eslint` do some amazing things 🕶

## My approach on the tech test

I decided to use a .map to iterate over each element of the array.

The data was an array of strings with the format "parent1/parent1child", so I split each string at the forward slash.

If an object with that 'title' key does not exist in the menuData array, then push an object into menuData with the title and data of this element.

If an object in the menuData array already has this title, then push the data for that element into the corresponding data array of the object.

The test is passing.

![screenshot](./images/screenshot_test_passing.png) 
