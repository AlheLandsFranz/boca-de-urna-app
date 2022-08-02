import { Router } from "express";
const router = Router()
import User from "./models.js";
// ...
router.post('/', async (req, res) => {
    try {
      let user = new User(req.body)
      user.save()
      res.status(200).send(user);
    } catch (error) {
      console.log(error, 'erooooor')
      res.status(400).send(error);
    }
});

export default router;