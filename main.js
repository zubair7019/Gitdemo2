
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')

//form submit event//

form.addEventListener('submit', addItem);
//delete event//
itemList.addEventListener('click',removeItem)
//filter event//
filter.addEventListener('keyup',filterItem)


//addd Item//
function addItem(e){
    e.preventDefault()

    //get input value//
    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;

    //create new li item//
    var li=document.createElement('li')
    var li=document.createElement('li')
    //add class
    li.className='list-group-item'
    li.className='list-group-item'
    //add text node with input value//
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(newItem2))

  ////create button///
  var deletebtn=document.createElement('button')
  deletebtn.className='btn btn-danger btn-sm float-right delete'


   var editbtton=document.createElement('button')
   editbtton.className='btn btn-danger btn-sm float-right'
   

   
  //Append text node//
  deletebtn.appendChild(document.createTextNode('X'))

  editbtton.appendChild(document.createTextNode('Edit'))
   editbtton.style.background='coral'
   
  //append button to li//
  li.appendChild(deletebtn)

  li.appendChild(editbtton)

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

 function editbtton(li)
 {

 var editbtn=document.createElement('button')
 editbtn.className='btn btn-danger btn-sm float-right'
 editbtn.appendChild(document.createTextNode('Edit'))
 editbtn.style.background='coral'
li.appendChild(editbtn)
}
  
//  console.log(document.getElementsByClassName('list-group-item'))

let liItem=document.getElementsByClassName('list-group-item')

for(let i=0;i<liItem.length;i++)
{
    console.log(liItem[i])
    editbtton(liItem[i])
}



function filterItem(e)
{
    //convert lowercase
    var text=e.target.value.toLowerCase();
    //get li
   var items= itemList.getElementsByTagName('li')
//    console.log(items)
    //convert yo an array

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    
}
