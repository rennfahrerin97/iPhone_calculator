export class Model{

    constructor(){
        this.input = "";
        this.firstNumber = "";
        this.secondNumber = "";
        this.sign = "";
        this.output = 0;
        this.finish = false;
        this.digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        this.action = ['-', '+', 'X', '/', '%', '+/-'];
        this.percent = 0.01;
        this.negative = (-1);    

    }

    getInput(input){
        this.input = input;
    }

    calculate(){
        if (this.input ==='ac') { //Clear All request
            this.input = "";
            this.firstNumber = "";
            this.secondNumber = "";
            this.sign = "";
            this.finish = false;
            this.output = 0;
            return this.output;
        }

        else {
            let key = this.input;

            if (this.digit.includes(key)){ //is the button?

                if(this.secondNumber === "" && this.sign === "") {
                    this.firstNumber += key;
                    this.output = this.firstNumber;
                }

                else if(this.firstNumber !=='' && this.secondNumber !== '' && this.finish) {
                    this.secondNumber = key;
                    this.finish  = false;
                    this.output = this.secondNumber;
                }

                else if(this.firstNumber !=='' && this.sign === '+/-' || this.sign === '%') return;
        
                else {
                    this.secondNumber += key;
                    this.output = this.secondNumber;
                }

                return this.output;
            }
        
            if (this.action.includes(key)) { //is the action?

                if (this.firstNumber === '' && key === '-') {
                    this.firstNumber = key;
                   }

                else {
                    this.sign = key;
                    this.firstNumber = Number(this.firstNumber);
                    this.output = this.sign;
                }
                
                return this.output;
             }
        
            if (key === '=') {
                
                if (this.secondNumber === '') this.secondNumber = this.firstNumber;
        
                switch (this.sign) {
        
                    case '+':
                        this.firstNumber = (+this.firstNumber) + (+this.secondNumber);
                        break;
        
                    case '-':
                        this.firstNumber = this.firstNumber - this.secondNumber;
                        break;
        
                    case 'X':
                        this.firstNumber = this.firstNumber * this.secondNumber;
                           break;
        
                    case '/':
                        if (this.secondNumber === '0') {
                            this.output = 'Error';
                            this.firstNumber = ''; 
                            this.secondNumber = '';
                            this.sign = '';
                            return this.output;
                        }
                        this.firstNumber = this.firstNumber / this.secondNumber;
                        break;
        
                    case '+/-':
                        if (this.firstNumber === '0') return;
                        else this.firstNumber = String(Number(this.firstNumber) * this.negative);
                        break;
                    
                    case '%':
                        this.firstNumber = this.firstNumber * this.percent;
                        break;
                 }
                this.finish = true;
                this.output = this.firstNumber;
            }

            return this.output;
        }
    }
    
}