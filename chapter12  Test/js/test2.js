describe("power of", function() 
{
    it("x power of n", function() 
    {
        //not correct
        // var x = 5;
        // var res = x;
        // assert.equal(pow(x, 1 ), res);

        // res *= x;
        // assert.equal(pow(x, 2), res);

        // res *= x;
        // assert.equal(pow(x, 3), res);
        
        assert.equal(pow(5, 1), 5); //correct
    });

    it("x power of n", function() {
        assert.equal(pow(5, 2), 25);
    }); //correct
});

describe("power of 5", function() 
{
    function pow5(x)
    {
        let n = Math.pow(5, x);

        it("x power of 5", function() {
            assert.equal(pow(5, x), n);
        });

    }//correct

    for(let i = 1; i <= 5; i++)
    {
        pow5(i);
    }
});
