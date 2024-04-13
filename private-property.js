/** New feature introduce in ECMA Script 2022 */
class BankAccount {
    name = "Rishi Pal";

    /** # will make private */
    #pin = 123456;

    getName() {
        return this.name;
    }

    /** Same we can do for function also */
    getPin() {
        return this.#pin;
    }

    #getIFSCCode() {
        return "ABCD001456";
    }

    getAllDetails() {
        return {
            pin: this.#pin,
            name: this.name,
            ifsc: this.#getIFSCCode()
        }
    }
}
const detail = new BankAccount();
// console.log(detail.name);
// console.log(detail.getName());
// console.log(detail.getPin());
console.log(detail.getAllDetails());
console.log(detail.getAllDetails().ifsc);
function getDetails() {
    console.log(detail.getAllDetails());
}