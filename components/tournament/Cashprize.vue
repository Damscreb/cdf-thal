<template>
    <div class="cashprize-container">
        <input id="cashprize" type="checkbox">
        <label for="cashprize">
            <h2 class="font-title">LE CASHPRIZE</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="font-text text text-cashprize">
            <p>Initialement de 1500€, le cashprize total de l’événement s’élève désormais à <span>1780€</span> et sera attribué à tous les joueurs ayant atteint les 16èmes de finale sur base de la répartition suivante :</p>
            <table>
                <thead>
                    <tr><th>Position</th><td>Récompense</td></tr>
                </thead>
                <tbody>
                    <tr><th>1er</th><td>765 €</td></tr>
                    <tr><th>2e</th><td>465 €</td></tr>
                    <tr><th>3e</th><td>215 €</td></tr>
                    <tr><th>4e</th><td>115 €</td></tr>
                    <tr><th>5e-8e</th><td>15 € / joueur</td></tr>
                    <tr><th>9e-16e</th><td>10 € / joueur</td></tr>
                    <tr><th>17e-32e</th><td>5 € / joueur</td></tr>
                </tbody>
            </table>
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
            overflow-y: scroll;
            &-cashprize{
                height: 350px;
            }
            & table::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                left: 0;
                bottom: -30px;
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

    table {
        width: 50%;
        margin-inline: auto;
        margin-top: .8em;
        border-collapse: collapse;
    }

    tbody, thead {
        margin-inline: auto;
        border-radius: 8px;
        border: var(--color-text) 2px solid;
        overflow: hidden;
        width: max-content;
        & td, & th {
            text-align: center;
            padding: 0.4em 0em;
            border: var(--color-text) 1px solid;
        }
    }

    tbody tr:nth-child(2n), thead {
        background-color: var(--color-main-background-color);
    }


    @media all and (max-width: 500px){
        table {
            width: 90%;
        }
    }
</style>
