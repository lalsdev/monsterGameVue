new Vue({
    el: '#app',
    data: {
        scoreMe: 100,
        scoreMonster: 100,
        show: true,
        scores: [],
    },
    methods: {
        attack: function () {
            const randNumMe = Math.floor(Math.random() * 19)
            const randNumMonster = Math.floor(Math.random() * 19)
            this.scores.push({
                type: 'me',
                buttonType: attack,
                points: this.scoreMe -= randNumMe,
                lost: randNumMe
            })
            this.scores.push({
                type: 'monster',
                buttonType: attack,
                points: this.scoreMonster -= randNumMonster,
                lost: randNumMonster

            })
        },
        specialAttack: function () {
            alert('Special Attack!')
            const randNumMe = Math.floor(Math.random() * 40)
            Math.floor(Math.random() * 6) + 1
            const randNumMonster = Math.floor(Math.random() * 40)
            this.scores.push({
                type: 'me',
                buttonType: attack,
                points: this.scoreMe -= randNumMe,
                lost: randNumMe
            })
            this.scores.push({
                type: 'monster',
                buttonType: attack,
                points: this.scoreMonster -= randNumMonster,
                lost: randNumMonster

            })
        },
        heal: function () {
            const randHealNumMe = Math.florr(Math.random() * 10)
            const randHealNumMonster = Math.florr(Math.random() * 10)
            this.scores.push({
                type: 'me',
                buttonType: heal,
                points: this.scoreMe += randHealNumMe,
                won: randHealNumMe
            })
            console.log()
        },
        startNewGame: function () {
            this.scoreMe = 100
            this.scoreMonster = 100
            this.show = !this.show
            this.scores = []
        },
    },
})