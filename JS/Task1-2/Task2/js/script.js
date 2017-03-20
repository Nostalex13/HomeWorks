var nameArr = [];
var userName;

function generate() {

    for (let i=0; i<5; i++) {

        do {
            nameArr[i] = prompt('Enter name #' + (i + 1));
        } while (nameArr[i] == '');

        if ( nameArr[i] == null ) {
            alert('Bye');
            return false;
        }

    }

}

function generateUser() {

    do {
        userName = prompt('Enter user name. ');
    } while (userName == '');

    if ( userName == null ) {
        alert('Bye');
        return false;
    }

    return userName;
}

function search() {

    if (userName == null || nameArr[0] == null) {
        alert('You didn`t specify some names');
        return false;
    }

    for (let i=0; i < nameArr.length; i++) {
        if ( nameArr[i] == userName ) {
            alert( 'Greetings! You`ve uspeshno entered somewhere, ' + userName );
            return true;
        }
    }

    alert('Greetings! You doesn`t exist');

    return false;
}

generate();
generateUser();
search();
