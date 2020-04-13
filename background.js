let save = document.getElementById("save");
let fill = document.getElementById("fill");

let tab;
browser.tabs.query({"active":true, "currentWindow":true}).then( tabs => {tab = tabs[0]});


save.addEventListener("click",(e) =>{
    alert("Message sent to "+tab.id);
    browser.tabs.sendMessage(tab.id, {question: "What is your name"}).then(name =>{
        alert("Hi "+ name);
    });
});

fill.addEventListener("click",(e) =>{
    alert("TEST");
});

browser.tabs.executeScript({file:"tabscript.js"});