let $ = document
const registerForm = $.querySelector('.register-form')
const nameInput = $.querySelector('.name-input')
const passwordInput = $.querySelector('.password-input')
const emailInput = $.querySelector('.email-input')
const usersTableElem = $.querySelector('table')

let db = null
let objectStore = null


window.addEventListener("load", ()=>{
    let DBOpenReq = indexedDB.open("Alireza",1)

    DBOpenReq.addEventListener('error',err=>{alert("Error",err)})
    DBOpenReq.addEventListener('success',(event)=>{
        db = event.target.result
        getUsers()
        // if (db.objectStoreNames.contains('users')) {
        //     db.deleteObjectStore('users')
        // }
    })
    DBOpenReq.addEventListener('upgradeneeded',(event)=>{
        console.log(event.target.result);
        db = event.target.result
        objectStore = db.createObjectStore('users', {
            keyPath: 'userID'
        })
    })
})

registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    addUsers()
})


let addUsers = ()=>{
    let newUser = {
        userID: Math.floor(Math.random() * 9999),
        name : nameInput.value,
        pass : passwordInput.value,
        email : emailInput.value
    }
    
    let tx = createTx('users',"readwrite")
    let store = tx.objectStore('users')
    let request = store.add(newUser)
    request.addEventListener('success',()=>{
        clearInputs()
        getUsers()
    })
}


let createTx = (storeName , mode)=>{
    tx = db.transaction(storeName,mode)
    return tx
}
let clearInputs = ()=>{
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''    
}
let getUsers = ()=>{
    let tx = createTx('users','readonly')
    let store = tx.objectStore('users')
    let request = store.getAll()
    let users = request.addEventListener('success',event=>{
       
        let allUsers = event.target.result
        usersTableElem.innerHTML = `<tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Password</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>`

        for(let user of allUsers){

            usersTableElem.insertAdjacentHTML('beforeend',
            `<tr>
            <td>${user.userID}</td>
            <td>${user.name}</td>
            <td>${user.pass}</td>
            <td>${user.email}</td>
            <td><a href="#" onclick='deleteUser(${user.userID},event)'>Remove</a></td>
        </tr>`)
        }
        
    //     innerHTML += allUsers.map(user => {
    //         return `<tr>
    //                     <td>${user.userID}</td>
    //                     <td>${user.name}</td>
    //                     <td>${user.password}</td>
    //                     <td>${user.email}</td>
    //                 </tr>`
    //     }).join('')

    })
    
}
function deleteUser(userId,event){
    event.preventDefault()
    let tx = createTx('users',"readwrite")
    let store = tx.objectStore('users')
    let request = store.delete(userId)
    request.addEventListener('success',()=>{
        getUsers()
    })
}
