/* javascript.js */

function myfunc(){
 document.getElementById("demo").innerHTML="코딩따라하기"; 
 document.getElementById("demo2").style.display='block'; 
 document.getElementById("demo2").innerHTML=Date();
}

function myfunc2(){
	document.getElementById("demo").innerHTML="코딩변환되돌리기";
	document.getElementById("demo2").style.display='none';
}

function myfunc3() {
    var num = document.querySelector("#num").value;
    
    $("thead").text("<caption>To The Automatic</caption>")
    var str=""
    for(var i=1 ; i <= num ; i++){
        $("thead").html("<tr><th>Number</th><th>Contents</th>")
        str += "<tr>"
        for(var j=1; j<= 2; j++){
            str += "<td>"+i+"</td>"
        }
        str += "</tr>"
        
    }
    // $("#result").html(str);
    $("tbody").html(str)
    $("td:nth-child(2)").html("")
    
    var str2 =""
    /* let num =
    document.querySelector("#num").value;
    let str = ""
    str += "<table border=1 width=80% align=center>"
    for (let i = 1; i <= num ; i++){
        str += "<tr>"
        for(let j=1; j <= 2; j++){
            str += "<td>"+i+"</td>"
        }
        str += "</tr>"
    }
        str += "</table>"
        document.getElementById("result").innerHTML = str ;
        console.log(num) */
}

function myfunc4() {
    $('#num').val('');
    // document.getElementById("result").innerHTML = "";
    //$('#result').html('');
    $("tbody").html("");
    $("thead").html("")
}
	
