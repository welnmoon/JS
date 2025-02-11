const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')


let notes = [];

button.onclick = function () {
    if(!input.value){
        alert('empty');
        return;
    }

    const newNote = {
        title: input.value,
        completed: false
    }
    notes.push(newNote);

    // list.insertAdjacentHTML('beforeend', 
    //     getNoteTemplate(newNote))
    input.value = '';
    render()
}

list.onclick = function(event){
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if(isNaN(index)) return;

    if(type==='toggle'){
        notes[index].completed = !notes[index].completed;
        render();
    } else if (type==='remove') {
        notes.splice(index,1);
        render();
    }  
}

function render() {
    list.innerHTML = '';

    if (notes.length === 0) {
        list.innerHTML = `<p>While it's empty, you should add tasks</p>`;
        return;
    }

    notes.forEach((note, index) => {
        list.insertAdjacentHTML('beforeend', getNoteTemplate(note, index));
    });
}

render();

function getNoteTemplate(note, index) {
    return `
        <li class="note-item">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">
                ${note.title}
            </span>
            <div class="actions">
                <button class="btn btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">✔</button>
                <button class="delete" data-index="${index}" data-type="remove">✖</button>
            </div>
        </li>
    `;
}

