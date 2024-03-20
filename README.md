# image-place-generator

A library to generate placeholder images with custom dimensions and optional text, served over a simple web server.

## Installation

Run the following command to install `image-place-generator`:

```bash
npm install image-place-generator
```

## Dependencies

This library uses `sharp` for image processing and `express` for serving images over HTTP.

## Usage

After installation, you can run the server as follows:

```javascript
const { generatePlaceholder } = require('image-place-generator');
// The server will start automatically
```

To get a placeholder image, make a GET request to:

```
http://localhost:3000/placeholder/{width}/{height}?text=Optional%20Text
```

Replace `{width}` and `{height}` with the desired dimensions of the placeholder image, and `Optional%20Text` with any
text you want to include.
