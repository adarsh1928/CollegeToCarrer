

exports.selectFromOtherDept= async (req, res) => {
    const { subjects, email, collegeSemester, CPI } = req.body;
  
    let subjectsForParticularSemester;
    let typeOfSubject;
  
    try {
      const SelectSub = new selectSubject({
        email: email,
        subjects: subjects,
        semester: collegeSemester,
        typeOfSubject: "other-dept",
        CPI: CPI
      });
  
      try {
        const data = await subjectsByProfessor.find({ semester: collegeSemester, selectType: "from-other-dept" });
  
        subjectsDecided = data[0].subjects
        let f = 0;
        for (let i in subjects) {
          if (!subjectsDecided.includes(subjects[i])) {
            f = 1;
            break;
          }
        }
  
        if (f == 0) {
          const savedSelectSub = await SelectSub.save();
          console.log(`Saved Data of selectSub with id: ${savedSelectSub._id}`);
          res.status(200).send(savedSelectSub);
          console.log("saved");
        }
        else {
          res.send({ message: "Aukat me raho aur subjects change karne vali harkate bandh karo, Tumse jyada smart hai hum beta " })
        }
      } catch (err) {
        console.log("error");
        console.error(err);
        res.status(500).send("Error While saving selectSub");
      }
    } catch (e) {
      console.log("error");
      console.error(e);
      res.status(500).send("Error while finding subjectsByProfessor");
    }
  }
  
  
  exports.selectFromOtherSchool= async (req, res) => {
    console.log("req.body");
    // console.log(req.body)
    const { subjects, email, collegeSemester } = req.body;
  
    let subjectsForParticularSemester;
    let typeOfSubject;
  
    try {
      const SelectSub = new selectSubject({
        email: email,
        subjects: subjects,
        semester: collegeSemester,
        typeOfSubject: "other-school"
  
      });
  
      try {
        const data = await subjectsByProfessor.find({ semester: collegeSemester, selectType: "from-other-school" });
  
    
        subjectsDecided = data[0].subjects
        let f = 0;
        for (let i in subjects) {
          if (!subjectsDecided.includes(subjects[i])) {
            f = 1;
            break;
          }
        }
  
        if (f == 0) {
          const savedSelectSub = await SelectSub.save();
          console.log(`Saved Data of selectSub with id: ${savedSelectSub._id}`);
          res.status(200).send(savedSelectSub);
          console.log("saved");
        }
        else {
          res.send({ message: "Aukat me raho aur subjects change karne vali harkate bandh karo, Tumse jyada smart hai hum beta " })
        }
      } catch (err) {
        console.log("error");
        console.error(err);
        res.status(500).send("Error While saving selectSub");
      }
    } catch (e) {
      console.log("error");
      console.error(e);
      res.status(500).send("Error while finding subjectsByProfessor");
    }
  }


  exports.selectFromOtherNptel= async (req, res) => {
   
    const { subjects, email, collegeSemester } = req.body;
  
    let subjectsForParticularSemester;
    let typeOfSubject;
  
    try {
    
      const SelectSub = new selectSubject({
        email: email,
        subjects: subjects,
        semester: collegeSemester,
        typeOfSubject: "other-nptel"
     
      });
  
  
      try {
        const data = await subjectsByProfessor.find({ semester: collegeSemester, selectType: "nptel" });
  
        console.log("data")
        console.log(data)
        subjectsDecided = data[0].subjects
        let f = 0;
        for (let i in subjects) {
          if (!subjectsDecided.includes(subjects[i])) {
            f = 1;
            break;
          }
        }
  
        if (f == 0) {
          const savedSelectSub = await SelectSub.save();
          console.log(`Saved Data of selectSub with id: ${savedSelectSub._id}`);
          res.status(200).send(savedSelectSub);
          console.log("saved");
        }
        else {
          res.send({ message: "Aukat me raho aur subjects change karne vali harkate bandh karo, Tumse jyada smart hai hum beta " })
        }
      } catch (err) {
        console.log("error");
        console.error(err);
        res.status(500).send("Error While saving selectSub");
      }
    } catch (e) {
      console.log("error");
      console.error(e);
      res.status(500).send("Error while finding subjectsByProfessor");
    }
  }
  
  
  
  