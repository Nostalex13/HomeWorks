var nameArr = [];
var userName;

function generate() {

    for (var i=0; i<5; i++) {
        nameArr[i] = prompt('Enter any name');
    }

}

function search() {

    for (var i=0; i < nameArr.length; i++) {
        if ( nameArr[i] == userName ) {
            alert( 'Greetings! You`ve uspeshno entered somewhere, ' + userName );
            return true;
        }
    }

    alert('Greetings! You doesn`t exist');

    return false;
}

generate();
userName = prompt('Enter user name. ');
search();
