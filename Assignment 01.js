//Question-01
const describeValue = (value) => {
  const tool = value ? "truthy" : "falsy";
  return `${typeof value} | ${tool}`;
};

// console.log(describeValue(undefined));

//Question-02
const getDayType = (day) => {
  let dayType = "";
  switch (day.toUpperCase()) {
    case "FRIDAY":
    case "SATURDAY":
      dayType = "Weekend";
      break;
    case "SATURDAY":
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
      dayType = "Working Day";
      break;
    default:
      dayType = "Invalid Day";
  }
  return dayType;
};

// console.log(getDayType("WEDNESDAY"));

//Question-03

const validateUsername = (name) => {
  if (name.length < 4) {
    return "Too Short";
  } else if (name.includes(" ")) {
    return "No Space Allowed";
  } else if (name.toUpperCase().includes("ADMIN")) {
    return "Reserved Word";
  } else return "Available";
};

// console.log(validateUsername("Admin_karim"));
//jameul.jihad00

//Question-04
const getCngFare = (distance, isNight, waitingMinutes) => {
  extraDistance = distance - 2;
  let fare = 50;
  let waiting = waitingMinutes ?? 0;
  extraDistance > 0
    ? (fare = 50 + extraDistance * 15 + waiting * 2)
    : (fare = 50 + waiting * 2);
  let nightFee = 0;
  isNight ? (nightFee = (fare * 20) / 100) : 0;
  return fare + nightFee;
};

// console.log(getCngFare(5, true, 10));

//Question-05

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  const requiredRate = (runsNeeded / ballsLeft) * 6;
  const verdict =
    requiredRate < 6
      ? "Comfortable"
      : requiredRate <= 12
        ? "Tough"
        : "Almost Impossible";
  if (runsNeeded <= 0) {
    return "won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// console.log(getChaseVerdict(150, 149, 1));
