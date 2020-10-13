// const { Account, interest } = require("./account.js");

// console.log("Hello Node");

// const checking = new Account(100);
// checking.deposit(40);

// console.log(checking.balance);


//console.log(module);

// const path = require("path");

// const pathObj = path.parse(__filename);

// console.log(pathObj);

// index.js file
const http = require("http");

// sample schools
schools = [
  {
    Name: "School of Medicine",
  },
  {
    Name: "Whiting School of Engineering",
  },
];

// sample terms
terms = [
  {
    Name: "Fall 2020",
  },
  {
    Name: "Summer 2020",
  },
  {
    Name: "Spring 2020",
  },
];

// sample courses
courses = [
  {
    OfferingName: "EN.601.226",
    SectionName: "01",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.226",
    SectionName: "02",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "01",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "02",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
];


const PORT = 5000;
const server = http.createServer(routes);

function routes(request, response) {
  if (request.url === "/") {
    response.write("Welcome to Courses API!");
  } else if (request.url === "/api/schools") {
    response.write(JSON.stringify(schools));
  } else if (request.url === "/api/terms" ) {
    response.write(JSON.stringify(terms));
  } else if (request.url === "/api/courses" ) {
    response.write(JSON.stringify(courses));
  }
  response.end();
}

server.listen(PORT);

console.log(`Server is listenning on port ${PORT}`);