class Characters {
    constructor(name) {
        this.name = name;
        this.characters = "";
    }

    setName(name) {
        this.name = name;
    }

    addCharacters(characters) {
        this.characters = characters;
    }

    getCharacters() {
        return this.characters;
    }
}

module.exports = Characters;