class Characters {
    constructor(name, color) {
        this.name = name;
        this.characters = "";
        this.color = color;
    }

    setName(name) {
        this.name = name;
    }

    addCharacters(characters) {
        this.characters = characters;
    }

    setColor(color) {
        this.color = color;
    }

    getCharacters() {
        return this.characters;
    }

    getColor() {
        return this.color;
    }
}

module.exports = Characters;