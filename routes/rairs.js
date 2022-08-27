const express = require("express");

const router = express.Router();




router.post("/", require("./../controllers/rairs").getPost);

router.get("/" ,require("./../controllers/rairs").getAllusers); 

router.get("/:rairsId" ,require("./../controllers/rairs").getUsers); // localhost://users/7383838395

router.delete("/:rairsId" ,require("./../controllers/rairs").deleteUser);    

router.put("/:rairsId" ,require("./../controllers/rairs").UpdateUser);












module.exports = router;







