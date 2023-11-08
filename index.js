import moment from 'moment';

class AlarmOnce {
    #alarm = false;
    #isRunning = false;
    #alarmIntervalMillisecond = 0;
    #timestamp = 0;

    constructor(alarmMillisecond) {
        this.start(alarmMillisecond);
    }

    isStop = () => {
        if (this.#isRunning) {
            if (this.#timestamp > moment().valueOf()) {
                return false;
            }
            this.#alarm = true;
            this.#isRunning = false;
        }
        return true;
    }

    isAlarm = () => {
        if (this.isStop()) {
            if (this.#alarm) {
                this.#alarm = false;
                return true;
            }
        }
        return false;
    }

    start = (alarmMillisecond) => {
        this.#alarm = false;
        this.#isRunning = false;

        if (alarmMillisecond !== undefined) {
            this.#alarmIntervalMillisecond = alarmMillisecond;
        }

        if (typeof (this.#alarmIntervalMillisecond) !== 'number') {
            return;
        }

        if (!this.#alarmIntervalMillisecond) {
            this.#alarm = true;
            return;
        }

        this.#isRunning = true;
        this.#timestamp = moment().valueOf() + this.#alarmIntervalMillisecond;
    }

    restart = () => {
        this.start(this.#alarmIntervalMillisecond);
    }

    stop = () => {
        this.#alarm = false;
        this.#isRunning = false;
    }
}

class AlarmInterval {
    #alarm = false;
    #isRunning = false;
    #alarmIntervalMillisecond = 0;
    #timestamp = 0;

    constructor(alarmMillisecond) {
        this.start(alarmMillisecond);
    }

    isStop = () => {
        if (this.#isRunning) {
            if (this.#timestamp > moment().valueOf()) {
                return false;
            }
            this.#timestamp += this.#alarmIntervalMillisecond;
            this.#alarm = true;
            return false;
        }
        return true;
    }

    isAlarm = () => {
        if (this.isStop()) {
            return false;
        }
        if (this.#alarm) {
            this.#alarm = false;
            return true;
        }
        return false;
    }

    start = (alarmMillisecond) => {
        this.#alarm = false;
        this.#isRunning = false;

        if (alarmMillisecond !== undefined) {
            this.#alarmIntervalMillisecond = alarmMillisecond;
        }

        if (typeof (this.#alarmIntervalMillisecond) !== 'number') {
            return;
        }

        if (!this.#alarmIntervalMillisecond) {
            this.#alarm = true;
            return;
        }

        this.#isRunning = true;
        this.#timestamp = moment().valueOf() + this.#alarmIntervalMillisecond;
    }

    restart = () => {
        this.start(this.#alarmIntervalMillisecond);
    }

    stop = () => {
        this.#alarm = false;
        this.#isRunning = false;
    }
}

class AlarmCount {
    #alarm = false;
    #isRunning = false;
    #alarmIntervalMillisecond = 0;
    #timestamp = 0;
    #count = 0;

    constructor(alarmMillisecond, count) {
        this.start(alarmMillisecond, count);
    }

    isStop = () => {
        if (this.#isRunning) {
            if (this.#timestamp > moment().valueOf()) {
                return false;
            }
            this.#alarm = true;

            if (this.#count) {
                --this.#count;
            }
            if (this.#count) {
                this.#timestamp += this.#alarmIntervalMillisecond;
                return false;
            } else {
                this.#isRunning = false;
                return true;
            }
        }
        return true;
    }

    isAlarm = () => {
        if (this.isStop()) {
            return false;
        }
        if (this.#alarm) {
            this.#alarm = false;
            return true;
        }
        return false;
    }

    start = (alarmMillisecond, count) => {
        this.#alarm = false;
        this.#isRunning = false;
        this.#count = count;

        if (alarmMillisecond !== undefined) {
            this.#alarmIntervalMillisecond = alarmMillisecond;
        }

        if (typeof (this.#count) !== 'number') {
            return;
        }
        if (typeof (this.#count) <= 0) {
            return;
        }

        if (typeof (this.#alarmIntervalMillisecond) !== 'number') {
            return;
        }

        if (!this.#alarmIntervalMillisecond) {
            this.#alarm = true;
            return;
        }

        this.#isRunning = true;
        this.#timestamp = moment().valueOf() + this.#alarmIntervalMillisecond;
    }

    restart = () => {
        this.start(this.#alarmIntervalMillisecond);
    }

    stop = () => {
        this.#alarm = false;
        this.#isRunning = false;
    }
}


const alarmOnce = (alarmMillisecond) => {
    return new AlarmOnce(alarmMillisecond);
};

const alarmInterval = (alarmMillisecond) => {
    return new AlarmInterval(alarmMillisecond);
};

const alarmCount = (alarmMillisecond, count = 1) => {
    return new AlarmCount(alarmMillisecond, count);
};

export {
    alarmOnce,
    alarmInterval,
    alarmCount,
};
