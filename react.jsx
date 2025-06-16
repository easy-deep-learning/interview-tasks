// Create a Component for JobOffers List.
// use https://example/api.com/offers as the REST API endpoint
// It returns a JSON array of job offers like this:
// [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     location: "Texas, USA",
//     salary: "$100000",
//     skills: ["JavaScript", "React", "CSS"],
//   },
//   {
//     id: 2,
//     title: "Full Stack Engineer",
//     location: "London, UK",
//     salary: "£80000",
//     skills: ["JavaScript", "Node.js", "Express"],
//   },
//   {
//     id: 3,
//     title: "React Engineer",
//     location: "Sidney, Australia",
//     salary: "$90000",
//     skills: ["JavaScript", "React", "Redux"],
//   },
//   {
//     id: 4,
//     title: "Next.js Developer",
//     location: "Berlin, Germany",
//     salary: "€110000",
//     skills: ["JavaScript", "Next.js", "TypeScript"],
//   },
//   {
//     id: 5,
//     title: "Full Stack Engineer (TypeScript, AWS)",
//     location: "Paris, France",
//     salary: "$120000",
//     skills: ["TypeScript", "AWS", "Node.js"],
//   },
// ]
// and fetch the data using useEffect.
// Display the data in an ordered list format.
// Ordered List contains items with id, name, and description.
// If no orders are found, display "No orders found" and minimize the client size. (lazy loading)
// Use React functional components and hooks.

import React, { useEffect, useState } from 'react';
