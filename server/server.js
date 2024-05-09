const express = require("express");
const axios = require("axios");
const cors = require("cors");
const helmet = require("helmet");
const { check, validationResult } = require("express-validator");

require("dotenv").config();

const app = express();

// Use Helmet
app.use(helmet());

// Enable CORS
app.use(cors());

// For parsing application/json
app.use(express.json());

// Route to handle API requests
app.get(
  "/api/search",
  [check("term").notEmpty().withMessage("Term is required"), check("media").notEmpty().withMessage("Media type is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { term, media } = req.query;
    try {
      const response = await axios.get(`https://itunes.apple.com/search`, {
        params: { term, media, limit: 20 },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Export the app for testing purposes
module.exports = app;
