/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    HUMAN READABLE TIME
    https://www.codewars.com/kata/human-readable-time/train/javascript

    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function humanReadable(seconds) {
  let hrs = Math.floor(seconds / 3600); hrs = String(hrs).length < 2 ? '0' + hrs : hrs;
  let min = Math.floor((seconds % 3600) / 60); min = String(min).length < 2 ? '0' + min : min;
  let sec = seconds - (min * 60) - (hrs * 3600); sec = String(sec).length < 2 ? '0' + sec : sec;
  
  return hrs + ':' + min + ':' + sec;
}