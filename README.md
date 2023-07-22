# CRUD App 

This is a CRUD (Create, Read, Update, Delete) application built with Angular, Material UI, and JSON Server. The app allows users to perform basic CRUD operations on a collection of data stored in a JSON server.

## Overview

- [Angular:](https://angular.io/) Angular is an open-source front-end web application framework by Google. It enables developers to build dynamic, single-page web apps with a component-based architecture, two-way data binding, and dependency injection.

- [Angular Material:](https://material.angular.io/) Angular Material is a UI component library for Angular apps. Developed by Google, it follows Material Design guidelines, providing pre-built and customizable UI elements for creating modern and responsive interfaces.

- [JSON Server:](https://www.npmjs.com/package/json-server) JSON Server is a lightweight Node.js application that creates a mock RESTful API server. It's ideal for front-end developers to prototype and test applications before connecting to a real backend.


## Angular

### Step 1: Install Angular CLI

First, you need to have Node.js installed on your system. If you don't have Node.js, you can download and install it from the official website: [https://nodejs.org](https://nodejs.org)

Once you have Node.js installed, open your terminal or command prompt and run the following command to install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

### Step 2: Check Angular version
To verify that Angular CLI was installed successfully, run the following command to check the version:

```bash
ng version
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

### Step 3: Create a new Angular app
Now, let's create a new Angular app using the Angular CLI. In your terminal, run the following command:

```bash
ng new ng-crud-app
```

The Angular CLI will prompt you to choose some options for the project. For this CRUD app, we will select the following options:

- Would you like to add Angular routing? (y/n): Type y and press Enter to include Angular routing in your app. Routing is essential for navigation between different components.

- Which stylesheet format would you like to use? Choose SCSS and press Enter to use SCSS (Sass) as the default styling language for your app.

The Angular CLI will now create a new project folder named ng-crud-app with the necessary files and folder structure.

### Step 4: Start the app
Now that we have our Angular app set up, we can run it locally using the Angular CLI. Run Run `cd ng-crud-app` to navigate to the project folder and start the app with the following command:

```bash
ng serve -o
```

The ng serve command compiles your app and launches a development server. The -o flag opens the app in your default web browser automatically. 

You should now see your Angular CRUD app running at `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Step 5: Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```bash
ng g c component-name 
```

### Step 6: Testing
#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.







