
const Continue = document.querySelector(".continue");
const reset = document.querySelector(".reset");

const hr = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");

let hr_val = 0, min_val = 0, sec_val = 0;
let intervalId;

hr.addEventListener("input", (e) => {
    hr_val = e.target.value;
    console.log("hr: ", hr_val, "min: ", min_val, "sec: ", sec_val);
});
min.addEventListener("input", (e) => {
    min_val = e.target.value;
    console.log("hr: ", hr_val, "min: ", min_val, "sec: ", sec_val);
});
sec.addEventListener("input", (e) => {
    sec_val = e.target.value;
    console.log("hr: ", hr_val, "min: ", min_val, "sec: ", sec_val);
});

function handleCountDown() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (sec_val > 0) {
            sec_val--;
            if(sec_val == 0 && min_val == 0 && hr_val > 1){
                min_val = 59;
                sec_val = 60;
                hr_val--;
            }
            else if(sec_val == 0 && min_val == 0 && hr_val == 1){
                hr_val = 0;
                min_val = 59;
                sec_val = 60;
            }
            else if(sec_val == 0 && min_val > 0 && hr_val == 0){
                sec_val = 60;
                min_val--;
            }
        }
        // else if(min_val > 0){
        //     min_val--;
        // }
        // else if(hr > 0){
        //     hr_val--;
        // }
        else {
            resetFn();
            clearInterval(intervalId);
        }

        hr.value = hr_val;
        sec.value = sec_val;
        min.value = min_val;
    }, 1000)
}

Continue.addEventListener("click", () => {
    console.log(`Continue with: ${hr_val}:${min_val}:${sec_val}`);
    function neww(){
        
        handleCountDown();
    }
    neww();
});

const resetFn = () => {
    const resetFn = reset.addEventListener("click", () => {
        hr.value = '00';
        min.value = '00';
        sec.value = '00';
        hr_val = min_val = sec_val = 0;
        console.log("Values reset");
    });
}

resetFn();


