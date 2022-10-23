
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

//form submit event//

form.addEventListener('submit', addItem);
//delete event//
itemList.addEventListener('click',removeItem)


//addd Item//
function addItem(e){
    e.preventDefault()

    //get input value//
    var newItem=document.getElementById('item').value;

    //create new li item//
    var li=document.createElement('li')
    //add class
    li.className='list-group-item'
    //add text node with input value//
    li.appendChild(document.createTextNode(newItem))

  ////create button///
  var deletebtn=document.createElement('button')
  deletebtn.className='btn btn-danger btn-sm float-right delete'


   var editbtton=document.createElement('button')
   editbtton.className='btn btn-danger btn-sm float-right delete'
   

   
  //Append text node//
  deletebtn.appendChild(document.createTextNode('X'))

  editbtton.appendChild(document.createTextNode('Edit'))
   editbtton.style.background='coral'
   
  //append button to li//
  li.appendChild(deletebtn)

  li.append(editbtton)

  //append li to list
   
    itemList.appendChild(li)
}

//remove item//

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li=e.target.parentElement;//dot
            itemList.removeChild(li)//dot
        }
    }
}






