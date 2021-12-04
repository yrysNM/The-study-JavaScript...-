

describe("pow", function()
{
    describe("raising x in power of n ", function() {
        function makeTest(x)
        {
            var expected = x * x * x;
            it("when raising " + x + 
                " to the power of 3, the result is:" + expected, function()
            {
                assert.equal(pow(x, 3), expected);
            });
        }
    
        for(let i = 0; i < 5; i++)
        {
            makeTest(i);
        }
    
        it("возводит в n-ю степень", function()
        {
            assert.equal(pow(2, 3), 8);
        });
    
        it("при возведении 3 в 4 степень равен 81", function()
        {
            assert.equal(pow(3, 4), 81);
        });
    });
   //next test and outline describe

    it("-number in power of integer", function() 
    {
        asert(isNaN(pow(2, -1)),"pow(2, -1) not NaN");
    });

});