function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours >= 12) {
    if(hours == '12')
      {
        return `${12}:${minutes} PM`;
      }
    return `${hours - 12}:${minutes} PM`;
  } else {
    if(hours == '00')
    {
      return `${12}:${minutes} AM`;
    }
    return `${hours}:${minutes} AM`;
  }
}

console.log(convertTo12HourClock('01:30'));

// Hint: I recommend calling the function with an input of '12:05'
