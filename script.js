//your code here!

let list = document.querySelector("#infi-list");

let counter = 1;

for (let i = 1; i <= 10; i++) {  
    appendlist(); 
}


list.addEventListener('scroll', event => {
    const {scrollHeight, scrollTop, clientHeight} = event.target;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
        appendlist();
        appendlist();
    }
});


function appendlist(){
      let li = document.createElement("li");
        li.innerText = `Item ${counter}`;
        counter++;
        list.appendChild(li);
}