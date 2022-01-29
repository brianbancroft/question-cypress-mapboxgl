## Testing and triggering various mapbox gl events in cypress

https://cypress-mapboxgl-click-event.netlify.app/

This repo experiments with mapbox interactions in a cypress environment. Created because I have yet to get a working solution to simulating a map pan in mapbox gl

# What Works, what Doesn't?

This is not an authoritative list.

- [x] click
- [x] double click
- [x] mouse move
- [] _pan_

## Site Status

The cypress test suite is set to run against a live site on netlify in order to minimize setup time of others.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e9d70dbb-ef8e-44b8-870e-c9ce48c5c927/deploy-status)](https://app.netlify.com/sites/cypress-mapboxgl-click-event/deploys)
