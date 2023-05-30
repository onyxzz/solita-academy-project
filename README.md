# Solita Dev Academy Project 2023

This is a web application developed as part of the Solita Exercise. The application fetches data from a backend service and provides various functionalities to view and analyze the data.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Station View](#station-view)
  - [Journey View](#journey-view)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Authors](#authors)

## DEMO

Live Demo: https://solita-academy-project-2023.vercel.app/

## Installation

To run the project locally, follow the instructions below:

1. Clone the repository:

```bash
    git clone https://github.com/onyxzz/solita-academy-project
```

2. Install the necessary dependencies for client and server directory:

```bash
    npm install
```

3. Set up MongoDB connection environment variable in `solita-academy-project\server\.env`

4. Import the provided CSV files into the database

5. Run the backend server:

```bash
    npm start
```

6. Run the application:

```bash
    npm run dev
```

## Features

The application should fulfill the following functional requirements:

### Station View

- Create a new station.
- Provide a list of all the stations by pages.
- Search stations by name.

### Journey View

- Show detailed information about a single station.

## Tech Stack

**Client:** React, Vite, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB

## License

https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902

## Authors

- [@onyxzz](https://www.github.com/onyxzz)
