function addNewNote(){
  let board = document.getElementById('stickyNotes')
  let card = document.createElement('div')
  card.className = 'card'
  
  // create msg element
  let msg = document.createElement('p')
  msg.className = 'msg'
  
  // create close button
  let close = document.createElement('span')
  let closeTxt = document.createTextNode("\u00D7")
  close.className = 'close'
  close.onclick = (e) => {
    let deleteCardNode = e.target.parentNode
    deleteCardNode.parentNode.removeChild(deleteCardNode)
    console.log('deleted card')
  }
  close.appendChild(closeTxt)
  
  // get input values
  let inputValue = document.getElementById('input').value
  let text = document.createTextNode(inputValue)
  
  if(inputValue === ''){
    alert('Please enter a note')
  }else{
    //get msg index 
    let msgList = document.getElementsByClassName('card')
    
    // get edit modal
    msg.addEventListener('click', function(e) {
      let editModal = document.getElementById('editNoteModal')
      editModal.style.display = "block";
      let msg = e.target.textContent
      // console.log('editModal', editModal.childNodes[1])
      console.log('click on text', e.target)
      editModal.referenceNode = e.target
      editModal.childNodes[1].childNodes[3].value = msg
    })

    // append msg and close button to card
    msg.innerText=inputValue
    card.id = msgList.length
    card.appendChild(close)
    card.appendChild(msg)
    board.appendChild(card)        
    
    // close modal after note enter
    document.getElementById('addNoteModal').style.display = "none";
  }
  document.getElementById('input').value = ''
}

// search bar
let search = document.getElementById('search');
search.addEventListener('keyup', function(e){
  let term = e.target.value.toLowerCase()
  let list = document.getElementsByClassName('card')
  
  Array.from(list).forEach(function(note){
    let msgs = note.childNodes[1].textContent
    if(term === ''){
      note.style.display = 'block'
    }
    else if (msgs.toLowerCase().indexOf(term)<0){
      note.style.display = 'none'
    }else{
      note.style.display = 'block'
      console.log('not hidden', msgs)
    }
  })
})

// edit 
function updateNewNote(e){
  const msg = e.parentElement.parentElement.referenceNode
  console.log('click to edit', msg)
  // get input values
  let inputValue = document.getElementById('editInput').value
  let text = document.createTextNode(inputValue)
  console.log('input value', inputValue)
  msg.innerText = inputValue
  document.getElementById('editNoteModal').style.display = "none"
}