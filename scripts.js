function removeError(element) {
    element.classList.remove('error');
}
const submit = document.getElementById('submit'),
    tasks = [];

function getTask(){
    const now = new Date(),
        title = document.getElementById('title'),
        description = document.getElementById('description');
    if(title.value !== '' && description !== ''){
        const task = {
            title: title.value,
            description: description.value,
            data: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        }
        tasks.push(task);
        title.value = '';
        description.value = '';
    } else {
        if(title.value === ''){
            title.classList.add('error');
        }
        if(description.value === ''){
            description.classList.add('error');
        }
    }
}
submit.addEventListener('click', getTask);
console.log('click', tasks);