<template>
    <div>
        <input id="bracket" type="checkbox">
        <label for="bracket">
            <h2>L'ARBRE DU TOURNOI</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="text text-bracket">
            <p>Vous pouvez choisir ce que vous affichez en haut à droite de l'arbre en cliquant sur "Full bracket" sinon le lien est <a target="_blank" href="https://challonge.com/fr/CoupeDeFranceAoE2">ici</a></p>
            <iframe src="https://challonge.com/fr/5p12f46t/module" width="100%" height="850" frameborder="1" scrolling="auto" allowtransparency="true"></iframe>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    input[type="checkbox"] {
        display: none;
        & ~ .text {
            height: 0px;
            overflow: hidden;
            transition: .3s linear;
            line-height: 130%;
        }
        &:checked ~ .text {
            padding: 0.75em 0.75em 2em 0;
            transition: .3s linear;
            position: relative;
            &-bracket{
                height: 850px;
            }
            &::after  {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                bottom: 10px;
                border-radius: 1px;
            }
        }
    }

    .text {
        height: 0px;
        display: flex;
        flex-direction: column;
        letter-spacing: 0.5px;
        text-align: justify;
        & p:not(:last-child) {
            margin-bottom: .5em;
        }
        & span, a {
            color: var(--color-text-highlight)
        }
        & .indentation {
            margin-left: 2em;
        }
        & a:hover {
            text-decoration: underline;
        }
    }

    @media all and (max-width: 500px) {
        input[type="checkbox"]:checked ~ .text-bracket {
            height: 500px;
        }
    }
</style>
