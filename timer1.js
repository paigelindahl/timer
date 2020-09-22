const args = process.argv.slice(2);

let delayArray = [];
const toMilsec = function(args) {
for (let i = 0; i < args.length; i ++) {
  if(args[i] < 0) {
    continue;
  } else if (!Number(args[i])) {
    continue;
  } else {
    let inMs = args[i] * 1000;
    delayArray.push(inMs);
  }
}
console.log(delayArray);
return delayArray;
};

toMilsec(args);

for(let delay of delayArray) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
};






