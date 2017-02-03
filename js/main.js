// HELPER CLASS
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
// TASK 1 -- Show/Hide Nav
document.querySelector('#hide-nav button').addEventListener('click',function(evt){
  var navBtnEl = document.querySelector('.nav-menu')

  if (navBtnEl.className === 'nav-menu'){
    navBtnEl.className = 'nav-menu-hidden'
  }else{
    navBtnEl.className = 'nav-menu'
  }

})

// TASK 2 -- Select an Icon
var wishListButtonEl = document.querySelectorAll('.option')

forEach( wishListButtonEl, function(domElement, index){
  domElement.addEventListener('click', function(evt){
    // console.log('event heard')

    var currentTargetDom = evt.currentTarget
    var targetDom = evt.target

    if(currentTargetDom.className === "option"){
      currentTargetDom.className = "option selected"

    }else{
      currentTargetDom.className = "option"
    }
  })
})

// TASK 3 -- Move Item From List to List

var buttonNumberEl = document.querySelectorAll('.add-points')
var totalSumEl = document.querySelector('.total-points')

forEach (buttonNumberEl, function(domElement, index){

  domElement.addEventListener('click', function(evt){
    var targetDom = evt.target
    if (targetDom.className === 'point'){

    var circleNumber = parseInt(targetDom.innerHTML)
    var totalSumNum = parseInt(totalSumEl.innerHTML)

    var newTotal = totalSumNum + circleNumber
    totalSumEl.innerHTML = newTotal

      // console.log(newTotal)

    }else{
      // alert('Click Inside the Circles to Add')
    }
  })

})

// TASK 4 -- Add Guest to List

var bothListEl = document.querySelectorAll('#list-2-list li')
var goodStandingList = document.querySelector('.good-standing-list')
var probationList = document.querySelector('.probation-list')


forEach (bothListEl, function(domElement, index){
  domElement.addEventListener('click', function(evt){
    if (domElement.parentNode === goodStandingList){
      probationList.appendChild(domElement)
    }else if (domElement.parentNode === probationList){
      goodStandingList.appendChild(domElement)
    }
  })
})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
  
