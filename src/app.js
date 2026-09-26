import express from 'express';

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node 24!' });
  });

  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/version', (req, res) => {
    res.json({ node: process.version });
  });

  app.post('/echo', (req, res) => {
    res.json({ youSent: req.body });
  });

  return app;

  const express = require('express');

function createApp() {
  const app = express();
  // ... same as before
  return app;
}

module.exports = { createApp };
}