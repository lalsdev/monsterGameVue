new Vue({
    el: '#app',
    data: {
        scoreMe: 100,
        scoreMonster: 100,
        show: true,
        showHistory: false,
        scores: [],
        witdh: '200px'
    },
    methods: {
        attack: function () {
            this.showHistory = true
            const randNumMe = Math.floor(Math.random() * 19)
            const randNumMonster = Math.floor(Math.random() * 19)
            this.scores.push({
                type: 'me',
                buttonType: 'attack',
                points: this.scoreMe -= randNumMe,
                lost: randNumMe
            })
            this.scores.push({
                type: 'monster',
                buttonType: 'attack',
                points: this.scoreMonster -= randNumMonster,
                lost: randNumMonster

            })
            if (this.scoreMe <= 0) {
                alert('Monster won!')
                this.startNewGame()
            } else if (this.scoreMonster <= 0) {
                alert('You won!')
                this.startNewGame()
            } else {
                'do nothing'
            }
        },
        specialAttack: function () {
            this.showHistory = true
            this.changeWidth()
            const randNumMe = Math.floor(Math.random() * 40)
            Math.floor(Math.random() * 6) + 1
            const randNumMonster = Math.floor(Math.random() * 40)
            this.scores.push({
                type: 'me',
                buttonType: 'attack',
                points: this.scoreMe -= randNumMe,
                lost: randNumMe
            })
            this.scores.push({
                type: 'monster',
                buttonType: 'attack',
                points: this.scoreMonster -= randNumMonster,
                lost: randNumMonster
            })
            if (this.scoreMe <= 0) {
                alert('Monster won!')
                this.startNewGame()
            } else if (this.scoreMonster <= 0) {
                alert('You won!')
                this.startNewGame()
            } else {
                'do nothing'
            }
        },
        heal: function () {
            this.showHistory = true
            const randHealNumMe = Math.floor(Math.random() * 10)
            const randHealNumMonster = Math.floor(Math.random() * 10)
            this.scores.push({
                type: 'me',
                buttonType: 'heal',
                points: this.scoreMe += randHealNumMe,
                won: randHealNumMe
            })
            this.scores.push({
                type: 'monster',
                buttonType: 'heal',
                points: this.scoreMonster += randHealNumMonster,
                won: randHealNumMonster
            })
        },
        startNewGame: function () {
            this.scoreMe = 100
            this.scoreMonster = 100
            this.show = !this.show
            this.scores = []
            this.showHistory = false
        },
    },
})