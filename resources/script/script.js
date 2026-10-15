// let listaFiltrada = 
//   compre.toLowerCase().incloud
// )
// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);


let users = ["Pedro", "Ana", "Joana","Diego", "Davi Messias", "Cristiano", "Pedero Renan", "Pedro Rocha", "Paula", "Zacarias"];

let seachUser = prompt("Digite o nome do usuário que deseja buscar:");

// Lembrando que, meu usuário adm não pode mandar em branco a busca. Chamamos isso de tentativa de erros.

if(seachUser === ""){
    console.log("Não pode enviar em branco");
}
else{
    // Retorna o usuário que for encontrado
    let user = users.filter(user =>
        user.toLowerCase().includes(seachUser.toLowerCase().trim()));


    // Devemos tratar também caso a busca não retorne nenhum resultado

    if(user.length === 0){
        // Usuário não encontrado
        console.log("User not found");
        users.push(seachUser);
        console.log(users);
    }
    else{
        console.log("Usuário encontrado: ".concat(user));
        // busca indice do usuário
        let index = users.indexOf(user)
        console.log(index)
        // alterar o elemento
        //users[index] = "Ana Gabrielle";
        // users.splice(3,1)
        users[index] = "novo valor";
        console.log(users)
       users.forEach(user => {
           //read
           console.log(user)
   });
    }
}

 

    




























