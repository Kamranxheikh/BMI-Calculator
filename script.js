const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
      e.preventDefault();
      const height = parseInt(document.querySelector('#height').value);   
      const weight = parseInt(document.querySelector('#weight').value);   
      const result = (document.querySelector('#result'));     
      
      if (height === '' || height < 0 || isNaN(height)){
         result.innerHTML = `Please enter a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)){

       result.innerHTML = `Please enter a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please enter a valid weight ${weight}`;
      } else {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(3);
      result.innerHTML = `<span>${bmi}</span>`;
      if (bmi < 18.5) {
        result.innerHTML += ` - You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += ` - You are normal weight.`;
    } else {
        result.innerHTML += ` - You are overweight.`;
    }
}
});











// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');
    
//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = "Please enter a valid height";
//         result.style.color = "red";
//     } else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = "Please enter a valid weight";
//         result.style.color = "red";
//     } else {
//         // Calculate BMI
//         const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        
//         // Display result
//         result.innerHTML = `Your BMI is ${bmi}`;
//         result.style.color = "black"; // Change color if needed
//     }
// });
