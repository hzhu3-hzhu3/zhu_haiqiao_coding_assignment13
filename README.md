# **UI Component Library with Code Quality Checks**

This project extends the UI component library from Assignment 12 by adding code quality checks and automated testing. Following the requirements, this project implements Husky pre-commit hooks and GitHub Actions CI/CD workflow to ensure all committed code passes Prettier, ESLint, and testing validations.

## Project Features

- Husky implementation for git pre-commit hooks
- lint-staged for managing code quality checks on staged files
- Prettier integration for code formatting
- ESLint configuration for code quality checks
- Jest for automated testing
- GitHub Actions for CI/CD workflow
- Docker containerization

## Setup Instructions

### Prerequisites

- Node.js (v16.x or higher)
- npm (v7.x or higher)
- Git
- Docker

### Development Setup

**1. Clone the repository:**

    git clone https://github.com/hzhu3-hzhu3/UI_Component_Library_HaiqiaoZ.git
    cd zhu_haiqiao_ui_garden_build_checks

**2. Install dependencies:**

    npm install

**3. Run development server:**

    npm start

_The application will run at http://localhost:3000_

**4. Run Storybook:**

    npm run storybook

_Storybook will run at http://localhost:6006_

## Code Quality Tools Testing

This project uses the following code quality tools:

### 1. Prettier Testing

You can manually run Prettier to check all files:

    npm run prettier

Or automatically fix formatting issues:

    npm run prettier:fix

**Testing Prettier Hook:** 1. Modify any file (e.g., src/App.tsx) adding some code that doesn't follow Prettier format (like extra spaces or indentation) 2. Stage the changes: `git add src/App.tsx` 3. Try to commit: `git commit -m "Testing Prettier hook"` 4. Observe Prettier automatically fixing the formatting and continuing with the commit process

### 2. ESLint Testing

Manually run ESLint checks:

    npm run lint Fix

ESLint issues:

    npm run lint:fix

**Testing ESLint Hook:**

- Create a test file with issues that ESLint should detect: `echo  "const unused = 'this is unused'; console.log('test');"  > src/test-eslint.js`
- Stage the file: `git add src/test-eslint.js`
- Try to commit: `git commit -m "Test ESLint hook"`
- If configured correctly, the hook should prevent the commit and display the unused variable error

### 3. Testing Hook

Manually run tests:
`npm  test`

**Testing Test Hook:**

1.  Modify any test file to make it fail (like an assertion in src/App.test.tsx)
2.  Stage the changes: `git add src/App.test.tsx`
3.  Try to commit: `git commit -m "Testing test hook"`
4.  If configured correctly, the hook should prevent the commit and display the test failure

### 4. Bypassing Hooks (Testing Purpose Only)

If you need to bypass hooks in certain situations (not recommended), you can use:
`git commit -m "Bypass hooks" --no-verify`

## CI/CD Workflow Testing

The project is configured with GitHub Actions to automatically run code quality checks on every push and pull request.

**Testing GitHub Actions CI/CD:**

1.  Ensure you have write access to the repository
2.  Push a problematic commit (using --no-verify to bypass local hooks)
3.  Visit the Actions tab in your GitHub repository
4.  Observe the workflow running and failing, providing the reasons for failure

## Docker Setup and Testing

As per assignment requirements, this project is configured with Docker and runs on port 8018.

**Building and Running Docker Container:**

1.  Build the Docker image:
    `docker build -t zhu_haiqiao_coding_assignment13 .`
2.  Run the Docker container:
    `docker run -p 8018:8018 --name zhu_haiqiao_coding_assignment13 zhu_haiqiao_coding_assignment13`
3.  Access the application: [http://localhost:8018](http://localhost:8018)
