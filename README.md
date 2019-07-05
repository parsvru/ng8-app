# ConichiNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Task Done 

1. Create a new Angular Web Application served via a NGINX / Node Server. 
2. Serve a single page at the root: `/`.
	* The page should be designed as per the accompanied design assets.
	* Extract static assets into your app as needed.
	* All page-components may be mocked (e.g. clicking on the CTAs does not need to perform any action).
3. Read data (server-side) to display on the page from the following endpoints:
	* https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json
	* https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json
3. Add unit-test coverage as appropriate (potential test tools: karma, jasmine).
4. Add a sample ui-test coverage (potential test tool: protractor)
5. Ensure the web-application can be built, tested, and run.
6. Add a README to: describe the application, the pre-requisites, how to run it, additional notes, etc.
7. Package the app and share a download link to the source-code.
	* WARNING: DO NOT INCLUDE THE BUILD/OUTPUT. We expect to be able to build, test, and run it ourselves.
	* Please do not make the source-code public.
	* BONUS: dockerize your application (i.e. include a Dockerfile, docker-compose.yml, and relevant README instructions)
  
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
