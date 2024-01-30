process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on("readable", () => {
  INPUT = process.stdin.read();
  if (INPUT) console.log(`Your name is: ${INPUT}`);
});
process.stdin.on("end", () => {
  console.log("This important software is now closing\n");
});
