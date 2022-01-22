function reverse (text){
    if (typeof text == "string"){
        let hasil="";
        let hasil2="";
        let find= "";
        x=0;
        while (x <= text.length){
            if (text[x]){
                find = find + text[x];
            }
            if ( text[x]==" "){
                hasil = find + hasil;
                find ="";
            }
            if (x==text.length){
                hasil2 = find + " " + hasil;
                find="";
            }
            x++;
        }
        console.log(hasil2);
    } else {
        console.log("input teks salah")
    }
}

reverse("Saya belajar Javascript")