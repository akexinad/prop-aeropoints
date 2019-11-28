# prop-aeropoints challenge

## Setup

If you don't have node installed on you machine go to:

https://nodejs.org/en/

and install the latest version.

Once installed, go to your terminal and run `node -v` to check if it has installed correctly. You should see the version number.

Now in your terminal, go to the root of the app's directory and run `npm run start`.



## What could be done better

Basically all of it. At the start I misinterpreted the challenge so I lost a lot of time at the beginning.

To begin with, my code is not defensive enough and does not have error handling. A lot refactoring will have to happen.

One major weakness I found in my code is my ability to handle/work with dates. I've never worked with dates this much. Now I know that it is something I really need to work on.

It needs unit tests to check for types passed into arguments as well as the rigidity of the conditionals for discerning which hour blocks must be queried.

A lot of time was also spent understanding the basic concepts of a such a novel field.