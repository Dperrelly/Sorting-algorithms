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