// Create UI for JobOffers List.
// use https://example/api.com/offers as the REST API endpoint
// It returns a JSON array of job offers like
const jobOffers = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Texas, USA",
    salary: "$100000",
    skills: ["JavaScript", "React", "CSS"],
  },
]

// and fetch the data using useEffect.
// Display the data in an ordered list format.
// Ordered List contains items with id, title, location, salary, and skills.
// If no job offers are found, display "No job offers found" and minimize the client size. (lazy loading)
// Use React functional components and hooks.
// Split the component into smaller components.

import React, { useEffect, useState, useLayoutEffect } from 'react';


const JobOfferList = () => {
  return (
    <div>
      TODO
    </div>
  );
}


const JobOfferListItem = () => {
  return (
    <div>
      TODO
      User can check an item
      User can add a comment to an item (use <input)
    </div>
  );
}