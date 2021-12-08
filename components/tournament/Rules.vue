<template>
    <div class="rules-container">
        <input id="rules" type="checkbox">
        <label for="rules">
            <h2>RÈGLES</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="text text-rules">
            <p>Le fichier des règles du tournoi est <a href="https://cdn.discordapp.com/attachments/904466073942917170/906560991712665630/Coupe_de_France_AoE_II_-_Document_du_joueur_11_2.docx" download><span>téléchargeable ici</span></a></p>
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
            &-rules{
                height: 20px;
            }
            & p:last-child {
                position: relative;
            }
            & > p:last-child::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                left: 0;
                bottom: -12px;
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
        & p {
            &:not(:last-child) {
                margin-bottom: .5em;
            }
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
</style>
