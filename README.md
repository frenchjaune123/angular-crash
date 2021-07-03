# Angular-Crash
A tutorial to practice using AngularJS, even though it will be deprecated by December 2021. :(
## Setup
Install [NodeJS](https://nodejs.org/en/download/).

Install npm globally:
```bash
npm install -g npm
```

Install angular globally:
```bash
npm i -g @angular/cli
```

Under "Environment Variables" --> "System Variables", add "@angular/cli", "npm", and "nodejs" to [paths](https://i.stack.imgur.com/9l6FI.png).

Run the command below with the folder with Angular data to launch a server on localhost:4200:
```bash
ng serve
```

## Remember!
Outer folder holds git data, inner folder holds Angular data!

You need the [right](https://unpkg.com/browse/@angular/core@12.1.1/package.json) version of Node, you hermit! (Under "engines").

I have edited the package.json and the angular.json files so that the project runs on Angular 11.x instead of 12.x. It seems Angular 12.x implemented a Strict Property Initialization compiler check. While I know how to workaround this property for primitives, until I can workaround the compiler check for classes, I think I will have to stick with Angular 11.x.
