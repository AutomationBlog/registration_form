let form = document.forms["form-control"];
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
  let firstName = document.getElementById("fname").value;
  console.log(firstName);
  let lastName = document.getElementById("lname").value;
  console.log(lastName);
  let address = document.getElementById("address").value;
  console.log(address);
  let pincode = document.getElementById("pincode").value;
  console.log(pincode);
  let state = document.getElementById("state").value;
  console.log(state);
  let country = document.getElementById("country").value;
  console.log(country);
  let gender = document.forms["form-control"].gender.value;
  console.log(gender);
  let favFoods = document.querySelectorAll(".fav-foods");
  let checkedFoods = [];
  for (let food of favFoods) {
    if (food.checked == true) {
      checkedFoods.push(food.value);
    }
  }
  let flag;
  if(checkedFoods.length<2){
    document.getElementById("chk_option_error").style.visibility="visible";
    flag = false;
  } else {
    document.getElementById("chk_option_error").style.visibility="hidden";
    flag = true;
  }

  let formData = {
    "firstName": firstName, 
    "lastName": lastName, 
    "address": address,
    "pincode": pincode,
    "gender": gender,
    "favfood": checkedFoods.join(', '),
    "state": state,
    "country": country
 }

 let out = `
    <p>First Name:  <span>${formData.firstName}</span></p>
    <p>Last Name:  <span>${formData.lastName}</span></p>
    <p>Address:  <span>${formData.address}</span></p>
    <p>Pincode:  <span>${formData.pincode}</span></p>
    <p>Gender:  <span>${formData.gender}</span></p>
    <p>Fav food:  <span>${formData.favfood}</span></p>
    <p>State:  <span>${formData.state}</span></p>
    <p>Country:  <span>${formData.country}</span></p>
   `;
if(flag){
    document.querySelector(".out code").innerHTML = out;
    const element = document.querySelector(".out code");
    element.scrollIntoView();
}
}
   
