/**
 * Class to create Programmer
 */
class Programmer{
    /**
     * @param {{fullname: string}} user User's Information
     * @param {string} language A programming language
     */
    constructor(user, language){
        this.fullname = user.fullname;
        this.language = language;
    }

    /**
     * Get Programmer Info
     * @returns {void}
     */
    getInfo(){
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.language}`)
    }
}

const programmerOne = new Programmer({fullname: "Alonso Salcido"}, 'javascript')
const programmerTwo = new Programmer({fullname: "Joe Ryan"}, 'go')

programmerOne.getInfo();
programmerTwo.getInfo();