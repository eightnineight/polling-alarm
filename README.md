# polling-alarm

#### Use polling instead of callback for more precise control of the flow process.

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
    if (alarm.isStop()) {
        // before you call isAlarm(), Even if alarm has already stopped, isRunningOrRinging will be true
        if (alarm.isRunningOrRinging()) {
            console.log("still running or ringing"); // this will be printed.
        }
    }
    if (alarm.isAlarm()) {
        console.log("alarm once ", count + 1); // print every 500ms

        if (alarm.isStop()) {
            console.log("alarm stop"); // this will be printed.
        }
        if (alarm.isRunningOrRinging()) {
            console.log("still running or ringing"); // this won't be printed.
        }

        alarm.restart();
        ++count;
    }
}

if (alarm.isRunningOrRinging()) {
    console.log("still running or ringing"); // this won't be printed.
}
```

### alarmInterval

```js
import { alarmInterval } from "@eightnineight/polling-alarm";

let alarm = alarmInterval(500); // 500 ms

let count = 0;
while (count < 10) {
    if (alarm.isStop()) {
        console.log("stop"); // this won't be printed.
    }
    if (alarm.isAlarm()) {
        console.log("alarm interval ", count + 1); // print every 500ms

        if (alarm.isStop()) {
            console.log("alarm stop in while"); // this won't be printed.
        }
        if (alarm.isRunningOrRinging()) {
            console.log("still running or ringing"); // this will be printed.
        }

        ++count;
    }
}

if (alarm.isRunningOrRinging()) {
    console.log("still running or ringing"); // this will be printed.
}

// if you don't call stop(), it will keep running.
alarm.stop();

if (alarm.isStop()) {
    console.log("alarm stop"); // this will be printed.
}
if (alarm.isRunningOrRinging()) {
    console.log("still running or ringing"); // this won't be printed.
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
        break;
    }
}

if (alarm.isStop()) {
    console.log("alarm stop"); // this will be printed.
}
```
