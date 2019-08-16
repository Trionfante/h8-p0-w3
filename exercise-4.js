var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
    arr.splice(1, 1, 'Roman Alamsyah Elsharawy');
    arr.splice(2, 1, 'Provinsi Bandar Lampung');
    arr.splice(4, 0, 'Pria');
    arr.splice(5, 1, 'SMA Internasional Metro');
    console.log(arr);
    
    var split = arr[3].split('/');
    var month = split[1];
    switch (month){
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Wrong Number of Month');

    }

    /*
    SORT TANGGAL NYA WOY
    akhirnya menyerah sort manual, terus make .sort
    */
    var sortDate = arr[3].split('/');
    console.log(sortDate.sort(function(a,b){return b-a}));

    console.log(split.join('-'));

    // var slice = arr[1].slice(0,16);
    console.log(arr[1].slice(0,15));
}

dataHandling2(input);

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
