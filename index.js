// object yang menggunakan for in
const maincaster_united = {
    nama_pemain : "lisandro martinez",
    tgl_lahir : "18 januari 1998",
    umur : "25",
    tempat_lahir : "argentina"
}

const barcelona = {
    nama_pemain : "gavi",
    tgl_lahir : "05 agustus 2004",
    umur : "19",
    tempat_lahir : "spanyol"
}

const realmadrid = {
    nama_pemain : "vinicius jr",
    tgl_lahir : "12 july 2000",
    umur : "23",
    tempat_lahir : "brazil"
}

const bayern_munchen = {
    nama_pemain : "leroy sane",
    tgl_lahir : "11 january 1996",
    umur : "27",
    tempat_lahir : "german"
}

const juventus = {
    nama_pemain : "paul pogba",
    tgl_lahir : "15 maret 1993",
    umur : "30",
    tempat_lahir : "prancis"
}

const nama_club = [maincaster_united, barcelona, realmadrid, bayern_munchen, juventus]

for (nama of nama_club) {
    console.log(nama);
}

for (nama in maincaster_united) {
    console.log(nama + '=' + maincaster_united[nama])
}

for (nama in barcelona) {
    console.log(nama + '=' + barcelona[nama])
}

for (nama in realmadrid) {
    console.log(nama + '=' + realmadrid[nama])
}

for (nama in bayern_munchen) {
    console.log(nama + '=' + bayern_munchen[nama])
}

for (nama in juventus) {
    console.log(nama + '=' + juventus[nama])
}