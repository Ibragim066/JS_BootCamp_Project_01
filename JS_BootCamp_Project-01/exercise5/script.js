// Запланированная встреча
const dayStart = "07:30";
const dayEnd = "17:45";

function timeToMinutes(timeStr) {
    const splitTime = timeStr.split(':');
    return (+splitTime[0] * 60) + +splitTime[1];
}

function scheduleMeeting(startTime, durationMinutes) {
    const meetingStart = timeToMinutes(startTime);
    const workStart = timeToMinutes(dayStart);
    const workEnd = timeToMinutes(dayEnd);  

    const meetingEnd = meetingStart + durationMinutes;

    if(meetingStart >= workStart && meetingEnd <= workEnd) return true;
    else return false;
}

console.log(scheduleMeeting(dayStart, 15));