# sds-resource-mgt-system
The repository for SS4301 Project 3 - SDS Resource Management System

## Important

Tote that the database credentials are not included in the commit;
Thus fetching items & category data will not work immediately out of the box.

## Instructions - New from repo

To run the project locally, need to run these commands once:
- reason being that I have set git to ignore the dist folder i.e. where the results of compilation are kept.
  - the folder contents need to be created manually

```console
npm install --include=dev
npm run build
```

WARNING: The node_modules files resulting from the installation are around 600Mb <br>
<br>

Then start:

```
npm run start
```

To run the app in dev mode (restart on each new save made):
- use run dev instead of start

```
npm run dev
```

## Note - Adding further dependencies
If it's a dev-only dependency, i.e. not meant for use in production, add the -D flag, e.g.:

```
npm install jest -D
```

Otherwise, no need for the -D

### Info - dependencies (included in default installation)
- cookie-parser, debug, express, morgan comes with the default express app
- passport & passport-ad are required for authentication with azure active directory
- tedious is the nodejs implementation of TDS protocol, for interaction with MS (Azure) SQL server

### Info - dev tools (included in --dev installation)
- nodemon - restarts the app every time there's a change in the specified files (refer to the dev script in package.json)
- sass - pure JavaScript implementation of sass/scss, scss simplifies css coding by allowing nesting, use of mixins, etc

### Info - testing
- refer to TODO folder
