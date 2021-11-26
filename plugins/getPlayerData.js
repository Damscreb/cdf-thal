import data from '~/content/Liste_utilisateurs_CDF.json'
export default (_, inject) => {
    inject('getPlayerData', () => {
        data.forEach((player) => {
            if (player.avatar === 'null') {
                const randomNumber = Math.floor(Math.random() * 4)
                if (randomNumber === 0) {
                    player.avatar = require('~/assets/image/default_avatar_orange.png')
                } else if (randomNumber === 1) {
                    player.avatar = require('~/assets/image/default_avatar_rose.png')
                } else if (randomNumber === 2) {
                    player.avatar = require('~/assets/image/default_avatar.png')
                } else {
                    player.avatar = require('~/assets/image/default_avatar_vert.png')
                }
            }
        })
        data.sort((a, b) => {
            const returnValue = a.name.localeCompare(b.name)
            return returnValue
        })
        return data
    })
}
