const args = process.argv;
//Make a new array using args, but it eliminates the last two items using .slice(2)
//arrange the numbers in the order
const sliceArray = args.slice(2).sort((a, b) => a - b)
//use map function to multiply each number by 1000, so that it equals a second
const timeInSeconds = sliceArray.map(x => x * 1000)
//Write a for each loops, and within it a timeout code, where number is the time in milliseconds
timeInSeconds.forEach(second => {
  setTimeout(() => {
    process.stdout.write("\x07")
  }, second);
});

//process.stdout.write('\x07');