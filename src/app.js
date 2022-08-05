import { LightningElement, track } from 'lwc';
export default class CalculatorInLwc extends LightningElement {
    @track salario;    
    resultValue =0;
    handleNumberOeChange(event) {
        this.salario = parseInt(event.target.value);
    }
simular() {
      if(this.salario > 0){
        this.resultValue = (parseInt(this.salario) +(parseInt(this.salario)/3)).toFixed(2);
      } else{
        this.resultValue = "Valor inválido";
      }        
    }
limpar() {
        this.resultValue = 0;
        this.salario = 0;
    }
}