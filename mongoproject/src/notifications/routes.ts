import { Request, Response } from "express";

import express from 'express';

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.send("Notification routes");
});


// 1. Tüm bildirimleri getiren rota
router.get("/notifications", async (req: Request, res: Response) => {
  // controller logic
});

// 2. Tek bir bildirimi getiren rota
router.get("/notifications/:id", async (req: Request, res: Response) => {
  // controller logic
});

// 3. Yeni bir bildirim ekleyen rota
router.post("/notifications", async (req: Request, res: Response) => {
  // controller logic
});

// 4. Bir bildirimi güncelleyen rota
router.put("/notifications/:id", async (req: Request, res: Response) => {
  // controller logic
});

// 5. Bir bildirimi silen rota
router.delete("/notifications/:id", async (req: Request, res: Response) => {
  // controller logic
});

export { router };
