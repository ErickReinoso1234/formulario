import { Router } from "express";
import users from "../modulos/users";
const router = Router();

router.get("/Rutas", async (req, res) => {
  const user = await users.find();
  res.send(user);
});

router.post("/Rutas", async (req, res) => {
  const { nombre, apellido, direccion, correo } = req.body;
  const user = new users({ nombre, apellido, direccion, correo });
  await user.save();
  res.json(user);
});

router.get("/Rutas/:id", async (req, res) => {
  const user = await users.findById(req.params.id);
  res.send(user);
});

router.delete("/Rutas/:id", async (req, res) => {
  const user = await users.findByIdAndDelete(req.params.id);
  return res.json(user);
});

router.put("/Rutas/:id", async (req, res) => {
  const user = await users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

export default router;
