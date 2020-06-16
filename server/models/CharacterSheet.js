const mongoose = require("mongoose");

const characterSheetSchema = new mongoose.Schema({
    ownerEmail: {
        type: String,
        required: true,
    },
    avatar: {
        type: Number,
        default: 0
    },
    characterName: {
        type: String,
        default: ""
    },
    experience: {
        type: Number,
        default: 0
    },
    race: {
        type: String,
        default: ""
    },
    background: {
        type: String,
        default: ""
    },
    class: {
        type: String,
        default: ""
    },
    alignment: {
        type: String,
        default: ""
    },
    armourClass: {
        type: Number,
        default: 0
    },
    health: {
        currentHealth: {
            type: Number,
            default: 0
        },
        maxHealth: {
            type: Number,
            default: 0
        },
    },
    hitDice: {
        currentHitDice: {
            type: Number,
            default: 1
        },
        maxHitDice: {
            type: Number,
            default: 1
        },
        hitDiceType: {
            type: Number,
            default: 4
        }
    },
    stats: {
        strength: {
            type: Number,
            default: 0
        },
        dexterity: {
            type: Number,
            default: 0
        },
        constitution: {
            type: Number,
            default: 0
        },
        intelligence: {
            type: Number,
            default: 0
        },
        wisdom: {
            type: Number,
            default: 0
        },
        charisma: {
            type: Number,
            default: 0
        }
    },
    skills: {
        acrobatics: {
            type: Boolean,
            default: false
        },
        animalHandling: {
            type: Boolean,
            default: false
        },
        arcana: {
            type: Boolean,
            default: false
        },
        athletics: {
            type: Boolean,
            default: false
        },
        deception: {
            type: Boolean,
            default: false
        },
        history: {
            type: Boolean,
            default: false
        },
        insight: {
            type: Boolean,
            default: false
        },
        intimidation: {
            type: Boolean,
            default: false
        },
        investigation: {
            type: Boolean,
            default: false
        },
        medicine: {
            type: Boolean,
            default: false
        },
        nature: {
            type: Boolean,
            default: false
        },
        perception: {
            type: Boolean,
            default: false
        },
        performance: {
            type: Boolean,
            default: false
        },
        persuasion: {
            type: Boolean,
            default: false
        },
        religion: {
            type: Boolean,
            default: false
        },
        sleightOfHand: {
            type: Boolean,
            default: false
        },
        stealth: {
            type: Boolean,
            default: false
        },
        survival: {
            type: Boolean,
            default: false
        },
    },
    featsAndSpells: [{
        type: Object,
    }],
    proficiencies: {
        type: String,
        default: ""
    },
    equipment: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("characterSheets", characterSheetSchema);