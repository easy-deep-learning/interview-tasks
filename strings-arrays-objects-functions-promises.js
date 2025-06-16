// TASK
// Job offers management system
const jobOffers = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Texas, USA",
    salary: "$100000",
    skills: ["JavaScript", "React", "CSS"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    location: "London, UK",
    salary: "£80000",
    skills: ["JavaScript", "Node.js", "Express"],
  },
  {
    id: 3,
    title: "React Engineer",
    location: "Sidney, Australia",
    salary: "$90000",
    skills: ["JavaScript", "React", "Redux"],
  },
  {
    id: 4,
    title: "Next.js Developer",
    location: "Berlin, Germany",
    salary: "€110000",
    skills: ["JavaScript", "Next.js", "TypeScript"],
  },
  {
    id: 5,
    title: "Full Stack Engineer (TypeScript, AWS)",
    location: "Paris, France",
    salary: "$120000",
    skills: ["TypeScript", "AWS", "Node.js"],
  },
];


// Return an array of job titles that require React skills
function findReactJobs(jobs) {
  // Your code here
  return 'TODO'
}

console.log(findReactJobs(jobOffers))
// => ['Frontend Developer', 'React Engineer']



// TASK
// Get data for Job Offers list page: request ob Offers and User Profile

const api = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobOffers);
    }, 30);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId: 123,
        name: "John Doe",
        email: "example@example.com"
      });
    }, 50);
  })
];

// Fetch job offers and user profile data
async function fetchJobOffersAndUserProfile() {
  // Q: How to fetch data from both promises in parallel?
  // Q: What to do if one of the promises fails?
  // Q: What if we want to return both success and fail results in a single object?
  // Q: How to handle errors in async functions?
  return 'TODO'
}

// Example usage
// log the result of the function


// Q: How to get this data from a /job-offers endpoint? using fetch API
// Q: Explain REST principles and how they apply to this endpoint (CRUD operations, filtering, sorting, pagination).
// Q: What other interactions could be implemented with this endpoint (graphQL)?