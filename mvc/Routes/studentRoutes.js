const express=require("express");
const router=express.Router();

const{getStudents,createStudent,getStudent,updateStudent,deleteStudent}=require("../Controller/studentController")

router.route("/").get()

router.route("/").post()

router.route("/:id").get()

router.route("/:id").put()

router.route("/:id").delete()

module.exports=router;

