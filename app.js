let file ="https://jsonplaceholder.typicode.com/users";
fetch(file)
    .then(response =>
        response.json()
    )
    .then(data =>{
        console.log(data)
       let placeholder = document.getElementById("data-output");
       out = "";
       for (let item of data){
         out += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address[ "street"]}</td>
            <td>${item.address[ "suite"]}</td>
            <td>${item.address[ "city"]}</td>
            <td>${item.address["zipcode"]}</td>
            <td>${item.geo}</td>
            <td>${item.phone}</td>
            <td>${item.website}</td>
     
        </tr>`
      
       };
      placeholder.innerHTML = out;
       })
      
       .catch (error =>
           console.log("data not fetched", error)
        )
       

         






       