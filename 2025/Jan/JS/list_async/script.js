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
