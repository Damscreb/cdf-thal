<template>
    <div>
        <input id="cashprize" type="checkbox">
        <label for="cashprize">
            <h2 class="font-title">LE CASHPRIZE</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="font-text text text-cashprize">
            <p>Initialement de 1500 €, le cashprize total de l’événement s’élève désormais à <span>1780 €</span> et sera attribué à tous les joueurs ayant atteint les 16èmes de finale sur base de la répartition suivante :</p>
            <tbody>
                <tr><td>1er</td><td>765 €</td></tr>
                <tr><td>2e</td><td>465 €</td></tr>
                <tr><td>3e</td><td>215 €</td></tr>
                <tr><td>4e</td><td>115 €</td></tr>
                <tr><td>5e-8e</td><td>15 € / joueur</td></tr>
                <tr><td>9e-16e</td><td>10 € / joueur</td></tr>
                <tr><td>17e-32e</td><td>5 € / joueur</td></tr>
            </tbody>
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
            padding-top: 0.75em;
            padding-bottom: 2em;
            transition: .3s linear;
            position: relative;
            &-cashprize{
                height: 300px;
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

    .icon-format {
        font-size: 1.3em;
        color: var(--color-text-highlight);
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:hover{
            cursor: pointer;
            & h2 {
                color: var(--color-text-highlight);
                transition: .1s ease-in-out;
            }
        }
    }

    h2 {
        color: var(--color-text);
        transition: .1s ease-in-out;
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

    tbody {
        margin-inline: auto;
        border-radius: 8px;
        border: var(--color-text) 1px solid;
        overflow: hidden;
        width: max-content;
        & td {
            text-align: center;
            padding: 0.4em 1em;
            border: var(--color-text) 1px solid;
        }
    }
</style>
