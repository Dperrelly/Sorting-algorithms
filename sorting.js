function bubbleSort(array){
	var arr = array;
	var numOfSwaps;
	var totalSwaps = 0;
	var totalComparisons = 0;
	do{
		numOfSwaps = 0;
		for(var i = 0; i < arr.length - 1; i++){
			totalComparisons++;
			if(arr[i] > arr[i+1]) {
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				numOfSwaps++;
				totalSwaps++;
			}

		}
	}while(numOfSwaps);
	return [arr, totalSwaps, totalComparisons];
}

function mergeSort(array){
	debugger;
	if(array.length <= 1) return array;
	console.log(array.length);
	var halves = split(array);
	var left = mergeSort(halves[0]);
	var right = mergeSort(halves[1]);

	// actual merging occurs here
	return merge(left, right);
}

function merge(left, right){
	var merged = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			merged.push(left.shift());
		}
		else{
			merged.push(right.shift());
		}
	}
	if(left.length) merged = merged.concat(left);
	if(right.length) merged = merged.concat(right);
	return merged;
}

function split(array){
	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle);
	return [left, right];
}