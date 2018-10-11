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
  console.log('text', text)
  
  if(inputValue === ''){
    alert('Please enter a note')
  }else{
    //get msg index 
    let msgList = document.getElementsByClassName('card')
    console.log(msgList.length)

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
const search = document.getElementById('search');
search.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase()
  const list = document.getElementsByClassName('card')
  
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