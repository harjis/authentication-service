import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
  res.json({ test: 'Should be only visible after authorized' })
};
