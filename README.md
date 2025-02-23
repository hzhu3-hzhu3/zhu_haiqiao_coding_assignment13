# zhu_haiqiao_ui_garden: A React + Storybook UI Component Library

This repository contains a **UI Component Library** built with **React (TypeScript)**, **Storybook**, and **Styled Components**. The application is containerized with **Docker** and can be accessed on **localhost:8083** in production mode.

## Overview

- **Goal**: Provide reusable UI components (Button, Label, Text, Table, etc.) with default/disabled states, responsive design, and test coverage.
- **Key Features**:
  - **React + TypeScript** project initialized via Create React App.
  - **Storybook** for component exploration and property controls.
  - **Styled Components** for CSS-in-JS styling.
  - **Docker** for containerizing the production build.
  - **Jest + React Testing Library** for unit tests (each component has at least two tests).

## Components Included

- **Button**
- **Label**
- **Text**
- **Table** (sub-components: TableHeader, TableRow, TableCell, TableFooter)
- **Dropdown**
- **RadioButton**
- **Img**
- **HeroImage**
- **Card**

Each component folder contains:
1. `ComponentName.tsx` – The main component
2. `ComponentName.stories.tsx` – Storybook stories
3. `ComponentName.types.tsx` – TypeScript interface(s)
4. `ComponentName.test.tsx` (or `.test.tsx`) – Unit tests
5. `index.ts` – Aggregated export

## Getting Started

### 1. Installation

1. **Clone this repository**:
   ```bash
   git clone <your-repo-url>
   cd zhu_haiqiao_ui_garden

2. **Clone this repository**:
   ```bash
   npm install

### 2. Local Development
1. **Start Development Server (CRA)**
   ```bash
   npm start

2. **Run Storybook**
   ```bash
   npm run storybook

### 3. Testing
We use Jest and React Testing Library. Each component has at least two tests:

Visibility: Ensures the component is rendered and visible.
Disabled Style: Checks background color change or pointer style when disabled is set.
To run the tests:
   ```bash
   npm test


### 4. Testing


