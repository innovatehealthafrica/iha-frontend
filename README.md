# Innovate Health Africa Web App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

[folder structure for the project](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Flearn-folder-structure.png&w=3840&q=75&dpl=dpl_7Am6V8nToLz8EEokD8P1frn9vUpW)

- `/app/lib`: Contains functions used in your application, such as reusable utility functions and data fetching functions. A file containing server action functions can be here too.
- `/app/ui`: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you. Each page can have its own folder for page specific components here too e.g. `/app/ui/landing`
- `/public`: Contains all the static assets for your application, such as images.
- `/scripts`: Contains a seeding script that you'll use to populate your database and perform other critical functions.

## Contribution Guide

Thank you for your interest in contributing to the **Innovate Health Africa Web App**! We welcome contributions from everyone, whether you're a beginner or an experienced developer. To help you get started, here’s a step-by-step guide on how to contribute to the project.

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/innovatehealthafrica/iha-frontend.git
cd iha-frontend
```

### Step 2: Create a New Branch

Before you start working on any changes, checkout the develop branch and create a new branch for your work. This keeps your changes separate and organized while ensuring they are built off the latest version of the development code.

```bash
git checkout develop
```

```bash
git pull origin develop
```

```bash
git checkout -b my-feature-branch
```

Name the branch something descriptive based on the feature or fix you’re working on. For example:
• If you’re fixing a bug in the user interface, name the branch `fix-ui-bug`.
• If you’re working on the about page, name the branch `feat-about-page`.

### Step 3: Make Your Changes

Now, you can start working on your feature or bug fix. You can edit files, add new ones, and make whatever changes are necessary.

### Step 4: Test Your Changes

Once you’re done, it’s important to test your changes.

 1. Run the development server to see your changes in action:

npm run dev

 1. Open `http://localhost:3000` in your browser and test your changes to make sure everything works as expected.

### Step 5: Commit Your Changes

Once you’re happy with your changes, commit them to your branch. Write a clear commit message describing what you changed.

```bash
git add .
git commit -m "Add feature or fix description"
```

**You can add more commits as necessary as you work.**

> **Note:** Don’t wait until the entire task is completed to push your work. After every meaningful commit, follow **Step 6** and push your changes to the remote repository. This ensures your progress is saved and can be easily reviewed.

### Step 6: Push Your Changes

After committing your changes, push them to online repository.

```bash
git push origin my-feature-branch
```

### Step 7: Create a Pull Request (PR)

1. Go to the main repository on GitHub.
2. Click on the Pull Requests tab.
3. Click the New Pull Request button.
4. Select the base branch (usually `main`) and compare it with your branch (the one you just worked on).
5. Write a detailed description of your changes, explaining what you added, fixed, or improved, and why these changes are important.
6. Click Create Pull Request to submit it for review.

### Step 8: Code Review and Feedback

Once you submit your PR, project maintainers will review your changes. They may provide feedback, suggest improvements, or request changes. Please be open to this feedback and update your PR as needed.

### Step 9: Merge

Once your PR is approved, it will be merged into the main codebase. Congratulations, you’ve contributed to the project!

## Important Notes

 • **Follow the coding style:** We aim for clean, readable code. Be sure to follow the existing style and conventions used throughout the project.
 • **Keep PRs small:** Try to keep your PRs focused on a single feature or bug fix to make the review process easier.
 • **Respect existing functionality:** If you’re adding new features, try not to break existing ones. Always check that everything works properly after your changes.
 • **Write tests:** If you’re adding new features, please write tests to ensure your changes work as expected. **(You can ignore this for now)**

Thank you again for contributing! We appreciate your help in making this project better. 🙌