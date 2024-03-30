import { EventEmitter } from "events";
// const ticketManager = new EventEmitter();

/**
 * Encapsulation vs Simplicity
 * OPP vs Function 
 * Resuablity vs Generic Event
 */

export class TicketManager extends EventEmitter{
    constructor(supply){
        super()
        this.supply = supply;
    }

    buy(email, price){
        if(this.supply > 0){
            this.supply = this.supply - 1;
            this.email('buy',email,price, Date.now())
            return;
        }
        this.emit('error',new Error('There is no more ticket available'))
    }
}