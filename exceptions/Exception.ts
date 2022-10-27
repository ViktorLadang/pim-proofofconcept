class ExceptionFactory extends Error{

    constructor(message : string){
        super(message)
    }


    public getException(message : string): void{
        throw new ExceptionFactory(this.message)
    }

    
}
module.exports.getException = ExceptionFactory;