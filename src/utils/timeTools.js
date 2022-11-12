
function formatNumber2MinuteString (timeSecond) {
  var minuteNumber, secondNumber
  timeSecond = parseInt(timeSecond)
  minuteNumber = Math.floor(timeSecond / 60)
  secondNumber = timeSecond % 60
  if (secondNumber <= 9) {
    return minuteNumber.toString() + ':0' + secondNumber.toString()
  } else {
    return minuteNumber.toString() + ':' + secondNumber.toString()
  }
}

export { formatNumber2MinuteString }
