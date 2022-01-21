function reverse (text){
    if (text == String){
        let hasil = "";
        let find = "";
        while (x <= text.length){
            find = find + text[x];
            if ( text[x]==""){
                hasil = find + hasil;
                find ="";
                if (x==text.length){
                    hasil = find + " " + hasil;
                    find="";
                    x++;
                }
            }
            return hasil;
        }
    } else {
        console.log("input teks salah")
    }
}

reverse("kode asik")