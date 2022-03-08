async function GetRepos () {
    const response = await fetch ('https://api.github.com/users/SamiraGo/repos');
    const data = await response.json();
    
    document.querySelector('.ProjektHämtning').innerHTML= data[0].name;
    document.querySelector('.Projektbeskrivning').innerHTML= data[0].description;
}
GetRepos();