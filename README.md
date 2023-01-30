# Boilerplate React New
**Frontend template project containing latest dependencies, agreed-upon principles, patterns, and folder structure**

## Deployment link
This app is deployed on Vercel.

[Click here](https://boilerplate-react-new-opal.vercel.app/)

## Scripts
**dev** - Starts dev server at localhost:3000

**build** - Prepares production version

**preview** - Previews production build at localhost:4173

**lint** - Runs ESLint command statically analyzes the code to quickly find problems.

**test-run** - Runs the test script once.

**test** - Runs the test script in watch mode.

## Build dependencies
Use **pnpm** as a packaging system.

If you want to use npm, yarn, or anything else, remove the **pnpm-lock.yaml** file.

This project uses Vite as a build tool.

## Important links
**Antd default variables** - [Click here](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) to find the list of default theme variables

** Libraries and packages
This app is powered by modern libraries and packages that makes the development process simpler, and enables the focus on providing the solution rather than implementing core (or native) functionalities.

**antd** - Agreed-upon design framework.

**cuid** - Library that enables the creation of continuous unique idenfitiers. Currently used only for POC (can be removed once the project is forked).

**react-icons** - Library that contains svg icons from the most popular svg icon repositories (Feather, Font Awesome, IcoMoon, Material Design, Bootstrap, etc.)

**@reduxjs/toolkit** - This app manages the API calls and state management using Redux Toolkit and RTK Query.

**rxjs** - POC library that is currently used to mock the data that would be stored on the server. Can be used to increase the reactiveness of the application.

**tailwind** - CSS framework that makes writing custom css a lot easier.

Other dev devependencies are present to enable testing, correct typings, theme customization, etc.
