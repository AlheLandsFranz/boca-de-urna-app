import User from "./models.js";
import { Router } from "express";
import newVote from "./newVote.js"
const router = Router()

router.use('/vote', newVote)

// ...
router.get("/total-votes", async (request, response) => {
    const users = await User.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  export default router;