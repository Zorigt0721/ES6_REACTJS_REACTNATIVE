function AgeVerification(Age){
        var Answer = Age > 16 ? "Goimon idej bolno" : "16-aas doosh nasand goimon ogohgui";
        alert(Answer);
        // alert(Age > 16 ? "Goimon idej bolno" : "16-aas doosh nasand goimon ogohgui");
}

// ?-ын тэмдэг нь Js дээр үнэн гэсэн утгыг агуулж байдаг
// :-ын тэмдэг нь Js дээр худал үгүй бол гэсэн утгыг агуулж байдаг

function AgeVerification2(Age){
        if(Age > 16){
            alert("Goimon idej bolno");
        }else{
            alert("16-aas doosh nasand goimon ogoghgui");
        }
}