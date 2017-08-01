/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    CLOCKY MC CLOCK-FACE
    https://www.codewars.com/kata/clocky-mc-clock-face/train/javascript

    Story

    Due to lack of maintenance the minute-hand has fallen off Town Hall clock face. And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly. Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand! 

    Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

    Examples

    12:00 = 0 degrees
    03:00 = 90 degrees
    06:00 = 180 degrees
    09:00 = 270 degrees
    12:00 = 360 degrees
    
    Notes
    0 <= angle <= 360
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var whatTimeIsIt = function(angle) {
  const rawMin = angle / 0.5;
  let hrs = parseInt(rawMin / 60);
  let min = rawMin - (hrs * 60);
  min = parseInt(min);
  hrs = hrs === 0 ? 12 : hrs;
  hrs = hrs < 10 ? '0' + String(hrs) : hrs;
  min = min < 10 ? '0' + String(min) : min;
  return `${hrs}:${min}`;
};
