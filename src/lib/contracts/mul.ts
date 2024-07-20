import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Mul extends SmartContract {
    @prop()
    answer: bigint

    constructor(answer: bigint) {
        super(...arguments)
        this.answer =answer
    }

    @method()
    public unlock(input1: bigint , input2: bigint) {
        assert(input1*input2 == this.answer, 'incorrect inputs')
    }
}
