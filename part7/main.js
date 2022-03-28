// const emailEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function(){
//     emailEl.focus()
// })

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })



// import Dropdown from 'bootstrap/js/dist/dropdown'

// const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
// dropdownElementList.map(function (dropdownToggleEl) {
//   return new Dropdown(dropdownToggleEl)
// })



// 모달 섣능 최적화
import Modal from 'bootstrap/js/dist/modal'

var myModal = new Modal(document.getElementById('exampleModal'), {
    backdrop:"static"
})