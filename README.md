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
* Run command ng generate component servers or n g c servers
* Above command will create servers.component.css, servers.component.html, servers.component.spec.ts, servers.component.ts
* It will also add ServersComponent entry in app.module.ts
* Replace content of servers.component.html with multiple app-server tags.
* And instead of using app-server in app.component.html, use app-servers tag.

# Commit 3 - Instead of using external template i.e. html file, we can also provide inline template
* Open servers.component.ts
* change templateUrl attribute to template for providing inline template
* If using single quote then you cannot wrap lines in template value. But if you want to wrap value use `

# Commit 4 - Added bootstrap classes like container, row in app.component.html
* Open app.component.css
* specify color to h3 like dark blue

# Commit 4.1  - Providing inline style
* Open app.component.ts
* change styleUrls attribute to style and add h3 color style to dodgerblue.

# Commit 5 - Fully understanding the component selector
* Open servers.component.ts
* Change selector value to [app-servers] which is basically an attribute selector
* Now open app.component.html
* Add new div like <div app-servers></div> to make code work. Because now we have specified attribute selector so <app-servers> i.e. element selector won't work
* Similarly you can also use class selecor like adding new div <div class="app-servers"></div> and selector value to '.app-servers'
* In Angular you cannot use id selector and sudo selectors.

# Commit - 6 Databinding
* String Interpolation - Output data from typescript code to template(html) ({{data}})
- Open server.component.html
- Adding paragraph {{'Server'}} with ID {{serverId}} is {{getServerStatus()}}
- Open server.component.ts
- Adding serverId and serverStatus attribute in ServerComponent class
- Created getServerStatus method to return server status attribute
* Restrictions with String Interpolation
- You can't write multiline expressions, blockline expressions so you cannot write an if, for control structures.
You could use a ternary expression though.
- String interpolation has to resolve to a string, so, anything which ca be converted into string works fine.

* Property Binding - For example say when user clicks a button in template we may want to trigger something in our typescript code. ([propery]="data")
- Open servers.component.html
- Adding button Add Server with bootstrap class btn and btn-primary and disabled attribute
- Open servers.components.ts
- Add boolean attribute allowNewServer and set value to false in class ServersComponent
- Add constructor and set timeout of 2ms in constructor in which setting allowNewServer value  to true.
- Open servers.component.html
- Surround disabled attribute with square brackets like [disabled]="!allowNewServer"

* Two way binding - ([ngModel]="data")

# Commit - Event Binding
* Open servers.component.ts
* Add a new attribute serverCreationStatus and initialize it with value like No Server was created.
* Now add a new method onCreateServer and in this method write code to set serverCreationStatus value to Server was created.
* Open servers.component.html
* Add a new paragraph with String Interpolation value of serverCreationStatus
* On Add Server button, add a new angular event binding (click)="onCreateServer" 
