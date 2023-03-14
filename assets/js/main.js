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