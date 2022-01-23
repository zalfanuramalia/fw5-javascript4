function palindrom (kata) {
    let hasil = "";
    y = kata.toLowerCase()
    x = y.length - 1;
    for (i=x; i>=0; i--){
        hasil = hasil + y[i];
    }
    if (hasil === y){
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}

palindrom ("Kasur ini rusak")