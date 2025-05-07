// Current date and time
const now = new Date();
console.log("Now-> ", now);

// Specific date
const birthday = new Date("2000-10-25");
console.log("Bday-> ", birthday);

// Using year, month (0-indexed), day
const customDate = new Date(2025, 4, 7); // May 7, 2025
console.log("Custom-> ", customDate);

// Date and time
const withTime = new Date("2025-05-07T14:30:00");
console.log("With  Time-> ", withTime);

console.log(now.getFullYear());
// 2025
console.log(now.getMonth());
// 4 (May, because months are 0-based)
console.log(now.getDate());
// 7
console.log(now.getDay());
// 3 (Wednesday, 0 = Sunday)
console.log(now.getHours());
// Current hour
console.log(now.getMinutes());
// Current minute
console.log(now.getTime());
// Milliseconds since Jan 1, 1970

console.log("************* Calculating Time **************");
const today = new Date();
const deadline = new Date("2025-06-01");

const diffInMs = deadline - today; // Milliseconds
const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

console.log(`📅 Days left: ${diffInDays}`);

const future = new Date("2025-05-07T18:00:00");

let diff = future - now; // milliseconds

let hours = Math.floor(diff / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);

console.log(`⏳ Time left: ${hours}h ${minutes}m ${seconds}s`);

const date = new Date();
const formatter = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log("************* Formatting Time **************");

console.log(formatter.format(date));
