
// Register  https://b1messenger.imatrythis.tk/register
// requete POST
    // corps {
//              username: "luc",
//                password : "motdepasse"
//                  }

// Login https://b1messenger.imatrythis.tk/login
// requete POST
// corps {
//              username: "luc",
//                password : "motdepasse"
//                  }

// "dsfkjsdfkjhdskjfhs:<fbdsfn;:ndsbf;snbdf;,sdbfnb"


// Liste des messages  https://b1messenger.imatrythis.tk/api/messages
// requete GET
// Headers
//          Authorization : `Bearer ${token}`

//poster un nouveau message
//requete POST  https://b1messenger.imatrythis.tk/api/messages/new
// Headers
//          Authorization : `Bearer ${token}`
//Corps de requete :
// {
//  "content":"bla bla bla bla"
// }


const baseUrl = "https://b1messenger.imatrythis.tk/"

// const corpsRequeteRegister = {
//     username:"jeanpascal",
//     password : "pascalou"
// }
// //register
// const registerParams = {
//         method : 'POST',
//         headers : {"Content-type":"application/json"},
//         body : JSON.stringify(corpsRequeteRegister)
//
// }
//
// fetch(`${baseUrl}register`, registerParams)
// .then(response=>response.json())
// .then(data=> console.log(data))


//Login : demander un token

// const corpsRequeteLogin = {
//     username:"jeanpascal",
//     password : "pascalou"
// }
//
// const loginParams = {
//         method : 'POST',
//         headers : {"Content-type":"application/json"},
//         body : JSON.stringify(corpsRequeteLogin)
//
// }
//
// fetch(`${baseUrl}login`, loginParams)
// .then(response=>response.json())
// .then(data=> console.log(data))

//const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NjcyODksImV4cCI6MTY5OTk3MDg4OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamVhbnBhc2NhbCJ9.BI7JPJ2CnbZ7qTBhdTUEz9pCzBWFfREHptF3E1sd2JDIMW9r8Hq8qnfNc5Y1VItzsNNPdsyWOx-HGZnpDoDhyLcc8nXxOha11dKXRmmUNpfu6kW1OSwZfOew7Owr0cDFPtZyASHMdk3EKZXGoUwINN_csVfZjDdlbO1c3y3LhUtCHIBDhPJmfIWluPRxn2LuLY8aOyrzzLxn1_8ANedKVmCbRwgMyZdJnsLtBw3EIWv7XuSMyOSw1uYKev19V72k_yDmlcVmrzJ8aGfkh4crVD_vdtcXlpmTOywAGelsyiCnmVkBf3fxn8hDsWV87ysGomDJSR5hjbFJNUYblxsH6Q"

// recuperer liste des messages


const messagesListParams = {
    method : 'GET',
    headers : {"Content-type":"application/json",
        "Authorization":`Bearer ${token}`},


}

const content = document.querySelector('.content')


fetch(`${baseUrl}api/messages`, messagesListParams)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        data.forEach((message)=>{
            content.innerHTML+= `<p>${message.content}</p>`
        })
    } )
