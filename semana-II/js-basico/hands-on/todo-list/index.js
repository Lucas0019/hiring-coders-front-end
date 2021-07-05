const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit',function(e) {

  e.preventDefault()

  const listName = newListInput.value
  if(listName === null || listName === '') return // Veificando se tem algo no input

  const list = createList(listName)
  newListInput.value = null // Limpando a lista

  lists.push(list)
  render()
})

function  render() {
  clearElement(listContainer)
  lists.forEach(function(list) {
    const item = document.createElement('li')
      item.classList.add('item')
      item.innerText = list.name
      listContainer.appendChild(item)
  })
}

function createList(name) {
  return {id: Date.now().toString(), name: name};
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()