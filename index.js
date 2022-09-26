const addDays = require("date-fns/addDays");
function addDay(days) {
  const result = addDays(new Date(2020, 7, 22), days);
  return result;
}
module.exports = addDay;
