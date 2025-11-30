# Game Hub - Video Game Discovery Platform

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)

A responsive, high-performance web application for browsing video game data, engineered with React 18 and TypeScript.

## Project Overview

Game Hub is a discovery dashboard that allows users to search, filter, and sort through a massive database of video games. The project focuses on **type safety**, **component modularity**, and **efficient data fetching**.

It consumes the [RAWG Video Games API](https://rawg.io/apidocs) to serve real-time data about games, platforms, and genres.

### Key Features

**Advanced Filtering:** Filter games by Genre (Action, RPG, etc.) and Platform (PC, PlayStation, Xbox).
**Dynamic Sorting:** Sort results by relevance, date added, name, release date, metapower, or average rating.
**Search Functionality:** Real-time search query handling
**Dark/Light Mode:** Fully responsive theme switching using Chakra UI.
**Responsive Grid:** Optimized layout for mobile, tablet, and desktop viewports.
**Skeleton Loading:** Improved UX with skeleton screens during data fetching states.

## Tech Stack

**Frontend Framework:** React 18
**Build Tool:** Vite (for fast HMR and optimized building)
**Language:** TypeScript (Strict Mode enabled for robust type safety)
**Styling:** Chakra UI & Emotion
**HTTP Client:** Axios
**Icons:** React Icons

## Highlights

This project was built to demonstrate proficiency in modern frontend architecture:

1.  **Strict TypeScript Integration:**
    * Utilized Interfaces for API responses (`Game`, `Platform`, `Genre`) to prevent runtime errors.
    * Ensured strict prop typing for all reusable components.

2.  **Custom Hooks for Logic Separation:**
    * Abstracted API calls into a generic `useData` hook and specific `useGames`/`useGenres` hooks to separate UI from business logic.

3.  **Performance Optimization:**
    * Implemented efficient state management to handle complex filter queries without unnecessary re-renders.

## How to Run Locally

These steps to set up the project locally.

**git clone [https://github.com/your-username/game-hub-discovery.git](https://github.com/your-username/game-hub-discovery.git)
**cd game-hub-discovery
