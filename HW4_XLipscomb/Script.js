//binary code

function Password(){
    let message = document.getElementById("input1").value.trim();
    if(message == ""){
        alert ("User input is blank");
        alert("try agin");
    }else{
    let secret = "cow";
     let encrypt = CryptoJS.AES.encrypt(message, secret);
     let encrypt2 = CryptoJS.HmacSHA1(message, secret);
     let encrypt3 = CryptoJS.HmacSHA224(message, secret);
     let encrypt4 = CryptoJS.HmacSHA256(message, secret);
      
      //document.getElementById("ans1").innerHTML = message;
      document.getElementById("ans1").innerHTML = encrypt;
      document.getElementById("ans2").innerHTML = encrypt2;
      document.getElementById("ans3").innerHTML = encrypt3;
      document.getElementById("ans4").innerHTML = encrypt4;
    }
    // let input = document.getElementById("input1").value.trim(); 
    // document.getElementById("ans1").innerHTML = CryptoJS.AES.encrypt(input1,'nicehatbro',[]);
}

function tob2d(){
    let input = document.getElementById("input2").value.trim(); // 1010
    let length = input.length;
   let  exp = length -1;
   let  counter = 0;
    let sum = 0;

    while( counter < length){
        value = Number.parseInt(input.charAt(counter).toString());
        sum += value * Math.pow(2,exp);
        counter+=1;
        exp -=1;
       
    }
    document.getElementById("ans5").innerHTML = sum.toString();
    
}

function tod2b(){
    let newString = " ";
   let input = parseInt(document.getElementById("input3").value); // 1010
   let x = " ";
   let ans = " ";
   while(input >= 1){
    x += (input % 2).toString();
    input = parseInt(input / 2);
   }
   ans = x;
   for (let i = ans.length -1; i >= 0; i--){
    newString += ans[i];
}
document.getElementById("ans6").innerHTML = newString;
}