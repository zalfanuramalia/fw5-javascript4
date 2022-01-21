function reverse (text){
    if (text == "string"){
        let hasil ="";
        let find = "";
        x = text.length - 1;
        for (i = 0; i <= x; i++){
            find = find + text[i];
            if ( text[i]==" "){
                hasil = find + hasil;
                find ="";
            }
            if (x==text.length){
                hasil = find + " " + hasil;
                find="";
            }
            console.log(hasil)
        }
    } else {
        console.log("input teks salah")
    }
    console.log(typeof text);
}

reverse("Saya belajar Javascript")