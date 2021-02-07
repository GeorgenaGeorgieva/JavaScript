function solve() {

    function canCast(state) {
        return {
            cast: (spell) => {
                console.log(`${state.name} cast ${spell}`);
                state.mana--;
            }
        }
    }

    function canFight(state) {
        return {
            fight: () => {
                console.log(`${state.name} slashes at the foe!`);
                state.stamina--;
            }
        }
    }

    function mage(name) {
        let state = {
            name,
            health: 100,
            mana: 100
        }

        return Object.assign(state, canCast(state));
    }

    function fighter(name) {
        let state = {
            name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state, canFight(state));
    }

    return {
        mage: mage,
        fighter: fighter
    }
}