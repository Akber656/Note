let notelistRootElement = document.querySelector('#notelist')
let notelandRootElement = document.querySelector('.checknote')
let mainRootdivElement= document.querySelector('.notebody')
let onenote = document.querySelector('.notebodyone')
let taskdivmain = document.querySelector('.task')
let header = document.getElementById('contentvalueone')


document.querySelector('.createNote').style.display = 'none';
document.querySelector('.noteDisplay').style.display = 'none';
document.querySelector('.createNoteButton').style.display = 'none'
document.querySelector('.addnewtask').style.display = 'none'
document.querySelector('.notebodyone').style.display = 'none'
document.querySelector('.noteBody').style.display = 'none'

 let tasklist = []
 let notes = []


function renderElementToscreen(){
   if(localStorage.getItem('notes')){
      notes = JSON.parse(localStorage.getItem('notes'))
      notes.forEach(note => {
            renderListNoteLand(note , note.uniqueId)
     });
    }
}

function renderElementToScreen(){
    if(localStorage.getItem('tasklist')){
        tasklist = JSON.parse(localStorage.getItem('tasklist'))
        tasklist.forEach(task => {

        })
    }
}

document.querySelector('.newnotebutton').addEventListener('click',()=>{
    document.querySelector('.createNoteButton').style.display = 'block'
    document.querySelector('.createNote').style.display = 'block'
    document.querySelector('.checknotes').style.display = 'none'
})

document.querySelector('.createNoteButton').addEventListener('click',  ()=> {
  let note = {
    Title: document.querySelector('#createNoteTitle').value,
    content: document.querySelector('#createNoteContent').value, 
    }
    let uniqueId = Math.floor(Math.random() * 1000000);

    document.querySelector('.createNoteButton').style.display = 'none'
    document.querySelector('.createNote').style.display = 'none';
    addNoteTolocalstorage(note , uniqueId)
    renderListNoteLand(note ,uniqueId);
    })

    let a = JSON.parse(localStorage.getItem('notes'))
    let b = JSON.parse(localStorage.getItem('tasklist'))
   

function renderListNoteLand(note , uniqueId){
    let noteElement = document.createElement('div');
    noteElement.classList.add('note' , uniqueId)
    let noteTitle = document.createElement('h2');
    noteTitle.className = 'noteonemain';
    let noteContent = document.createElement('p') ;
    noteContent.id = 'contentvalueone';

    noteTitle.innerText = note.Title;
    noteContent.innerText = note.content;

    noteElement.append(noteTitle);
    noteElement.append(noteContent);
    notelistRootElement.append(noteElement)

    document.querySelector('#createNoteTitle').value  = '';
    document.querySelector('#createNoteContent').value = '';

    
    let item = {
        itemname : note.Title.value , 
        itemcontent : note.Content,
    }

    
   noteElement.addEventListener('click' , ()=>{
        document.querySelector('.noteDisplay').style.display = 'block';
         document.querySelector('.noteBody').style.display = 'block';
         document.querySelector('.notebodyone').style.display = 'block';
         document.querySelector('.checknotes').style.display = 'none';

        addNewTaskToTitleAndContent(item)

        removeElementFormUnique(uniqueId)
    })

}

 function addNewTaskToTitleAndContent(item){
    let mainonedisplay = document.createElement('div');
    mainonedisplay.classList.add('notedisplay');

    let mainonebody = document.createElement('div');
    mainonebody.classList.add('titledisplay');

    let noteonemain = document.createElement('h2');

    let buttonone = document.createElement('button');
    buttonone.classList.add('addtask');

    let buttontwo = document.createElement('button');
    buttontwo.classList.add('deletenote');

    let notebodyone = document.createElement('div');
    notebodyone.setAttribute('class' , 'notebodyone');
    notebodyone.classList.add('notebodyone');

    let taskheading = document.createElement('p');
    taskheading.setAttribute('id' , 'header');

    noteonemain.innerHTML = item.itemname;
    taskheading.innerText = item.itemcontent;
    buttonone.innerHTML = 'Ad';


    mainonebody.appendChild(noteonemain);
    mainonebody.appendChild(buttonone);
    mainonebody.appendChild(buttontwo);
    notebodyone.appendChild(taskheading);

    mainonedisplay.appendChild(mainonebody)
    mainonedisplay.appendChild(notebodyone)

    }

