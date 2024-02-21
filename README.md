# Ecommerce Project

This is a project for building an Ecommerce application using hexagonal architecture. It utilizes the following technologies:

- Sequelize
- Postgres
- Node.js
- Express
- Zod
- TypeScript
- SWC
- Commitlint
- CZ
- ESLint Standard

## Environment Variables

Make sure to set the following environment variables:

- `PORT`: The port number for the server (e.g., 4000).
- `DB_NAME`: The name of the database (e.g., ecommerce).
- `DB_USERNAME`: The username for the database (e.g., postgres).
- `DB_PASSWORD`: The password for the database (e.g., postgres).
- `DB_HOST`: The host address for the database (e.g., localhost).
- `DB_PORT`: The port number for the database (e.g., 5432).
- `NODE_ENV`: The environment mode (e.g., development).
- `SECRET_KEY`: The secret key for encryption (e.g., 63&%3d656$046164e!6f9f59_a2bae3at7giubv).

## Scripts

The project includes the following scripts:

- `alterdb`: Runs the Sequelize migration script to alter the database structure.
- `dev`: Starts the development server using Nodemon.
- `build`: Transpiles the source code using SWC and outputs it to the `dist` directory.
- `test`: Runs the test suite using Jest.
- `test:cov`: Runs the test suite and generates a coverage report.
- `prepare`: Sets up Husky for pre-commit hooks.
- `lint`: Lints the TypeScript files using ESLint.
- `lint:fix`: Lints the TypeScript files and automatically fixes any fixable issues.
- `release`: Generates a standard version and pushes the changes with tags to the remote repository.
- `commit`: Runs the Commitizen CLI for creating standardized commit messages.
