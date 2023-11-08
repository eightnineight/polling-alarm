# polling-alarm

## Install

```
npm install @eightnineight/polling-alarm
```

## Usage

### alarmOnce

```js
import { alarmOnce } from "@eightnineight/polling-alarm";

let alarm = alarmOnce(1000); // 1000 ms

let count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm once"); // print every 1000ms

        if (alarm.isStop()) {
            console.log("alarm is stop"); // this will be printed.
        }

        alarm.restart();
        ++count;
    }
}
```

### alarmInterval

```js
import { alarmInterval } from "@eightnineight/polling-alarm";

let alarm = alarmInterval(500); // 500 ms

count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm interval"); // print every 500ms

        if (alarm.isStop()) {
            console.log("alarm is stop"); // this won't be printed.
        }

        ++count;
    }
}

// if you don't call stop(), it will keep running.
alarm.stop();

if (alarm.isStop()) {
    console.log("alarm is stop"); // this will be printed.
}
```

### alarmCount

```js
import { alarmCount } from "@eightnineight/polling-alarm";

let alarm = alarmCount(500, 10); // alarm once every 500 ms, for a total of 10 times.

// this will print 'alarm count' 10 times.
while (1) {
    if (alarm.isAlarm()) {
        console.log("alarm count"); // print every 500ms

        if (alarm.isStop()) {
            break;
        }
    }
}

if (alarm.isStop()) {
    console.log("alarm is stop"); // this will be printed.
}
```
