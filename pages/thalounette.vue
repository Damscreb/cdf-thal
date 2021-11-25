<template>
    <div class="description">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <a class="font-title">Live de Thalounette</a>
        <div>
            <h2 class="font-title">Bio :</h2>
            <p class="font-text">J'aime les jeux vidéos et les <span>pâtes à la carbonara</span>. Je joue principalement à Age Of Empires.</p>
            <p class="font-text">If you don't speak French, feel free to speak English in the chat.</p>
            <p class="font-text"><span>Email : luniversdethal@gmail.com</span></p>
        </div>
        <div class="iframe">
            <iframe src="https://player.twitch.tv/?channel=Thalounette&parent=localhost:3000&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" height="600" width="80%" />
        </div>
        <a class="font-title">Chaine Youtube de Thalounette</a>
        <div>
            <h2 class="font-title">Description :</h2>
            <p class="font-text">Que ce soient des tutos, des interviews ou encore des casts de tournoi, Thalounette est sur tous les fronts!</p>
            <p class="font-text">Se situant plus dans le divertissement que dans un niveau exceptionnel, elle saura vous faire rire dans n'importe quelle situation.</p>
            <p class="font-text">Retrouvez ici la vidéo du cast de son dernier tournoi caritatif, <span>L'Endowar</span>, organisé par Elhyar.</p>
        </div>
        <div class="iframe">
            <iframe width="80%" height="500" src="https://www.youtube.com/embed/ZVTYBH27h3I" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .description {
        display:flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1em;
        margin-inline: auto;
        width: 100%;
    }

    h2, a, p{
        color: var(--color-text);
    }

    h2 {
        text-align: left;
        margin-bottom: 0.5em;
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
</style>
