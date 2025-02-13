let list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS  = []

filter.addEventListener('input', (event)=>{
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user)=>{
        return user.name.toLowerCase().includes(value)
    })
    render(filteredUsers)
})

async function start() {
    try {
        list.innerHTML = `<p class="list-group-item">Loading...</p>`
        const resp = await fetch('https://fakestoreapiserver.reactbd.com/users')
        const data = await resp.json()

       setTimeout(()=>{
        USERS = data
         render(data)
       },2000)     

    } catch(err){
        list.style.color = 'orange'
        list.innerHTML = `<p>${err.message}</p>`
    }
  }

  function render(users=[]){
    if(users.length === 0){
        list.style.color = 'yellow'
        list.innerHTML = `<p>Nothing was found</p>`
    } else {
    const html = users.map(toHtml).join('')
    list.innerHTML = html
    }
  }

  function toHtml(user){
    return `
    <li class="list-group-item">${user.name}</li>
    `
  }
start()


// const wikidataScraper = async (url) => {
//   try{
//     const response = await fetch(url, {
//         headers: { 'Accept-Encoding': 'gzip,deflate' } 
//       });

//       if(!response.ok){
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }
//   const data = await response.json();

//   if(!data.entities || Object.keys(data.entities).length === 0){
//     return { id: "error", label: "error", description: "error" };
//   }
  
//   const entityId = Object.keys(data.entities)[0];
//   const entityData = data.entities[entityId];

//   const label = entityData.labels?.en?.value || 'No Label'
//   console.log(entityData.labels)
//   const description = entityData.descriptions?.en?.value || 'No Description'
  
  
//   return {
//     id: entityId,
//     label: label,
//     description: description
//   }
// } catch(err) {
//     console.error('error', err)
//     return{
//         id: 'error',
//     label: 'error',
//     description: 'error'
//     } 
// }
// }

// wikidataScraper("https://www.wikidata.org/wiki/Special:EntityData/Q42.json")
//   .then(console.log);
