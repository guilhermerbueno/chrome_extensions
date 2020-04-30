function daysBetween( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Calculate the difference in milliseconds
  var difference_ms = date2 - date1;

  // Convert back to days and return
  var diff = Math.round(difference_ms/one_day);
  console.log(diff);
  return diff;
}

function hoursBetween(date1, date2) {
  //Get 1 hour in milliseconds
  var one_hour=1000*60*60;

  // Calculate the difference in milliseconds
  var difference_ms = date2 - date1;

  // Convert back to hours and return
  var diff = Math.round(difference_ms/one_hour);
  return diff;
}