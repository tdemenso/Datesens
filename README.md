# Datesens Webmap

This repository contains a webmap created with QGIS2Web that displays electoral data and geographic information.

## Publishing on GitHub Pages

This webmap is published using GitHub Pages. The files are organized in the root directory to be served directly by GitHub Pages.

### Structure

- `index.html` - Main webmap page
- `layers/` - Map layers and data files
- `resources/` - JavaScript libraries and CSS files (OpenLayers, QGIS2Web, etc.)
- `styles/` - Map styles and legend files
- `webfonts/` - Font files for the map interface
- `CNAME` - Custom domain configuration

### Accessing the Webmap

Once GitHub Pages is enabled for this repository, the webmap will be accessible at:
- Custom domain: http://github.sens (as configured in CNAME)
- Or via GitHub Pages: https://tdemenso.github.io/Datesens/

### Enabling GitHub Pages

To publish this webmap:

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Source", select the branch to deploy (e.g., `main` or `copilot/publish-webmap-folder`)
4. Select "/ (root)" as the folder
5. Click Save

The webmap will be published and accessible within a few minutes.

## Map Features

The webmap includes:
- Interactive map layers showing electoral sections and metro stations
- SENS percentage data visualization
- Sector boundaries
- Base map from ESRI
- Layer switching controls
- Search and navigation tools

## Technology

Built with:
- QGIS2Web
- OpenLayers
- Photon Geocoder
