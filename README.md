# Vb
A Team Randomizer built using Angular and Bootstrap, installable as a progressive web app (PWA).
Supports setting names using URL query parameters:
```url
https://vb.example.org?names=Me,Myself,I
```

## Development

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

Alternatively, to open the server to the network instead of just localhost, use

```bash
npm run serve
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.
As this is a static site, simply move the contents of `dist/vb/browser/` to a directory that can be served by nginx or apache.