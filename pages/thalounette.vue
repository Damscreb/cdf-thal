<template>
    <div class="description">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <a><span>Live de Thalounette</span></a>
        <div class="thalounette-text">
            <h2><span>Bio :</span></h2>
            <p>J'aime les jeux vidéos et les <span>pâtes à la carbonara</span>. Je joue principalement à Age Of Empires.</p>
            <p>If you don't speak French, feel free to speak English in the chat.</p>
            <p><span>Email : luniversdethal@gmail.com</span></p>
        </div>
        <div class="iframe">
            <iframe src="https://player.twitch.tv/?channel=Thalounette&parent=damscreb.github.io&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="80%" />
        </div>
        <a><span>Chaine Youtube de Thalounette</span></a>
        <div class="thalounette-text">
            <h2><span>Description :</span></h2>
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

    @media all and (max-width:500px) {
        .thalounette-text {
            padding: 0 1em;
        }
    }
</style>
