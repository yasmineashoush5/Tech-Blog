const router = require("express").Router()
const userroutes = require("./user-routes")
const commentroutes = require("./comment-routes")
const postroutes = require("./post-routes")
router.use("/user", userroutes)
router.use("/post", postroutes)
router.use("/comment", commentroutes)
module.exports = router