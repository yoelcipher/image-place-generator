const sharp = require('sharp');
const express = require('express');
const app = express();
const port = 3000;

// Generate a placeholder image
function generatePlaceholder(width, height, text = 'Placeholder') {
  return sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    }
  })
    .png()
    .composite([{
      input: Buffer.from(`<svg><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text></svg>`),
      top: 0,
      left: 0,
      gravity: 'centre'
    }])
    .toBuffer();
}

app.get('/placeholder/:width/:height', async (req, res) => {
  const { width, height } = req.params;
  const text = req.query.text;
  try {
    const imageBuffer = await generatePlaceholder(parseInt(width), parseInt(height), text);
    res.setHeader('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    res.status(500).send('Error generating image');
  }
});

app.listen(port, () => {
  console.log(`Image placeholder service running at http://localhost:${port}`);
});

module.exports = { generatePlaceholder };
