


exports.MainAdminPage= async (req, res) => {
    console.log("Here is req body")

    const { email, subjects, semester, selectType } = req.body;
  
   
    try {
      console.log("saving data")
      // console.log(subjectByProf)
      const savedSubjectByProff = await subjectByProf.save();
      console.log(`Saved subjectByProf with id: ${savedSubjectByProff._id}`);
      res.status(200).send(savedSubjectByProff);
      
    } catch (err) {
      console.log("error");
      console.error(err);
      res.status(500).send("Error saving subjectByProf");
    }
  }

  
  exports.ThirdAdminPage= async (req,res)=>{
    const {semester,typeOfSubject,numberOfStudent}=req.body
  
     try{
  
      const users = await selectSubject.find({typeOfSubject:typeOfSubject,semester:semester})
  
      let totalStudent=users.length
      
  
      let pairOfEmailAndSubject=[]
  
      for(let i=0;i<totalStudent;i++){
           let assignPriority=(i)/numberOfStudent
           assignPriority=Math.floor(assignPriority)
           console.log("assign");
           console.log(assignPriority)
  
           console.log(users[i]) 
  
           let email=users[i].email
           let subject=users[i].subjects[assignPriority]
  
           pairOfEmailAndSubject.push({email:email,subject:subject});
      }
  
         res.send({ message:"Successfully Assign the subject priority wise", pairOfEmailAndSubject:pairOfEmailAndSubject})
  
  
     }catch(err){
        console.log("error is happening")
        res.send(err);
     }
  
  }
  
  exports.SecondAdminPage= async (req, res) => {
  
    console.log("req.body for second admin page");
    // console.log(req.body)
  
    const { semester, typeOfSubject } = req.body
  
    try {
  
      try {
        const users = await selectSubject.find({typeOfSubject:typeOfSubject}).sort({ CPI: -1 }).exec();
        
        console.log("Successfully sorted the database according to CPI");
        
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          user.CPIRank = i + 1; 
          await user.save();
        }
        let selectedType
        if(typeOfSubject==="other-dept"){
          selectedType="from-other-dept"
        }
        else if(typeOfSubject==="other-school"){
          selectedType="from-other-school"
        }
        else selectedType="nptel"
        
        const data = await subjectsByProfessor.find({ semester:semester, selectType: selectedType });
        

        subjects = data[0].subjects
        res.send({ message: "Successfully sorted the database according to CPI", subjects:subjects});
  
      } catch (err) {
        console.log("Error in sorting the database");
        console.log(err);
        res.send({ message: "Error in sorting the database" });
      }
  
    } catch (err) {
      console.log("Error From Second Admin Page");
      console.log(err);
    }

  }
  
  