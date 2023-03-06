import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {data} from "../data/data"

export function StudentDetails(){

    const [studentsData,setStudents]=useState(data)
    const [editId,setEditId]=useState("")
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [gender,setGender]=useState("")
    const [batch,setBatch]=useState("")
    const [experience,setExperience]=useState("")
    const [show,setShow]=useState(true)

    //add new data

    const addnewStudent=()=>{
        const newStudent={
            id,
            name,
            gender,
            batch,
            experience:experience
        }
        setStudents([...studentsData,newStudent])
        setId("")
        setName("")
        setGender("")
        setBatch("")
        setExperience("")
        }


        //delete old students

        const deleteStudent=(studID)=>{
           const selectedStudents=studentsData.filter((stud)=>stud.id !== studID)
            setStudents(selectedStudents)
        }

        //edit students
        const editStudent=(idx)=>{
            setShow(!show)
            setEditId(idx)
            const selectedData=studentsData.find((stud)=>stud.id === idx)
            setId(selectedData.id)
            setName(selectedData.name)
            setGender(selectedData.gender)
            setBatch(selectedData.batch)
            setExperience(selectedData.experience)
        }

        //update students
        const updateStudent=()=>{
            const editedStudent=studentsData.findIndex((stud)=>stud.id===editId)
            const updatedobj={
                id,
                name,
                gender,
                batch,
                experience:experience
            }
            studentsData[editedStudent]=updatedobj
            setStudents([...studentsData])
        }

    return (
      <div className="card-containers">

        <div className="input-sec">

        <TextField fullWidth label="Enter your id" onChange={(event)=>setId(event.target.value)} value={id} id="fullWidth" />
        <TextField fullWidth label="Enter your name" onChange={(event)=>setName(event.target.value)} value={name} id="fullWidth" />
        <TextField fullWidth label="Enter your gender" onChange={(event)=>setGender(event.target.value)} value={gender} id="fullWidth" />
        <TextField fullWidth label="Enter your batch" onChange={(event)=>setBatch(event.target.value)}value={batch} id="fullWidth" />
        <TextField fullWidth label="Enter your experience" onChange={(event)=>setExperience(event.target.value)} value={experience} id="fullWidth" />
        {show ?
        <Button size="small" variant="outlined" onClick={addnewStudent}>Add</Button>
        :
        <Button size="small" variant="outlined" onClick={updateStudent}>Update</Button>
        }

        </div>
        


         {studentsData.map((stud, id) => (
          <Card sx={{ maxWidth: 345 }} key={stud.id} className="card-content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name:{stud.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender:{stud.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch:{stud.batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience:{stud.experience}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" onClick={()=>editStudent (stud.id)}>Edit</Button>
              <Button size="small" variant="outlined" onClick={()=>deleteStudent(stud.id)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      
      </div>
       
    );
}