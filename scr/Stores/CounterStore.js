import {action, makeObservable, observable, toJS} from "mobx";

class CounterStore {
    @observable text = ''
    @observable inputText = [];
    @observable result = 1
    @observable symbolNumber = 0
    @observable  temp = 0
    @action setText = (text) => {
        this.text = text
    }
    @action setSymbolNumber = (number) => {
        this.symbolNumber = +number
        console.log('text', toJS(this.symbolNumber))

    }
    @action getAmountText = () => {

        this.result = 0
        this.inputText = this.text.split(' ').map((e) => {
            if (this.temp+e.length <= this.symbolNumber) {
                this.temp += e.length
            } else {
                this.result = this.result + 1
                this.temp=e.length
            }
        })
        this.temp=0
    }
    constructor() {
        makeObservable(this)
    }
}


export default new CounterStore();