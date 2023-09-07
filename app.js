const express = require("express");
const app = express();

app.get("/get_data", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const current_day_num = date.getDay();

  const currentDay = daysOfTheWeek[current_day_num];
  const current_utc_time = date.toISOString();

  const data = {};
});

app.listen(4197, () => {
  console.log("listening on port 4197");
});
