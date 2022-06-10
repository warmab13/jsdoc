/**
 * Class to create Programmer
 * @example 
 * const newProgrammer = new Programmer({fullname: 'Alonso Salcido'}, 'javascript')
 * newProgrammer.getInfo();
 * @see https://github.com/warmab13/jsdoc
 * 
 * @todo Make rest methods on class
 * @tutorial first_tutorial
 */
class Programmer{
    /**
     * @param {User} user User's Information
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

/**
 * Know more in: {@link Programmer}
 */
const programmerOne = new Programmer({fullname: "Alonso Salcido"}, 'javascript')
const programmerTwo = new Programmer({fullname: "Joe Ryan"}, 'go')

programmerOne.getInfo();
programmerTwo.getInfo();
