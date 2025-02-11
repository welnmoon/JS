const display = document.getElementById('display');

let mode = 'time';
const full = document.getElementById('full');
const date = document.getElementById('date');
const time = document.getElementById('time');

function bindMode(name){
    return function(){
        mode=name
        update()
    }
}

full.onclick = bindMode('full')
date.onclick = bindMode('date')
time.onclick = bindMode('time')

update();

setInterval(update, 1000);

function update(){
    display.textContent = timeFormat(mode);
}

function timeFormat(mode){
    let now = new Date();

    switch(mode){
        case 'time':
            return now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
    }
}
