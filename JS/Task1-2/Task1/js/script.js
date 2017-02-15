function verifyInput() {
    var base;
    var exponent;

    do {
        base = prompt('Enter number', '');

        if ( base == null ) {
            alert('Bye');
            return false;
        }

        base = parseInt(base);

    } while ( isNaN(base) || base == '' )

    console.log('base:', base);

    do {
        exponent = prompt('Enter exponent', '');

        if ( exponent == null ) {
            alert('Bye');
            return false;
        }

        exponent = parseInt(exponent);

    } while ( isNaN(exponent) || exponent == '' )

    console.log('exponent:', exponent);

    pow(base, exponent);
}

function pow(base, expo) {
    var result = 1;

    if (expo >= 0) {
        if (expo > 0) {
            for (var i=0; i<expo; i++) {
                result = result*base;
            }
        }
    } else {
        for (var i=expo; i<0; i++) {
            result = result*base;
        }
        result = 1/result;
    }

    console.log('Your result:', result);

    return result;
};

verifyInput();
