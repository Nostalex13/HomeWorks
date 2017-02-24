function Stopwatch() {
    var time = 0;
    var interval;
    var offset;
    timerObj = document.querySelector('.sec');
    msecObj = document.querySelector('.msec');
    startObj = document.querySelector('.btn-start');
    clearObj = document.querySelector('.btn-clear');
    state = 1;

    function update() {
        time += delta();
        var formatedTime = formater(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function formater(tempTime) {
        var tempTime = new Date(tempTime);
        var hours = tempTime.getHours().toString();
        var minutes = tempTime.getMinutes().toString();
        var seconds = tempTime.getSeconds().toString();
        var mseconds = tempTime.getMilliseconds().toString();
        var hourDiff = new Date().getTimezoneOffset() / 60;
        hours = (+hours + +hourDiff).toString();

        if(hours.length < 2) {
            hours = '0' + hours;
        }

        if(minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if(seconds.length < 2) {
            seconds = '0' + seconds;
        }

        if(mseconds.length < 3) {
            mseconds = '0' + mseconds;
        }

        timerObj.innerHTML = hours + ':' + minutes + ':' + seconds;
        msecObj.innerHTML = mseconds;
        return hours + ':' + minutes + ':' + seconds + ':' + mseconds;
    }

    function refreshTimer() {
        clearInterval(interval);
        document.querySelector('.btn-start').innerHTML = 'Start';
        timerObj.innerHTML = '00:00:00';
        msecObj.innerHTML = '0';
        state = 1;
        interval = 0;
        time = 0;
        offset = 0;
    }

    function start() {
        if (state == 1) {
            state = 2;
            startObj.innerHTML = 'Pause';

            interval = setInterval(update, 10);
            offset = Date.now();

            return true;
        } else {

            if (state == 2) {
                state = 3;
                startObj.innerHTML = 'Cont.';

                clearInterval(interval);
                interval = null;

                return true;
            } else {

                if (state == 3) {
                    state = 2;
                    startObj.innerHTML = 'Pause';

                    interval = setInterval(update, 10);
                    offset = Date.now();

                    return true;
                }

            }

            return false;
        }
    }

    this.btnStart = function() {
        start();
    }

    this.btnClear = function() {
        refreshTimer();
    }
}

var stopW = new Stopwatch();

document.querySelector('.btn-start').addEventListener('click', function() { stopW.btnStart() });
document.querySelector('.btn-clear').addEventListener('click', function() { stopW.btnClear() });
$('.sec').prop('disabled', true);
$('.msec').prop('disabled', true);
