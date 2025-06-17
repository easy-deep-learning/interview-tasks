/**
### Task: Process Job Offers

Description:

You're given an array of job offers. Each job offer is an object like this (see the strings-arrays-objects-functions-promises.js file):
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

*/
type JobOfferType = {
  id: number;
  title: string;
  location: string;
  salary: string;
  skills: string[];
};

interface JobOffersORM {
  // TODO: add constructor that accepts an array of job offers
  summarizeJobOffers: () => string[];
}

const jobOffersData: JobOfferType[] = [];

class JobOffersORM implements JobOffersORM {
  // TODO: implement constructor that accepts an array of job offers
  // TODO: implement summarizeJobOffers method
}

const currentJobOffers = new JobOffersORM(jobOffersData);

const result = currentJobOffers.summarizeJobOffers();

/**
 * Write a class for processing job offers.
 * The class should implement the following:
 * - A constructor that accepts an array of job offers
 * - A method `summarizeJobOffers()` that returns an array of strings.
 *   - String example: "Job Offer #1: Full Stack Engineer in London, UK, £80000, skills: JavaScript, Node.js, Express"
 * 
const referenceResult = [
  "Job Offer #1: Full Stack Engineer in London, UK, £80000, skills: JavaScript, Node.js, Express",
  "Job Offer #2: Full Stack Engineer in London, UK, £80000, skills: JavaScript, Node.js, Express",
];

 * 
 * 
 * - The class should handle any errors gracefully, such as invalid order data (missing fields, incorrect types, etc. - how can you validate it).
 */
