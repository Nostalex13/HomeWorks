function pow(arr) {
    var num;
    var expo = [];
    var result = 1;

    num = parseInt(arr);
    console.log('num:', num);
    var temp = arr.replace(num, '');
    var k = 0;

    for (var i=0; i<temp.length; i++) {
        if ((temp[i] == ',') || (temp[i] == ' ') || (temp[i] == ';')) {

        } else {
            expo[k] = temp[i];
            k++;
        }
    }

    expo = expo.join('');
    expo = parseInt(expo);
    console.log('expo:', expo);

    if (isNaN(num) || isNaN(expo)) {
        alert('Enter another values');
        return false;
    }

    if (expo >= 0) {
        if (expo > 0) {
            for (var i=0; i<expo; i++) {
                result = result*num;
            }
        }
    } else {
        for (var i=expo; i<0; i++) {
            result = result*num;
        }
        result = 1/result;
    }

    console.log('Your result :', result);

    return result;
};

var numbers = prompt('Enter number and exponent', '');
pow(numbers);
