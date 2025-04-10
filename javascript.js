class Calculator {
    constructor(){
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.dotNum = 0;
        this.panel = "";
        this.op = "";
        this.calcButtons = document.querySelector(".btns");
        this.output = document.querySelector("output");
        this.clear = document.querySelector("button.clear");
    }

    operate(op, num1, num2){
        switch(op){
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '×':
                return num1*num2;
            case '÷':
                return num1/num2;
            default:
                return 0;
        }
    }
    clickClearBtn(){
        this.dotNum = 0;
        this.panel = "";
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.op = "";
        this.output.textContent = "0";
        console.log("clear");
        }
    clickOpBtn(element){
        this.op = element;
        if(this.firstNumber > 0) {
            this.secondNumber = parseFloat(this.panel);
            this.dotNum = 0;
            let num = this.operate(this.op, this.firstNumber, this.secondNumber);
            this.panel = num;
            this.output.textContent = this.panel;
            this.firstNumber = num;
            this.secondNumber = 0;
            this.panel = "";
        } else {
            this.firstNumber = parseFloat(this.panel);
            this.dotNum = 0;
            this.panel = "";
        }
        
    }
    clickEqualBtn(){
        this.secondNumber = parseFloat(this.panel);
        this.dotNum = 0;
        this.panel = this.operate(this.op, this.firstNumber, this.secondNumber);
        this.output.textContent = this.panel;
        this.panel = "";
        this.op = "";
        this.firstNumber = this.secondNumber;
        this.secondNumber = 0;
    }

    clickBtn(text){
        let firstVal = text[0];
       if(firstVal.charCodeAt(0) >= "0".charCodeAt(0) && firstVal.charCodeAt(0) <= "9".charCodeAt(0)){
            this.panel += firstVal;
            console.log(this.panel);
            this.output.textContent = this.panel;
       } else if(firstVal == '=') {
            this.clickEqualBtn();
       } else if(firstVal == '.'){
            if(this.dotNum < 1){
                this.dotNum++;
                this.panel += '.';
                this.output.textContent = this.panel;
            }
       } else {
            this.clickOpBtn(firstVal);
       }
    }

    setup(){
        console.log("setup complete");
        let all_btns = Array.from(this.calcButtons.querySelectorAll(".btn"));
        this.output.textContent = "0";
        // all_btns.forEach((ele,key,parent)=>{ele.addEventListener("click",(event)=>this.clickBtn(ele))})
        for(let i = 0; i < all_btns.length; i++){
            let btn = all_btns[i];
            let textin = btn.textContent;
            console.log(textin);
            btn.addEventListener("click",(event)=>this.clickBtn(textin));
        }

        this.clear.addEventListener("click",(event) => this.clickClearBtn());
    }

}

let calcul = new Calculator();

calcul.setup();