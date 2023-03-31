/* Creați un website care va conține un calculator 
BMI unde poți să introduci numele, anul nașterii, înălțimea și greutatea.
Apăsând pe un buton acesta va calcula BMI.
Folosiți Git pentru a lucra împreună.
Folosiți cunoștințele de HTML și CSS pentru a personaliza site-ul.
Bonus: Creați un form pentru a doua persoană și comparați BMI-urile. */


function BMI( weight1, height1,  weight2, height2) {
    if(name2 === "" && weight2 === "" && height2 === "" && birthday === ""){
        let BMI = weight1 / height1**height1
        return  `BMI-ul tau este ${BMI}`
    }
}
function compareBMI(weight1, height1,  weight2, height2) { 
    let bmiText1 = `BMI a lui ${name1} este mai mare`;
    let bmiText2 = `BMI a lui ${name2} este mai mare`;
    if (weight1 / height1**height1 > weight2 / height2**height2) {
    return bmiText1
} else if (weight1 / height1**height1 < weight2 /height2**height2) {
    return bmiText2
}
    
}
    let name1 = document.querySelector(".name1"),
     weight1 = document.querySelector(".weight1"),
     height1 = document.querySelector(".height1"),
     birthday1 = document.querySelector(".birthday1"),
    
     name2 = document.querySelector(".name2"),
     weight2 = document.querySelector(".weight2"),
     height2 = document.querySelector(".height2"),
     birthday2 = document.querySelector(".birthday2"),

    button1 = document.querySelector(".btn1"),
    button2 = document.querySelector(".btn2"),
    result1 = document.querySelector("#result"),
    result2 = document.querySelector("#result");

    button1.addEventListener("click", function() {
        console.log("am apasat butonul");
        name1 = name1.value;
        weight1= weight1.value;
        height1 = height1.value;
        birthday1 = birthday1.value;
        name2 = name2.value;
        weight2= weight2.value;
        height2 = height2.value;
        birthday2 = birthday2.value;
        let  = BMI(weight1, height1,  weight2, height2)
    console.log(BMI);
    result.textContent = `Numele introdus de tine ${name1} are acest BMI ${BMI}` 
    }),

    button2.addEventListener("click", function() {
        console.log("ai apasat butonul");
        bmiText1 = bmiText1.value;
        bmiText2 = bmiText2.value;
        result.textContent =  console.log(compareBMI);
    })