//Get all students
//@route: GET/api/students

const getStudents = async (req,res)=>{
    res.send("Get all students");               //must add await when adding db logic
}

//Create new student
//@route: POST/api/students

const createStudent = async(req,res)=>{
    res.send("Create new student");
}

//Get Specific student
//@route: POST/api/students/id

const getStudent = async(req,res)=>{
    res.send(`Get student for id ${req.params.id}`);
}

//Update Specific student
//@route: PUT/api/students/id

const updateStudent = async(req,res)=>{
    res.send(`Update student for id ${req.params.id}`);
}

//Delete Specific student
//@route: DELETE/api/students/id

const deleteStudent = async (req,res)=>{
    res.send(`Delete student for id ${req.params.id}`);
}


module.exports={getStudents,createStudent,getStudent,updateStudent,deleteStudent}





