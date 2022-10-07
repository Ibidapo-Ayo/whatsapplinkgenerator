// let input = document.querySelector("#in");
// let output = document.querySelector("#out");

// input.onkeyup = function(){
//    if (input == "") {
//        output.innerHTML = "Text goes here";
//    }else{
//     output.innerHTML = '<sup>' + input.value + '</sup>' + '<sub>' + input.value + '</sub>';
//    }
// }

// function Generate() {
//     var numbers = document.querySelector("#numbers").value
// var messages = encodeURIComponent(document.querySelector("#messages").value)

// var link = "https://wa.me/" + numbers+"/text="+messages

// var result = document.createElement("input");
// result.value = link;
// result.className = "mt-2"
// document.querySelector("form").appendChild(result)


// }

var generate_btn = document.querySelector("#generate-btn");
var wa_link = document.querySelector("#wa-link")
 var link_container = document.querySelector("#link_container")
 var copy_btn = document.querySelector("copy-btn");
 var alert_error = document.querySelector(".alert-danger");


generate_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    WhatsappGen();
})
function WhatsappGen() {
    var number = document.querySelector("#number").value;
    var message = document.querySelector("#message").value;
   
    if (number == "" | message == "") {
        alert_error.classList.add("active");
    }else{
        link_container.classList.add("active")
        var link = "https://wa.me/+"+number+"/?text="+message;
        wa_link.value = link;
        alert_error.classList.remove("active");
    }
   
}