import './style.css'
import 'flowbite/dist/flowbite.min.js'

const fetchBtn = document.querySelector("#fetch-btn")
const tableTemplate = document.querySelector(".table-template")
const table = document.querySelector("#table")


const handleFetchBtn = () => {
  fetch("https://fakestoreapi.com/products").then(res => res.json()).then((tasks) => tasks.forEach(el => {

   table.classList.remove('hidden');
   const tableRow = document.createElement('tr');
   tableRow.classList.add('bg-white','dark:bg-gray-800','border');

   tableRow.innerHTML = `<th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      ${el.title}
                  </th>
                  <td class=" px-6 py-4">
                  ${el.price + '$'}
                  </td>
                  <td class=" px-6 py-4">
                  ${el.category}
                  </td>
                  <td class=" px-6 py-4">
                    <img src="${el.image}">
                  </td>
                  <td class=" px-6 py-4">
                  ${el.rating.rate}
                  </td>`
   
                  tableTemplate.append(tableRow)
                  fetchBtn.removeEventListener('click',handleFetchBtn)
                 
  }))
  
}
 
 fetchBtn.addEventListener('click',handleFetchBtn)