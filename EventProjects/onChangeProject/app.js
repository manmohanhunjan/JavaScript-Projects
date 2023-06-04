const majorSub = document.querySelector("#majorSubjects");
// console.log(majorSub.children.querySelectorAll('option'));

const allSubjects = majorSub.querySelectorAll("option");
// console.log(allSubjects);

//Departmental Elective Reference
const dpElective = document.querySelector("#dpElective");


//Open Elective Reference
const opElective = document.querySelector('#opElective');

//Bucket List reference
const bucketList = document.querySelector("#bkList");

// const subTransfer = (event) => {
//     const valuu = event.target.value
//     console.log(valuu);
// }


//-------------------Major Subjects Ka Event-------------------//


majorSub.addEventListener("change", () => {
  bucketList.innerHTML = "";
  dpElective.innerHTML = "";
  opElective.innerHTML = "";
    const option = []
  for (let i = 0; i < allSubjects.length; i++) {
    // const subValue =
    //   event.target.value != allSubjects[i].value
    //     ? dpElective.appendChild(allSubjects[i])
    //     : (bucketList.textContent = allSubjects[i].value);
    
    option[i] = document.createElement('option')

    //     return subValue
    if (majorSub.value != allSubjects[i].value) {
        // console.log(allSubjects[i].value)
        option[i].textContent = allSubjects[i].value
        option.value=allSubjects[i].value
        dpElective.appendChild(option[i])
        // dpElective.appendChild(allSubjects[i]);
    } else {
        // console.log('yes '+allSubjects[i].value)
        option[i].textContent = 'Major Subject :'+ allSubjects[i].value
        // option.value=allSubjects[i].value
        bucketList.appendChild(option[i])
        // bucketList.appendChild(allSubjects[i]);
    }
    // if (allSubjects[i].value === event.target.value) {
        
    // }
  }
});

//-------------------Departmental Elective Ka Event-------------------//

const dpElectiveBucketList = document.createElement('option');
dpElective.addEventListener('change',  ()=>{


// bucketList.innerHTML = ""
dpElectiveBucketList.innerHTML = "";
//Departmental Elective Subjects
const dpElectiveSub = dpElective.querySelectorAll('option');
// console.log(dpElectiveSub);
    const options = []
    for (let i = 0; i < dpElectiveSub.length; i++) {
      options[i] = document.createElement('option')

        if (dpElective.value != dpElectiveSub[i].value) {
            options[i].textContent = dpElectiveSub[i].value
            options.value=dpElectiveSub[i].value
            opElective.appendChild(options[i])
            // bucketList.appendChild(dpElectiveSub[i]);
        } else {
            dpElectiveBucketList.textContent = 'Departmental Elective Subject : '+dpElectiveSub[i].value
            // options.value=dpElectiveSub[i].value
            bucketList.appendChild(dpElectiveBucketList)
            // dpElective.appendChild(dpElectiveSub[i]);
        }
    }
});

//-------------------Open Elective Ka Event-------------------//

const opElectiveBucketList = document.createElement('option')

opElective.addEventListener('change', ()=>{
  const opElectiveSubjects = document.querySelectorAll('option')

  for (let i = 0; i<opElectiveSubjects.length; i++){
    if (opElective.value === opElectiveSubjects[i].value) {
      opElectiveBucketList.textContent = 'Open Elective Subject : '+opElectiveSubjects[i].value;
      bucketList.appendChild(opElectiveBucketList)
    }
  }
})