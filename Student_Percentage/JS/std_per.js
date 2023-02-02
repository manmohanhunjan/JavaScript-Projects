function eng(){
    var e_marks = document.getElementById('e1').value;
    var marks = if(e_marks>=90){
        console.log("A");
    } elseif(80>=e_marks>=90);{
        console.log("B");
    }elseif(70>=e_marks>=80);{
        console.log("C");
    }else{
        console.log("failed")
    }
    document.getElementById("result1").innerHTML = marks;
}
function mat(){
    var e_marks = document.getElementById('m1').value;
    var marks = if(e_marks>=90){
        console.log("A");
    } elseif(80>=e_marks>=90);{
        console.log("B");
    }elseif(70>=e_marks>=80);{
        console.log("C");
    }else{
        console.log("failed")
    }
    document.getElementById("result2").innerHTML = marks;
}
function sci(){
    var e_marks = document.getElementById('s1').value;
    var marks = if(e_marks>=90){
        console.log("A");
    } elseif(80>=e_marks>=90);{
        console.log("B");
    }elseif(70>=e_marks>=80);{
        console.log("C");
    }else{
        console.log("failed")
    }
    document.getElementById("result3").innerHTML = marks;
}
