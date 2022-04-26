const inputPassword = document.getElementById('password-input');
const buttonPassword = document.getElementById('password-button');
const switches = document.getElementsByClassName('switch');
const checkboxes = document.getElementsByClassName('check');
const levers = document.getElementsByClassName('lever');
let checkboxesArray = [];
let leversArray = [];
/*console.log(checkboxes);
console.log(levers);*/
const buttonLunch = document.getElementById('lunch-button');
const inputs = document.querySelectorAll('input');

for (let i = 0; i < checkboxes.length; i++) {
    /*console.log(checkboxes[i]);*/

    // At this point we could also push the elements to an array
    checkboxesArray.push(checkboxes[i]);
}
for (let i = 0; i < levers.length; i++) {
    /*console.log(levers[i]);*/

    // At this point we could also push the elements to an array
    leversArray.push(levers[i]);
}
/*console.log(checkboxesArray);
console.log(leversArray);*/

let checkboxCheck = false;
let leversCheck = false;

buttonPassword.addEventListener('click', () => {
    if(inputPassword.value === "TrustNo1") {
        for (let i = 0; i < switches.length; i++) {
            switches[i].disabled = false;
            /*console.log(switches[i].value);*/
        }
        inputPassword.disabled = true;
        buttonPassword.disabled = true;
    }
});

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener('change', () => {
        if(switches[i].value === 100) {
            switches[i].disabled = true;

        }
        if(switches[i].checked === true) {
            switches[i].disabled = true;
        }
        let sumCheck = 0;
        for (let j = 0; j < checkboxesArray.length; j++) {
            /*console.log(checkboxesArray[j].checked)*/
            if (checkboxesArray[j].checked === true) {
                sumCheck += Number(checkboxesArray[j].checked);
            }


        }
        if(sumCheck === 6) {
            console.log('6 checkbox');
            checkboxCheck = true;
        }
        let sum = 0;
        for (let k = 0; k < leversArray.length; k++) {
            /*console.log(leversArray[k].value)*/
            if (leversArray[k].value === 100) {
                sum += parseInt(leversArray[k].value);
            }
        }
        if(sum === 500) {
            leversCheck = true;
            console.log('5 range');
        }

        if (checkboxCheck === true && leversCheck === true) {
            console.log('button works');
            document.getElementById('lunch-button').disabled = false;
        }
    });
}
buttonLunch.addEventListener('click', () => {
    console.log('Start!');
});

function test() {
    for (let item of inputs) {
        item.onchange = () => console.log('The test has been passed!');
    }
}
test();