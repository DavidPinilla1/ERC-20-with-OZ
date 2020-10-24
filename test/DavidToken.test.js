const DavidToken = artifacts.require('DavidToken');

require('chai').should();

contract('DavidToken',accounts =>{

    let davidToken;
    const _name = 'DavidToken';
    const _symbol = 'DAVID';

    beforeEach(async ()=>{
         davidToken = await DavidToken.new()
    });
    
    describe('Token attributes',() => {
        it('has the correct name',async () => {
           const name = await davidToken.name();
           name.should.equal(_name);
        });
        it('has the correct symbol',async () => {
            const symbol = await davidToken.symbol();
            symbol.should.equal(_symbol);
        });
    })
})