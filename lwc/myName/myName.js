import { LightningElement,track,api} from 'lwc';

export default class MyName extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track name = 'Prasanta';

    changeInputMethod(event){
        console.log(JSON.stringify(event));
        this.name = event.target.value;    
    }
}