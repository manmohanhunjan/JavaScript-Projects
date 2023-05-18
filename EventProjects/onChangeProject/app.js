const majorSub = document.querySelector("#majorSubjects");
// console.log(majorSub.children.querySelectorAll('option'));

const allSubjects = majorSub.querySelectorAll("option");
// console.log(allSubjects);

//Departmental Elective Reference
const dpElective = document.querySelector("#dpElective");

//Bucket List reference
const bucketList = document.querySelector("#bkList");

// const subTransfer = (event) => {
//     const valuu = event.target.value
//     console.log(valuu);
// }
majorSub.addEventListener("change", (event) => {
  console.log(event.target);
    const option = []
  for (let i = 0; i < allSubjects.length; i++) {
    // const subValue =
    //   event.target.value != allSubjects[i].value
    //     ? dpElective.appendChild(allSubjects[i])
    //     : (bucketList.textContent = allSubjects[i].value);
    
    option[i] = document.createElement('p')

    //     return subValue
    if (event.target.value != allSubjects[i].value) {
        // console.log(allSubjects[i].value)
        option[i].textContent = allSubjects[i].value
        option.value=allSubjects[i].value
        dpElective.appendChild(option[i])
        // dpElective.appendChild(allSubjects[i]);
    } else {
        // console.log('yes '+allSubjects[i].value)
        option[i].textContent = allSubjects[i].value
        option.value=allSubjects[i].value
        bucketList.appendChild(option[i])
        // bucketList.appendChild(allSubjects[i]);
    }
    // if (allSubjects[i].value === event.target.value) {
        
    // }
  }
});
