let inputDiv = document.querySelector('.inputDiv');
let input = document.getElementById('input');
let button = document.getElementById('button');
let contentDiv = document.querySelector('.contentDiv');
let list = document.querySelector('.list')
let count = 0;
button.addEventListener('click', add);
input.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    add();
  }
});
count = 0;
function add() {
  for (let g = 0; g < input.value.length; g++) {
    console.log(input.value[g]);
    if (input.value[g] == ' ') {
      input.value = "";
      count++;
    }
  }
  if (input.value != "" && count != input.value.length) {
    let newListItem = document.createElement('div');
    let newItem = document.createElement('li');
    let deleteBut = document.createElement('button');
    deleteBut.classList.add('deleteBut');
    deleteBut.innerText = 'Delete';
    let bool = true;

    newItem.innerText = input.value;

    newListItem.append(newItem);
    newListItem.append(deleteBut);
    contentDiv.append(newListItem);
    input.value = "";
    deleteBut.addEventListener('click', function () {
      deleteBut.parentElement.remove();
    });


    //sorting
    let sorting = document.querySelector('.sort');
    sorting.addEventListener('click', function () {
      if (bool) {
        bool = false;
        let arr = [];
        let a = document.querySelectorAll('li');
        a.forEach(el => {
          arr.push(el.innerText);
        })
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
          let z = document.querySelectorAll('li')[i];
          z.textContent = arr[i];
        }
      }
      else {
        bool = true;
        let arr = []
        let a = document.querySelectorAll('li');
        a.forEach(el => {
          arr.push(el.innerText);
        })
        arr.sort();
        arr.reverse();
        for (let i = 0; i < arr.length; i++) {
          let z = document.querySelectorAll('li')[i];
          z.textContent = arr[i];
        }
      }
    })

  }
}