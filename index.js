 // function celciusFahrenheit(celsius) 
// {
//   let celciusTemp = celsius;
//   let celsiusFahrenheit = celciusTemp * 9 / 5 + 32;
//   let suhuCelcius = celciusTemp + celsiusFahrenheit;
//   console.log(suhuCelcius);
// }

// function fahrenheitCelcius(fahrenheit) 
// {
//   let fahrenheitTemp = fahrenheit;
//   let fahrenheitToCelcius = (fahrenheitTemp - 32) * 5 / 9;
//   let suhuFahrenheit = fahrenheitTemp + fahrenheitToCelcius;
//   console.log(suhuFahrenheit);
// } 
// celciusFahrenheit(80);
// fahrenheitCelcius(80);

//quest 1
// function celciusFahrenheit(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
  
//     return fahrenheit;
//   }
  
//   celciusFahrenheit(30);

//   //quest 2
//   //celcius
//   function suhu() {
//     function celciusFahrenheit(celsius) {
//        var fahrenheit = Math.round((celsius * (9/5)) + 32);
//        return fahrenheit;
//     }
//     //fahrenheit
//     function fahrenheitCelcius(fahrenheit) {
//        var celsius = Math.round((fahrenheit - 32) * (5/9));
//        return celsius;
//     }
 
//     //melakukan cek jika celcius atau temperatur yang dipilih
//     var seleksiSuhu = document.getElementById("perbedaan");
//     var nilaiSuhu = seleksiSuhu.options[seleksiSuhu.selectedIndex].value;
 
//     //input cek hasil dalam input
//     var angka = document.getElementById("suhu").value;    
 
//     var hasil;
    
//     if (nilaiSuhu == 1) {
//        hasil = celciusFahrenheit(angka);
//        document.getElementById("hasil").innerHTML = "= " + hasil + "Fahrenheit";
//     } else {
//        hasil = fahrenheitCelcius(angka);
//        document.getElementById("hasil").innerHTML = "= " + hasil + "Celsius";
//     }

//  }
// function convertToF(celsius) {
//   // make the given fahrenheit variable equal the given celsius value
//   // multiply the given celsius value by 9/5 then add 32
//   let fahrenheit = celsius * 9/5 + 32
//   // return the variable fahrenheit as the answer
//   return fahrenheit;
// }

// convertToF(30);




 function fahrenheit(celsiusTemp) {
   if(typeof (celsiusTemp) === 'string' ){
      return 'Only accept value types of Number';
   }else{
      return Math.floor(celsiusTemp * (9/5) + 32);
   }
 }
 const hasil = fahrenheit("40");
 console.log(hasil);