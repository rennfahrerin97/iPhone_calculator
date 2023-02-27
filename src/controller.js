export class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        
        this.view.button.onclick = (event) => {
            if (!event.target.classList.contains('btn')) return; //not a button, empty space
            this.model.getInput(event.target.textContent);
            let result = this.model.calculate();
            this.view.showResult(result);
        }
    }
}