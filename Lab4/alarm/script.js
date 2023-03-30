const timeInput = document.getElementById('time');
const dateInput = document.getElementById('date');
const setAlarmButton = document.getElementById('set-alarm');
const stopAlarmButton = document.getElementById('stop-alarm');
const alarmSound = document.getElementById('alarm-sound');

let alarmInterval;

setAlarmButton.addEventListener('click', () => {
    const time = timeInput.value;
    const date = dateInput.value;

    if (!time || !date) {
        alert('Будь ласка, введіть час та дату');
        return;
    }

    const alarmTime = new Date(`${date}T${time}:00`);

    if (alarmTime < new Date()) {
        alert('Будильник не може бути встановлений на минулий час');
        return;
    }

    setAlarmButton.disabled = true;
    stopAlarmButton.disabled = false;

    alarmInterval = setInterval(() => {
        if (new Date() >= alarmTime) {
            playAlarm();
        }
    }, 1000);
});

stopAlarmButton.addEventListener('click', () => {
    setAlarmButton.disabled = false;
    stopAlarmButton.disabled = true;

    clearInterval(alarmInterval);
    stopAlarm();
});

function playAlarm() {
    alarmSound.play();
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
}
