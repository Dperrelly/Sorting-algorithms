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
