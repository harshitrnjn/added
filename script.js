var select = document.querySelectorAll(".links>button")
var c = 0
select.forEach(function (element) {
    element.addEventListener("click", function () {
        if (c == 0) {
            element.style.color = "#134F61"
            c = 1
        }
        else {
            element.style.color = "rgb(135 135 135)"
            c = 0
        }
    })
})






var f = document.querySelector(".f")
var c = document.querySelector(".c")
var popup = document.querySelector(".popup")
var cut = document.querySelector(".line i")

c.addEventListener("click", function () {
    popup.style.display = "flex"
})
cut.addEventListener("click", function () {
    popup.style.display = "none"
})


var popup2 = document.querySelector(".popup2")
var cross = document.querySelector(".popup2 .mobilcat .line i")
f.addEventListener("click", function () {
    popup2.style.display = "flex"
})
cross.addEventListener("click", function () {
    popup2.style.display = "none"
    console.log("hello")
})

// let foo = 'baz'
// let bar = 'qux'
// let result = null
// var output=document.querySelector(".output")
// async function doPost () {
//     const res = await fetch('https://app.realtorstat.com/ai/generate-description/', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ "input_content": "backyard" })
//     })
//        .then(response => response.json())
//        .then(response => console.log(JSON.stringify(response)))

//     const json = await res.json()
//     result = JSON.stringify(json)
// }
// output.innerHTML=result;



var card = document.querySelectorAll(".right .cards a")
var signup = document.querySelector(".signup")
var i=document.querySelector(".signup .center i")
var c=0
card.forEach((elem) =>
    elem.addEventListener("click", function () {
        signup.style.display = "flex"
     i.addEventListener("click", function () {
        signup.style.display = "none"   
    })
})
)

// var card = document.querySelectorAll(".right .cards a");
// var signup = document.querySelector(".signup");
// var i = document.querySelector(".signup .center i");
// var c = 0;

// card.forEach((elem) => {
//     elem.addEventListener("click", async function () {
//         if (c == 0) {
//             signup.style.display = "flex";
//             await new Promise((resolve) => {
//                 // Wait for the user to sign in
//                 // You can add your sign-in logic here
//                 // For example, waiting for a form submission or an API call
//                 setTimeout(resolve, 200000000); // Wait for 5 seconds (adjust as needed)
//             });
//             c++;
//         }
//     });
// });

// i.addEventListener("click", function () {
//     if (c == 1) {
//         signup.style.display = "none";
//         c--;
//     }
// });

