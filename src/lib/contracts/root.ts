import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Root extends SmartContract {
    @prop()
    answer: bigint

    constructor(ans: bigint) {
        super(...arguments)
        this.answer =ans
    }

    @method()
    public unlock(input1: bigint,input2:bigint) {
        assert(input1*input2 == this.answer, 'incorrect square-root')
    }
}
