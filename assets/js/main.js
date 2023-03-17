window.onload=function(){
  function zoom (id){
    let zoom = document.getElementById("zoom-image");
    let image = document.getElementById(id).cloneNode();
    image.id = 'clone'+id;
    zoom.appendChild(image);
    zoom.classList.add('zoom-in');
  }

  function zoomOut(){
    let zoom = document.getElementById("zoom-image");
    let image = document.querySelector('img');

    zoom.classList.remove('zoom-in');
    zoom.removeChild(image)
  }

  let form = document.getElementById("formCharacters");
  let arrList = [];

  function create(event){
    event.preventDefault();

    let formData = new FormData(form);
    let data = JSON.stringify(Object.fromEntries(formData.entries()));
    
    localStorage.setItem('personagem', data);

    form.reset();

    list();
  }

  function list(){
    let list = document.getElementById('lista-personagens');
    document.getElementById('npcs').classList.add('enable');

    let storage = JSON.parse(localStorage.getItem('personagem'));

    let personagem = document.createElement('div');
    personagem.classList.add('item');
    personagem.innerHTML = '<p><b>Nome: </b>' + storage.name + '</p><p><b>Cidade: </b>'+ storage.city +'</p><p><b>Classe: </b>'+ storage.class +'</p><p><b>Raça: </b>'+ storage.race +'</p><p><b>Arma: </b>'+ storage.weapons +'</p><p><b>Aplica Tutorial? </b>'+ storage.tutorial +'</p>';

    list.appendChild(personagem);
  }

  form.addEventListener("submit", create);
}