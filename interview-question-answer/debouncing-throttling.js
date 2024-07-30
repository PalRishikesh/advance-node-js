
// When we want end result for the user, debouncing will help, search, mouse event, etc
// throttling

const searchInput = document.getElementById("searchInput");

function debounce(func,dealy){

       let timeout;
        return function(...arg){
            clearTimeout(timeout)
           timeout =  setTimeout(() => {
                func(...arg)
            }, dealy);
        }
      
}

searchInput.addEventListener("input", debounce(myInputFunction,1000))

function myInputFunction(event){
    const query = event.target.value;
    console.log(query);

    fetch(`https://api.example.com/search/query?${query}`)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
    })
}

/*
THROTTLING


*/
const clickBtn = document.getElementById("clickButton");

const throttlingCall=(fnc, dealy)=>{
    // let shouldCall = true;
    // return function(...arg){
    //     if(!shouldCall){
    //         return;
    //     }
    //     fnc(...arg);
    //     shouldCall = false;
    //     setTimeout(()=>{
    //         shouldCall = true;
    //     },dealy)

    // }

    // // 2nd Approach
    
    let lastCall = 0;
    return function(...arg){
        const now = new Date().getTime();
        // console.log("now: ",now - lastCall, now, dealy);
        // First time now -last call (1574000 - 0 ) will be greater then delay 
        // From second Time, we have last call have current time, and if we delay less then 1 second
        // Then Now -last call will be greate then 1 second, will do nothing  
        if(now - lastCall < dealy){
            return;   
        }
        lastCall = now
        fnc(...arg)
    }
}

const btnClickEvent=()=>{
    console.log("Btn is click");
}

// clickBtn.addEventListener("click",btnClickEvent)
clickBtn.addEventListener("click",throttlingCall(btnClickEvent,1000))