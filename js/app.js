const images = [
  'a.png',
  'b.png',
  'c.png',
  'd.png',
  'e.png',
  'f.png'
];

const space = 1;
const fig = 30;
const matrix = [];
let global_cont = 0;
const spaces_array = [];
const images_array = [];

$().ready(function(){
  while(matrix.length < (100/space)){
    const val = get_random_number(0, (100/space)) * space;

    if(!(matrix.includes(val))){
      matrix.push(val);
    }
  }

  cont = 0;
  contimages = 0;
  contspace = 0;

  while(cont < fig){
    
    if(contimages >= images.length){
      contimages = 0;
    }

    if(contspace >= matrix.length){
      contspace = 0;
    }

    spaces_array.push((matrix[contspace] * space));
    images_array.push(images[contimages]);

    cont++;
    contimages++;
    contspace++;
  }

  add_to_container(global_cont);
})

function get_random_number(a, b){
  return Math.floor(Math.random() * b) + a;
}

function add_to_container(cont_int){
  setTimeout(function() {

    $('#container').append('<img style="left: ' + spaces_array[cont_int]  + 'vw;top:-10vh" class="fig rain' + get_random_number(1, 2) + '" src="img/' + images_array[cont_int] + '">');
    global_cont++;
    if(global_cont < images_array.length){
      add_to_container(global_cont);
    }
  }, 250);
}