// Create a JS program capable of generating a password which contains atleast one lowercase, one upperccase and one special character. Create a password class to achieve the same.

class Password {
    constructor() {
        console.log("Welcome to Password Generator")
        this.pass = ""
    }
    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789"
        let special = "!@#$%^&*()_+~`|}{[]:;?><,./-="
        if (len < 3) {
            console.log("Your password should be atleast 3 characters long");
        } else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * chars.length)];
                this.pass += special[Math.floor(Math.random() * chars.length)];
                i+=3
            }
            this.pass = this.pass.substring(0, len);
            return this.pass
        }
    }
}

let p = new Password();
console.log(p.generatePassword(7));