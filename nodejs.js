
// Task 3
// Create a nodejs server for job offers
// see the strings-arrays-objects-functions-promises.js file for the job offers data
const jobOffers = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Texas, USA",
    salary: "100000",
    skills: ["TypeScript", "React", "CSS"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    location: "London, UK",
    salary: "80000",
    skills: ["JavaScript", "Node.js", "Express"],
  },
  {
    id: 3,
    title: "React Engineer",
    location: "Sidney, Australia",
    salary: "90000",
    skills: ["JavaScript", "React", "Redux"],
  },
  {
    id: 4,
    title: "Next.js Developer",
    location: "Berlin, Germany",
    salary: "110000",
    skills: ["JavaScript", "Next.js", "TypeScript"],
  },
  {
    id: 5,
    title: "Full Stack Engineer (TypeScript, AWS)",
    location: "Paris, France",
    salary: "120000",
    skills: ["TypeScript", "AWS", "Node.js"],
  },
];

const createApi = (data1) => [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data1);
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

// /job-offers endpoint to return the job offers

// const express = require('express');
import express from 'express';


// How do you prevent access to job offer creation?

// How do you create a SQL base table for job offers?

// How do you request the job offers from SQL database?

// How do you create a mongoDB base table for job offers?
// How do you request the job offers from mongoDB database?