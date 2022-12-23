const inputTitle = document.querySelector('.title')
const inputTarefa = document.querySelector('.tarefa')
const inserirBtn = document.querySelector('#inserir-task')
const resultDiv = document.querySelector('.result-content')
const content = document.querySelector('.content')

const clearInput = () => {
    inputTitle.value = ""
    inputTarefa.value = ""
}

const inserirTarefa = () => {    
    const newTask = document.createElement('div')
    newTask.classList.add('new-task', "card", "text-bg-Header", "mb-3")
    newTask.innerHTML = `    
            <div class="card-header" style="font-weight: 700">${inputTitle.value}</div>
            <div class="card-body">
                <p class="card-text">${inputTarefa.value}</p>
            </div>
            <div class="task-actions">
                <button onclick="doneTask(this)" 
                    id="done" class="btn btn-primary"
                    style="margin-right: .5rem;padding: .3rem 3rem">
                    Done <i class="uil uil-check"></i>
                </button>
                <button type="button" onclick="deleteTask(this)" 
                    id="delete" class="btn btn-danger"
                    style="padding: .3rem 3rem">
                    Delete <i class="uil uil-trash-alt"></i>
                </button>
            </div>
        
        `
        
    let title = inputTitle.value
    let description = inputTarefa.value
    if(title === '' || description === ''){
        alert("Os campos de inserção estão vazios")
    } else {
        resultDiv.appendChild(newTask)
        clearInput()
    }
}

const doneTask = e => 
    e.closest('.new-task')
    .classList.toggle("text-bg-success")

const deleteTask = e => e.closest('.new-task').remove();