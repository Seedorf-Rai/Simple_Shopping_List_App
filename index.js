// Getting new Item to the list

var getInput = document.querySelector('#input-item')
getInput.addEventListener('keyup', () => {
  console.log(getInput.value);
})

var inputBtn = document.querySelector('#in-btn')
console.log(inputBtn);

var inputVal;
inputBtn.addEventListener('click', function (e) {
  var getListItems = document.querySelectorAll('.list-item')
  e.preventDefault();
  if (getInput.value) {
    inputVal = getInput.value
  } else {
    inputVal = null;
  }
  if (inputVal) {
    var x = true;
    getListItems.forEach((el)=>{
      console.log(inputVal , "this is inside the function");
      if(el.firstElementChild.textContent == inputVal) {
        x = false;
        document.querySelector('.invalid').style.display = 'block'
        setTimeout(()=>{
        document.querySelector('.invalid').style.display = 'none'
          
        },3000)

      }
    })
    if(x){
      var newDiv = document.createElement('div')
      newDiv.className = 'list-item'
      var newBtn = document.createElement('button')
      newBtn.setAttribute('id', 'rem-btn')
      newBtn.innerHTML = 'X';
      var newH = document.createElement('h5')
      newH.innerHTML = inputVal
      newDiv.appendChild(newH)
      newDiv.appendChild(newBtn)
      const parentDiv = document.getElementById('list')
      parentDiv.appendChild(newDiv)
      const getClear = document.querySelector('.clear-all')
      getClear.style.display = 'block'
      console.log(newDiv);
      getInput.value = ''
      console.log(newBtn);
    }
  }
})

// Delete a single element
// const dltBtn = document.querySelectorAll
var deleteList = document.querySelector('#list')
deleteList.addEventListener('click', function (e) {
  if (e.target.id == 'rem-btn') {
    var getParent = e.target.parentElement
    deleteList.removeChild(getParent)
    const getClear = document.querySelector('.clear-all')
    console.log(deleteList);
    var len = deleteList.children.length
    console.log(len);
    if (len == 0) {
      getClear.style.display = 'none'
    }
  }

})

function check() {
  const confirmed = window.confirm('Are you sure?');

  if (confirmed) {
    // User clicked OK
    return true;
  } else {
    // User clicked Cancel
    return false;
  }
}
const getClear = document.querySelector('.clear-all')
getClear.addEventListener('click', (e) => {

  if (check()) {
    deleteList.innerHTML = ''
    getClear.style.display = 'none'
  }
})

// Filter Logic

const getFilter = document.querySelector('.filter')
getFilter.addEventListener('keyup', (e) => {
  var getListItems = document.querySelectorAll('.list-item')

  if (e.target.value.length == 0) {
    getListItems.forEach((el) => {
      el.style.display = 'flex';
      console.log(el.style.display);
      getClear.style.display = 'flex';
      return;
    })
  } else {

    // Gets all the list
    const getList = document.querySelector('.list')

    getListItems.forEach((el) => {
      el.style.visibility = 'none'
      getClear.style.visibility = 'none';

    })
    console.log(getListItems);
    getListItems.forEach((el) => {
      //  if( el.firstElementChild.textContent == e.target.value ){
      //    el.style.display = 'flex'
      //  }
      //  else{
      //   el.style.display = 'none'
      //  }
      // console.log(typeof e.target.value);
      for(var i = 0 ; i < e.target.value.length ; i++){
        if( el.firstElementChild.textContent[i] == e.target.value[i] ){
             el.style.display = 'flex'
           }
           else{
            el.style.display = 'none'
           }
      }
    })
  }
})

const rightClick = document.querySelector('img')
rightClick.addEventListener('contextmenu', () => {

})

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  // console.log(e.offsetX);
  // console.log(e.offsetY);
})

// const img = document.querySelector('img')
// img.addEventListener('drag', (e) => {
//   const getH = document.querySelector('h1')
//   getH.textContent = `X ${e.offsetX} Y ${e.offsetY}`
// })

// Adding functionalities based on keys

const x = document.getElementById('input-item')
x.addEventListener('keypress', (e) => {
  //  console.log(e.key);
  //  console.log(e.key , e.shiftKey);
  //  console.log(e.key , e.ctrlKey);
  //  console.log(e.key , e.altKey);

})