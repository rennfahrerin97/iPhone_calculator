export class View{
    constructor(){
        this.button = this.select(".buttons");
        this.result = this.select(".calc-screen p");
    }

    select(selector){
        return document.querySelector(selector);
    }

    showResult(result){
        this.result.textContent = result;
    }
}