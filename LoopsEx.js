// for (let i=1; i<=3; i+=1){
// console.log("Hello,World");
// console.log("Pamplets");
// }

// 11,12,13,14,15(Sequences)

// function seq1(){
//     let start=Number(document.getElementById("start").value);
//     let end=Number(document.getElementById("end").value);
//     let output="";
// for(let i=start;i<=end;i+=1){
//     // console.log(i);   
//      output=output+i+"<br>"
//   }
//   document.getElementById("result").innerHTML=output;
// }

// 6,9,12,15

// function seq2(){
//     let start=Number(document.getElementById("start").value);
//     let end=Number(document.getElementById("end").value);
//     let output="";
// for(let i=start;i<=end;i+=3){
//     // console.log(i);
//     output=output+i+"<br>"
//   }
//   document.getElementById("result1").innerHTML=output;
// }

// 9,14,19,24,29

function seq3(){
    let start=Number(document.getElementById("start").value);
    let end=Number(document.getElementById("end").value);
    let output="";
for(let i=start;i<=end;i+=5){
    // console.log(i);
    output=output+i+"<br>"
 }
 document.getElementById("result2").innerHTML=output;
}

// Reverse Sequences

// 5 4 3 2 1

// function revseq(){
//     let start=Number(document.getElementById("start").value);
//     let end=Number(document.getElementById("end").value);
//     let output="";
// for(let i=start;i>=end;i-=1){
//     output=output+i+"<br>"
//     // console.log(i);   
// }
// document.getElementById("result3").innerHTML=output
// }

// 20 19 18 17 16

function revseq1(){
    let start=Number(document.getElementById("start").value);
    let end=Number(document.getElementById("end").value);
    let output="";
for(let i=start;i>=end;i-=1){
    // console.log(i);   
 output=output+i+"<br>"
}
document.getElementById("result4").innerHTML=output;
}

// 14 10 6 2

function revseq2(){
    let start=Number(document.getElementById("start").value);
    let end=Number(document.getElementById("end").value);
    let output="";
for(let i=start;i>=end;i-=4){
    output=output+i+"<br>"
    // console.log(i);   
 }
 document.getElementById("result4").innerHTML=output
}
// ------------------------------------------------------------------------------
//1.function sequence(){
//         let start=Number(document.getElementById("num1").value);
//         let end=Number(document.getElementById("num2").value)
//         for(let i=start;i<=end;i=i+1){
//             document.write(i)
//         }
// }


//2.function seq(){
//     let n1=Number(document.getElementById("n1").value);
//     let n2=Number(document.getElementById("n2").value);
//  for(let i=n1;i<=n2;i++){
//     document.write(i)
//     }
// }       


// Range programs

// Display the even numbers in the range of 1 to 10

// function range(){
//     let start=Number(document.getElementById("start").value);
//     let end=Number(document.getElementById("end").value);
//     let output="";    
//     for(let i=start;i<=end ;i++){
//             let n=i
//             if(n%2===0){
//             output=output+i+"<br>";
//                 // console.log(n);
//             }
//     }
//     document.getElementById("result").innerHTML=output;
// }


// display factorials of each number in the sequence of 1 to 5

// function factorial(){
//     let n=Number(document.getElementById("start").value);
//     let output="";
// for(let j=1;j<=5;j++){
//     let fact=1
//     let n=j
//     for(let i=n;i>=1;i=i-1){
//         fact=fact*i
//     }
//     // console.log("factorial of n =",fact);
//     output=output+j+"! = "+fact+"<br>";
//  }
//  document.getElementById("result").innerHTML=output;
// }

//----------------------Patterns----------------------------------------

//3.function loop(){
//     let n=Number(document.getElementById("rows").value);
//     let output="";
//     for(let j=1;j<=n;j=j+1){
//             for(let i=1;i<=j;i++){
//                 output+="*";
//                 // document.write(i)
//             }
//             // document.write("<br>")
//             output+="<br>"
//         }
// document.getElementById("result").innerHTML =output;
// }

// Patterns on number

//4.function num(){   
//     let n1=Number(document.getElementById("rows").value);
//     let output="";
//     for(let j=1;j<=n1;j++){
//             for(let i=5;i>=j;i=i-1){
//                 // document.write(i)
//                 output+=i;
//             }
//             // document.write("<br>")
//             output+="<br>"
//         }
//         document.getElementById("res").innerHTML=output;
// }


// 123
// 123
// 123
// 123
// 123

//5.function pattern(){
//     let  n=Number(document.getElementById("num").value);
//     let  n1=Number(document.getElementById("num1").value);
//     let output="";
//         for(let j=1;j<=n;j++){
//             // let output=""
//             for(let i=1;i<=n1;i++){
//                 output=output+i
//             }
//     // console.log(output); 
//     output=output+"<br>";
//  }
//  document.getElementById("res").innerHTML=output;
// }

// function pattern1(){
//     let n1=Number(document.getElementById("num1").value);
//     let output="";
//     for(let j=n1;j>=1;j--){
//         for(let i=1;i<=j;i++){
//             output=output+i;
//         }
//         output=output+"<br>"
//     }
// document.getElementById("res1").innerHTML=output;
// }

function pattern2(){
    let n2=Number(document.getElementById("num1").value);
    let output="";
    for(let j=n2;j>=1;j--){
        for(let i=j;i>=1;i--){
            output=output+i+" ";
        }
        output=output+"<br>"
    }
document.getElementById("res2").innerHTML=output;
}
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


// let fact=1
// let i=1
// while(i<=5){
//     fact=fact*i
//     i=i+1
// }
// console.log("factorial are",fact);


