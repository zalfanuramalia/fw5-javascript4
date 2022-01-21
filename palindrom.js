function palindrom (kata) {
    let hasil = "";
    x = kata.length - 1;
    for (i=x; i>=0; i--){
        hasil = hasil + kata[i];
    }
    if (hasil === kata){
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}

palindrom ("apa")