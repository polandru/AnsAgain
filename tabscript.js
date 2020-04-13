console.log("Hey!");
let inputs = document.getElementsByTagName("input");

let output  = new Map();

for(const input of inputs) {
    if(input.type === "text"){
        output.set(input.id,input.value);
    }else{
        output.set(input.value, input.checked)
    }
}

console.log(output.size);


browser.runtime.onMessage.addListener((message, sender, resp) => {
    console.log(message.question);
    console.log("Answer: PauL");
    resp("Paul");
});