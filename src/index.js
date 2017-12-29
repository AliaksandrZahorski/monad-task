module.exports = function canReach(startPos, finalPos, steps) {
  const uniq = arr => {
    const hashTable = new Map();
  	return arr.filter(function (el) {
  		const key = JSON.stringify(el);
  		return (hashTable.has(key) ? false : hashTable.set(key, null));
  	});
  }

  const inBoard = n => (n > 0 && n < 9) ? true : false;

  const singleMove = cell => {
    const x = cell[0];
    const y = cell[1];
    const arr = [
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
    ];
    return arr.filter(el => inBoard(el[0]) && inBoard(el[1]));
  }

  const move = arr => uniq(arr.reduce((acc, curr) => [...acc, ...singleMove(curr)], []));

  const canReach2 = (start, end, step) => {
    let result = [];
    result.push(start);
    for (let i = 0; i < step; i++) {
      result = move(result);
    }

    return !!result.filter(el => el[0] === end[0] && el[1] === end[1]).length;
  }

  return canReach2(startPos, finalPos, steps);
}
