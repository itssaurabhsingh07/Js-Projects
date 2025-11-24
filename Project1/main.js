const data = [
    {
        id: '1',
        question: "what is you name is necessary",
        answer:
            "my Name is John Doe"
    },
    {
        id: '2',
        question: "what is you name is necessary",
        answer:
            "my Name is John Doe"
    },
    {
        id: '3',
        question: "what is you name is necessary",
        answer:
            "my Name is John Doe"
    },
    {
        id: '4',
        question: "what is you name is necessary",
        answer:
            "my Name is John Doe"
    },
]
const accordionwrapper = document.querySelector('.accordion')

function createAcccordionData () {
    accordionwrapper.innerHTML = data.map(dataItem=>  `
        <div class="accordion_item"> 
        <div class="accordion_title"> 
        <h3>${dataItem.question} </h3>
        <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class="accordion_content">
        <p> ${dataItem.answer}</p>
        </div>
        </div>`).join("")
}
createAcccordionData ()

const getAccordionTitles= document.querySelectorAll('.accordion_title')
console.log('===============');
console.log(getAccordionTitles);
console.log('================')

getAccordionTitles.forEach(currentItem=>{
    currentItem.addEventListener('click',()=>{
      if (currentItem.classList.contains('active')) {
        currentItem.classList.remove('active')
      } else {
        let getAlreadyActiveClasses = document.querySelectorAll('.active')

        getAlreadyActiveClasses.forEach(currentActiveItem=>{
            currentActiveItem.classList.remove('active')
        })
        currentItem.classList.add('active')
        }
    })              
})