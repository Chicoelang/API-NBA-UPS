import { PlayerModel } from "../models/playerModel.js";

export const PlayerController = {
  async getAll(req, res) {
    try {
      const data = await PlayerModel.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getById(req, res) {
    try {
      const data = await PlayerModel.getById(req.params.id);
      res.json(data);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  async create(req, res) {
    try {
      const data = await PlayerModel.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const data = await PlayerModel.update(req.params.id, req.body);
      res.json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async remove(req, res) {
    try {
      const result = await PlayerModel.remove(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};