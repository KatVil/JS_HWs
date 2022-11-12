let current = 1;
let quantity = 13;

cats = new Array;
cats[0] = new Image();
cats[1] = new Image();
cats[2] = new Image();
cats[3] = new Image();
cats[4] = new Image();
cats[5] = new Image();
cats[6] = new Image();
cats[7] = new Image();
cats[8] = new Image();
cats[9] = new Image();
cats[10] = new Image();
cats[11] = new Image();
cats[12] = new Image();


cats[0].src="./assets/img/cat-217679.jpg";
cats[1].src="./assets/img/cat.jpg";
cats[2].src="./assets/img/catcat.webp";
cats[3].src="./assets/img/kat.webp";
cats[4].src="./assets/img/kitten.jpg"
cats[5].src="./assets/img/mmrmrmrm.webp"
cats[6].src="./assets/img/mr.jpg"
cats[7].src="./assets/img/mrmr.webp"
cats[8].src="./assets/img/mrmr.webp"
cats[9].src="./assets/img/mur.jpg"
cats[10].src="./assets/img/purrr.jpg"
cats[11].src="./assets/img/redcar.jpg";
cats[12].src="./assets/img/mur.webp";

function ChangeMeForward(){
        if (current === 13){
            document.images['purr'].src=cats[0].src;
        }
        else{
            current++;
            document.images['purr'].src=cats[current+1].src;
        }
}
function ChangeMeBackward(){
        if (current === 1){
            document.images['purr'].src=cats[12].src;
        }
        else{
            current--;
            document.images['purr'].src=cats[current-1].src;
        }
}