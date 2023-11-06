# polling-alarm

## Install

```
npm install @eightnineight/polling-alarm
```

## Usage

```js
import { alarmOnce, alarmInterval } from "polling-alarm";

let alarm = alarmOnce(1000); // 1000 ms

let count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm once");
        alarm.restart();
        ++count;
    }
}

alarm = alarmInterval(500); // 500 ms

count = 0;
while (count < 10) {
    if (alarm.isAlarm()) {
        console.log("alarm interval");
        ++count;
    }
}
```
