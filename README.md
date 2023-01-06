# JS Blog

This is a repository for blog page


## Init project

To initialize the project run

```bash
  yarn init-project
```

It will install all dev dependencies, create basic set of files and directories
## Build

To build a project run 

```bash
  yarn build
```

This command will compile `sass` to `css`, parse `css` and add vendor prefixes when needed. Also this command will validate HTML markup. 
## Build `DEV`

To build a project run 

```bash
  yarn build-dev
```

This command will compile `sass` to `css`, add vendor prefixes when needed and it will create source map for CSS 
## Watch

To work on a project on local environment run command

```bash
  yarn watch
```
This command will perform actions same as for build, build dev and test and additionaly it will open your project on localhost and it will refresh it automatically after changes made to the project
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

This task validates HTML markup