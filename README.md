# sds-resource-mgt-system
The repository for SS4301 Project 3 - SDS Resource Management System

## Instructions - New from repo
To install dependencies (listed in package.json), run the lines below, no need to specify exact packages.
```
npm install
```
Install dev dependencies by including the --dev flag
```
npm install --dev
```
Run app in dev mode (auto compile scss & restart on each new save made):
```
npm run dev
```
## Note - Adding dependencies
If it's a dev-only dependency, i.e. not meant for use production, add the -D flag, e.g.:
```
npm install jest -D
```
### Info - dependencies (included in default installation)
- cookie-parser, debug, express, morgan comes with the default express app
- passport & passport-ad are required for authentication with azure active directory
- tedious is the nodejs implementation of TDS protocol, for interaction with MS (Azure) SQL server

### Info - dev tools (included in --dev installation)
- nodemon - restarts the app everything there's a change in the specified files (refer to the dev script in package.json)
- sass - pure JavaScript implementation of sass/scss, scss simplifies css coding by allowing nesting, use of mixins, etc

### Info - testing
- refer to TODO folder
