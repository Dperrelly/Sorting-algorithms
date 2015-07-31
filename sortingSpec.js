describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([])[0] ).toEqual( [] );
    });
    it('sorts an array', function(){
        expect( bubbleSort([5, 923, 72, 7392, 37, 0, -2])[0] ).toEqual( [-2, 0, 5, 37, 72, 923, 7392] );
    });
    it('sorts an array of length 1', function(){
        expect( bubbleSort([5])[0] ).toEqual( [5] );
    });
    it('swaps the expected number of times', function(){
        expect( bubbleSort([0, -2, 5, 72, 37, 923, 7392])[1] ).toEqual( 2 );
    });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it('sorts an array', function(){
        expect( mergeSort([5, 923, 72, 7392, 37, 0, -2] )).toEqual( [-2, 0, 5, 37, 72, 923, 7392] );
    });
    it('sorts an array of length 1', function(){
        expect( mergeSort([5]) ).toEqual( [5] );
    });
});

describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect( merge([1, 2, 6], [0, 324, 79834, 9083809]) ).toEqual( [0, 1, 2, 6, 324, 79834, 9083809] );
    });
});
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([222, 6, 9, 26])).toEqual([[222, 6], [9,26]]);
  });
});