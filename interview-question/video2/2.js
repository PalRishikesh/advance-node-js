const myNums = document.querySelectorAll(".count");

let speed = 200;
myNums.forEach((singleCount)=>{
    let initCount = +singleCount.innerText;
    let targetCount = singleCount.dataset.count;
    console.log(initCount, targetCount);
    const individualSpeed = Math.floor(targetCount/speed);
    console.log(individualSpeed);
    const updateNumbers=()=>{
        initCount = initCount + individualSpeed;
        singleCount.innerText = initCount
        if(initCount < targetCount ){
            setTimeout(() => {
                updateNumbers();
            }, 1);
        }
     
    }
    updateNumbers();
})