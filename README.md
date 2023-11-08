# polling-alarm

## Install

```
npm install @eightnineight/polling-alarm
```

## Usage

```js
import { alarmOnce, alarmInterval } from "@eightnineight/polling-alarm";

let onceAlarm = alarmOnce(1000); // 1000 ms

let count = 0;
while (count < 10) {
    if (onceAlarm.isAlarm()) {
        console.log("alarm once"); // print every 1000ms

        if (onceAlarm.isStop()) {
            console.log("alarm is stop"); // this will be printed.
        }

        onceAlarm.restart();
        ++count;
    }
}

let intervalAlarm = alarmInterval(500); // 500 ms

count = 0;
while (count < 10) {
    if (intervalAlarm.isAlarm()) {
        console.log("alarm interval"); // print every 500ms

        if (intervalAlarm.isStop()) {
            console.log("alarm is stop"); // this won't be printed.
        }

        ++count;
    }
}

// if you don't call stop(), it will keep running.
intervalAlarm.stop();

if (intervalAlarm.isStop()) {
    console.log("alarm is stop"); // this will be printed.
}
```
