// let {courses} = require("../data/courses");
const { validationResult } = require("express-validator");
const Course = require('../models/course.models');

const getAllCourses = async (req, res) => {
  const courses = await Course.find()
  console.log(courses)
  res.send(courses);
};


const getSingleCourse = async(req, res) => {
  try{
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send({ msg: "course not found" });
    }
    return res.send(course);
  }catch (err){
    return res.status(400).send({msg:"Invalid Id"});
  }
};

const createCourse = async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }
  // if(!req.body.name){
    //     return res.status(400).send({error: "name is provided"});
    // };
    // if(!req.body.price){
    //     return res.status(400).send({error: "price is provided"});
    // };
  // courses.push({ id: courses.length + 1, ...req.body });
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).send(newCourse);
};


const updateCourse = async(req, res) => {
  const id = req.params.id;
  try{
    // const updateCourse = await Course.findByIdAndUpdate(id,{$set: {...req.body}});
    const updateCourse = await Course.updateOne({_id:id},{$set: {...req.body}});
    return res.status(200).json(updateCourse);
  }catch(err){
    return res.status(400).json({error:err});
  }
  // let course = courses.find((course) => course.id === id);
  // if (!course) {
  //   return res.status(404).send({ msg: "course not found" });
  // }
  // course = { ...course, ...req.body };
  // courses.splice(id - 1, 1, course);
};


const deleteCourse = async(req, res) => {
  const id = req.params.id;
  const deleteCourse = await Course.deleteOne({_id:id});
  // courses = courses.filter((course) => course.id !== id);
  res.status(200).send(deleteCourse);
};


module.exports = {
  getAllCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse
};