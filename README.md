# polling-alarm

## Install

```
npm install @eightnineight/polling-alarm
```

## Usage

### alarmOnce

```js
import { alarmOnce } from "@eightnineight/polling-alarm";

let alarm = alarmOnce(500); // 500 ms

let count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm once ", count + 1); // print every 500ms

        if (alarm.isStop()) {
            console.log("alarm stop"); // this will be printed.
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

let count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm interval ", count + 1); // print every 500ms

        if (alarm.isStop()) {
            console.log("alarm stop in while"); // this won't be printed.
        }

        ++count;
    }
}

// if you don't call stop(), it will keep running.
alarm.stop();

if (alarm.isStop()) {
    console.log("alarm stop"); // this will be printed.
}
```

### alarmCount

```js
import { alarmCount } from "@eightnineight/polling-alarm";

let alarm = alarmCount(500, 10); // alarm once every 500 ms, for a total of 10 times.

let n = 0;

// this will print 'alarm count' 10 times.
while (1) {
    if (alarm.isAlarm()) {
        console.log("alarm count ", ++n); // print every 500ms
    }
    if (alarm.isStop()) {
        if (alarm.isAlarm()) {
            console.log("alarm count ", ++n); // print every 500ms
        }
        break;
    }
}

if (alarm.isStop()) {
    console.log("alarm stop"); // this will be printed.
}
```
