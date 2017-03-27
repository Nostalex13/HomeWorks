function pow(base, expo) {
    var result = 1;

    if (expo >= 0) {
        if (expo > 0) {
            for (let i=0; i<expo; i++) {
                result = result*base;
            }
        }
    } else {
        for (let i=expo; i<0; i++) {
            result = result*base;
        }
        result = 1/result;
    }

    console.log('Your result:', result);

    return result;
};

try {
   module.exports = pow;
} catch (e) {
   console.log('Exporting:', e.message);
}
