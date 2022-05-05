exports.generateRan = () => {
  let num = "";
  for (let i = 0; i < 4; i++) {
    const randVal = Math.round(Math.random() * 9);
    num = num + randVal;
  }
  return num;
};
