<template>
    <div class="description">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <h2>Live de Thalounette</h2>
        <div class="thalounette-text">
            <h3><span>Bio :</span></h3>
            <p>J'aime les jeux vidéos et les <span>pâtes à la carbonara</span>. Je joue principalement à Age Of Empires.</p>
            <p>If you don't speak French, feel free to speak English in the chat.</p>
            <p><span>Email : luniversdethal@gmail.com</span></p>
        </div>
        <div class="iframe">
            <iframe src="https://player.twitch.tv/?channel=Thalounette&parent=damscreb.github.io&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="80%" />
        </div>
        <h2>Chaine Youtube de Thalounette</h2>
        <div class="thalounette-text">
            <h3><span>Description :</span></h3>
            <p>Que ce soient des tutos, des interviews ou encore des casts de tournoi, Thalounette est sur tous les fronts!</p>
            <p>Se situant plus dans le <span>divertissement</span> que dans un niveau exceptionnel, elle saura vous faire rire dans n'importe quelle situation.</p>
            <p>Retrouvez ici la vidéo du cast de son dernier tournoi caritatif, <span>L'Endowar</span>, organisé par Elhyar.</p>
        </div>
        <div class="iframe">
            <iframe width="80%" height="500px" src="https://www.youtube.com/embed/ZVTYBH27h3I" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .description {
        display:flex;
        flex-direction: column;
        text-align: center;
        margin: 0 auto 1em auto;
        width: 100%;
    }

    a, p{
        color: var(--color-text);
    }

    h2 {
        margin-inline: auto;
        font-size: 1.7em;
        position: relative;
        width: auto;
        text-align: center;
        &:last-of-type {
            margin-bottom: 0.7em;
        }
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: var(--color-text-highlight);
            bottom: 0px;
            left: 0px;
        }
    }

    h3 {
        text-align: left;
        margin-bottom: 0.5em;
        font-size: 1.5em;
    }

    a {
        letter-spacing: 1px;
        text-decoration: underline;
        text-align: center;
        margin-bottom: 1em;
        font-size: 1.6em;
    }

    p {
        font-size: 1em;
        text-align: justify;
        &:last-child {
            margin-bottom: 1.5em;
        }
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: 50% 20%;
        border-radius: 15px;
        margin-bottom: 2em;
    }

    .iframe {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2em;
    }

    span {
        color: var(--color-text-highlight);
        &:hover {
            cursor: inherit;
        }
    }

    @media all and (max-width:500px) {
        h2 {
            padding: 0.5em 0.2em 0 0.2em;
            &::after {
                top: 0px;
                bottom: unset;
            }
        }

        .thalounette-text {
            padding: 0 1em;
        }

        img {
            width: 100%;
            height: unset;
            object-fit: cover;
            object-position: 50% 20%;
            border-radius: 15px;
            margin-bottom: 2em;
        }
    }
</style>
