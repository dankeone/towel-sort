
// You should implement your task here.

module.exports = function towelSort (arr) {
	if (arguments.length == 0) return([]);
	let collom = arr.length;
	let res = [];
	let s = 0;
	for( let i = 0; i < collom; i++){
		if ((i + 1) % 2 == 0){
			let row = arr[i].length;
			for (let j = row - 1; j >= 0; j--){
				res[s] = arr[i][j];
				s +=1;
			}
		} else {
			let row = arr[i].length;
			for (let j = 0; j < row; j++){
				res[s] = arr[i][j];
				s +=1;	
			} 
		} 
	}
	return(res);
}
