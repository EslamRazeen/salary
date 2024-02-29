let Name=document.getElementById("name");
let salary=document.getElementById("salary");
let ads=document.getElementById("ads");
let month=document.getElementById("month");
let submit=document.getElementById("submit");
let del=document.getElementById("delete");
// let delete =document.getElementById("delete");

let arr;
if(localStorage.name != null){
    arr=JSON.parse(localStorage.name);
}
else{
    arr=[];
}


submit.onclick=function(){
    let result =+salary.value + +ads.value;
    let obj={
        Name:Name.value,
        salary:+salary.value+ +ads.value,
        ads:ads.value,
        month:month.value,
    }
    arr.push(obj);
    show();
    localStorage.setItem("name", JSON.stringify(arr));
}
show();

function show(){
    let table=``;
    for(let i=0;i<arr.length;i++){
    table+=`
    <tr>
        <td>${arr[i].Name}</td>
        <td>${arr[i].salary}</td>
        <td>${arr[i].ads}</td>
        <td>${arr[i].month}</td>
    </tr>
    `
    }

    document.getElementById("tbody").innerHTML=table;
    
}

function delall(){
    window.localStorage.clear();
    arr=[];
    show();
}