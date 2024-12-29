// api/request.js
import express from 'express';
import Request from '../models/Request';

const router = express.Router();

router.post('/request', async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();
    res.json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save request' });
  }
});

export default router;