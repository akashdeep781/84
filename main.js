var student_array=[];

function submit(){
    var student_1=document.getElementById("name_1").value;
    var student_2=document.getElementById("name_2").value;
    var student_3=document.getElementById("name_3").value;
    var student_4=document.getElementById("name_4").value;

    student_array.push(student_1);
    student_array.push(student_2);
    student_array.push(student_3);
    student_array.push(student_4);
    console.log(student_array);

    document.getElementById("display_name").innerHTML=student_array
}

