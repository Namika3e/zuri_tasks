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
  const now = new Date();
  const current_day_num = now.getDay();

  const currentDay = daysOfTheWeek[current_day_num];
  const current_utc_time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`
;
  const githubFileUrl = "https://github.com/Namika3e/zuri_tasks/blob/main/app.js";
  const githubRepoUrl = "https://github.com/Namika3e/zuri_tasks";

  const data = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: current_utc_time,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };

  try{
    res.status(200).json(data)
  }

  catch (error) {
    res.status(400).json({message:"Not Found"})
  }
});

app.listen(4197, () => {
  console.log("listening on port 4197");
});
