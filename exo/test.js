class Test {
    static MIN_AGE = 20;
    #demo = "****";

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.language = [];
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    /**
     * @param {string} language
     */
    set lang(language) {
        return this.language.push(language);
    }

    get secret(){
        return this.#demo;
    }

    canPass() {
        return Test.MIN_AGE < this.age;
    }
}

const test1 = new Test("olvanot jean claude", "rakotonirna", 120);
test1.lang = "fr";
test1.lang = "mg";
console.log(test1.secret);
console.log(test1.canPass());