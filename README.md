# Ng8App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Task Done 
2. Serve a single page at the root: `/`.
	* The page should be designed as per the accompanied design assets.
	* All page-components may be mocked (e.g. clicking on the CTAs does not need to perform any action).
3. Read data (server-side) to display on the page from the endpoints.
4. Add unit-test coverage as appropriate (potential test tools: karma, jasmine).
5. Ensure the web-application can be built, tested, and run.
  
## Docker

to build the project - 
- docker build .

to run the project on docker -
- docker run -p 8080:4200 [imageid] 
- navigate to `http://localhost:8080/`
  
to get imageid 
- docker images


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
