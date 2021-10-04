# mortgage-calculator

This is an implementation of a mortage calculator based from this [design](https://drive.google.com/file/d/18bzDzrNNN5wPy5WUlJ2fweSBvDFiLfDD/view)

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

```sh
node dist/bundle.js
```

## Testing

To run unit tests:

```sh
npm test
```

## Known issues

- The range slider does not differ the background color from full to empty
- Did not use the fonts provided by the documents as their dropbox links were expired
- There were no specifications about the rounding of the excess decimal so I took the liberty to round them up in every calculation
- From the desktop design there were no input for the years of mortage value, I added them as the mobile design did have one and it would be more intuitive
- There are no max and min input validation for any of the number inputs as they were not specified so it can ran into calculation errors with very high or low values
- It's not pixel perfect 
- Many of these's issues could have been taken care for but I did not have and wanted to spend to much time working on them