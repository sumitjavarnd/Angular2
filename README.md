# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Commit 2 - Added new component say servers using cli
* Open new terminal
* Run command ng generate componenet servers or n g c servers
** Above command will create servers.component.css, servers.component.html, servers.component.spec.ts, servers.component.ts
** It will also add ServersComponent entry in app.module.ts
* Replace content of servers.component.html with multiple <app-server> tags.
* And instead of using <app-server> in app.component.html, use <app-servers> tag.