/*
const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

async function run() {
  await opA(print);
  await opB(print);
  await opC(print);
}

run().catch(console.error);
*/

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A');
    }, 500);
  });
};

const opB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('B');
    }, 250);
  });
};

const opC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('C');
    }, 125);
  });
};

(async () => {
  const resultA = await opA();
  print(null, resultA);

  const resultB = await opB();
  print(null, resultB);

  const resultC = await opC();
  print(null, resultC);
})();
