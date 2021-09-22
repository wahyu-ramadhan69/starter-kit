var a,b, hasil ;

// function x(value){
//     a = document.getElementById('angka2').value

//     console.log(a)
//     hasil = value * a
//     document.getElementById('hasil').value = hasil
// }

// function y(value){
//     b = document.getElementById('angka1').value

//     console.log(b)
//     hasil = value * b
//     document.getElementById('hasil').value = hasil
// }

function x(value){

   if(value == 'what'){
       document.getElementById('hasil').value = 'apa'
   }else if(value == 'why'){
       document.getElementById('hasil').value = 'kenapa'
   }else if(value == 'who'){
    document.getElementById('hasil').value = 'siapa'
}else{
        document.getElementById('hasil').value = ''
   }
}