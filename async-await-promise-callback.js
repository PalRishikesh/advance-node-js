/** Async JS programing */

const dataList = [
  {
    name: "Rishi",
    profession: "Software Engineer",
  },
  {
    name: "Raj ",
    profession: "Software Tester",
  },
];

function getList() {
  setTimeout(() => {
    let output = "";
    dataList.forEach((singleList, index) => {
      output += `<li>${singleList.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// getList();
// function createdataList() {
//   setTimeout(() => {
//     dataList.push({ name: "divyes", profession: " UX" });
//   }, 3000);
// }

// createdataList({ name: "divyesh", profession: " UX" });

/** We can overcome above problem with callback */

function createdataListWithCallback(data,callback) {
  setTimeout(() => {
    dataList.push(data);
    callback();
  }, 2000);
}

// createdataListWithCallback({ name: "divyesh", profession: " UX" },getList);

/** Promise */

function createdataListWithPromise(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            dataList.push(data);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Error: Something went wrong");
            }
          }, 2000);
    })
   
  }
  
//   createdataListWithPromise({ name: "divyesh", profession: " UX" }).then(getList);
// Or below code
//   createdataListWithPromise({ name: "divyesh", profession: " UX" }).then(()=>{
//     getList()
//     }).catch((err)=>{
//         console.log(err);
//     });

/** Async Await */

async function addDetails(){
    try{
        await createdataListWithPromise({ name: "divyesh", profession: " UX"});
        getList();
    }
    catch (error) {
    console.log(error);
   }
}
addDetails();