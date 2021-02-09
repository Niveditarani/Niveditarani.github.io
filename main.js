const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav-list");
const menuItem = document.querySelectorAll(".nav-item");
//main toggle
menuBtn.addEventListener("click", () => {
    toggle();
});
//toggle on item; click if open
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if(menuBtn.classList.contains('open')){
            toggle();
        }
    });
});
function toggle(){
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

//For Contact Form
//Validating empty fields
function check_empty(){
    if(document.getElementById('name').value== "" || document.getElementById('email').value== "" || document.getElementById('msg').value== ""){
        alert("Please fill all the fields!");
    } else{
        document.getElementById('form').submit();
        alert("Message Sent")
    }
}
//Function to display contact popup
function div_show(){
    document.getElementById('popupPage').style.display= "block";
}
//function to hide contact popup
function div_hide(){
    document.getElementById('popupPage').style.display= "none";
}