document.querySelector('.deletenote').addEventListener('click' ,()=>{
    document.querySelector('.note').remove() 
    document.querySelector('.noteDisplay').style.display = 'none';
    document.querySelector('.noteBody').style.display = 'none';
    document.querySelector('.notebodyone').style.display = 'none';
    document.querySelector('.checknotes').style.display = 'block';
    document.querySelector('.createNote').style.display = 'none';
  
    localStorage.clear()
})
 

document.querySelector('.newtask').addEventListener('click',()=>{
    document.querySelector('.addnewtask').style.display = 'block'
    document.querySelector('.addnewtask').style.position = 'absolute'
    document.querySelector('.createNote').style.position = 'none'
    document.querySelector('.noteBody').style.display = 'none';
   
document.querySelector('.Createtask').addEventListener('click' ,()=>{
    document.querySelector('.noteBody').style.display = 'block';
})
    

})
    


function addNoteTolocalstorage(note , uniqueId){
        
    note = { ...note , uniqueId}

    notes.push(note)
   localStorage.setItem('notes' , JSON.stringify(notes))

}

document.querySelector('.notelist').addEventListener('click', ()=>{
    document.querySelector('.noteDisplay').style.display = 'block';
    document.querySelector('.noteBody').style.display = 'block';
    document.querySelector('.notebodyone').style.display = 'block';
    document.querySelector('.checknotes').style.display = 'none'
    
    removeElementFormUnique(uniqueId)
    localStorage.clear()


})


let uniqueId = Math.floor(Math.random() * 100);    

document.querySelector('.Createtask').addEventListener('click' , ()=>{

    let task={
        checktask : document.querySelector('#checkbox').type, 
        taskname : document.querySelector('.ainput').value,

    }


       if(document.querySelector('.ainput').value.trim().length >0 ){
        renderElementTotask(task , uniqueId)
        addTaskTolocalstorage(task , uniqueId)
    }else{
        alert('please enter task')
        console.log('please enter task')
    }

})


    function addTaskTolocalstorage(task , uniqueId){
        
        task = { ...task , uniqueId}
    
        tasklist.push(task)
       localStorage.setItem('tasklist' , JSON.stringify(tasklist))
    
    }

    function renderElementTotask(task) {
        let taskdivonemain = document.createElement('li');
        taskdivmain.classList.add('taskonee')
        let inputtask = document.createElement('input');
        inputtask.type= 'checkbox'
        inputtask.id = 'checkbox'
        inputtask.value = task.checktask;
        let label = document.createElement('label')
        let createbutton = document.createElement('button')
        createbutton.className = 'Createtask'
    
    
        taskdivonemain.append(inputtask);
        taskdivonemain.append(label);
        taskdivmain.append(taskdivonemain)
        
    
        inputtask.innerText = task.checktask;
        label.innerText = task.taskname;
    
        document.querySelector('.ainput').value = '';
        document.querySelector('.addnewtask').style.display = 'none'
    

        document.querySelector('.notelist').addEventListener('click', ()=>{
            document.querySelector('.noteDisplay').style.display = 'block';
            document.querySelector('.noteBody').style.display = 'none';
            document.querySelector('.notebodyone').style.display = 'none';
            document.querySelector('.checknotes').style.display = 'none'
        })
    
    }


function removeElementFormUnique(id){
    notes = JSON.parse(localStorage.getItem('notes'))

    let index = notes.findIndex(note=> note.uniqueId==id)
    notes.splice(index ,1)

    localStorage.setItem('notes' , JSON.stringify(notes))
 }

 renderElementToScreen()
 renderElementToscreen()
