 // tempat input user
let input = 'cinta orang purwodadi';

    // calculate amount of input 
let aoi = input.length;  

    // change input to array
let ita = input.split('');  

    // jika ada huruf vocal akan diganti dengan i
let vocal = ['a', 'i', 'u', 'e', 'o'];

    // tempat hasil proses mengganti huruf vocal ke huruf i
let result = [];
 

// document.getElementById('button_form').addEventListener('click', tambah());

// tambah = () => {

//     input1_form = document.getElementById('input_form').value;
//     console.log(input_form);
// }

let i = 0;
while (i < aoi) {
    
    result.push(ita[i])
     
    let j = 0;
      while (j < vocal.length) {
          
           if(vocal[j] == ita[i]) {               
               result.splice(i);
               result.push('o');
            }
        j++;
    }
    i++;
}

    // output proses diatas keconsole
console.log(result.join(''));