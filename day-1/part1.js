const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('input.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    
    let max_sum = 0;
    let temp_sum = 0;

    for await (const line of rl) {
        if (line === "") {
            max_sum = Math.max(max_sum, temp_sum);
            temp_sum = 0;
        }
        else {
            temp_sum += parseInt(line);
        }
    }
    console.log(max_sum);
  }
  
  processLineByLine();


// const rl = readline.createInterface({
//     input: fs.createReadStream('input.txt'),
//     crlfDelay: Infinity,
// });



// async function getMaxSum() {
//     await rl.on('line', (line) => {
//         // console.log(line);
//         if (line === "") {
//             max_sum = Math.max(max_sum, temp_sum);
//             // console.log(max_sum)
//             temp_sum = 0;
//         }
//         else {
//             temp_sum += parseInt(line);
//         }
//     });
// }

// const result = getMaxSum();
// console.log(result);