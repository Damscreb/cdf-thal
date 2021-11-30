<template>
    <div>
        <v-select :options="casters" label="name"></v-select>
    </div>
</template>
<script>
export default {
    asyncData(ctx) {
        // eslint-disable-next-line
        console.log(ctx);
        return {name: 'page name'};
    },
    data() {
        return {
            casters: [
                {
                    name: 'Themole',
                    url: 'https://www.twitch.tv/themole67',
                },
                {
                    name: 'Ciskhan',
                    url: 'https://www.twitch.tv/ciskhan_',
                },
                {
                    name: 'Colem',
                    url: '?',
                },
                {
                    name: 'Comm..._rod',
                    url: 'https://www.twitch.tv/commandeur_rod',
                },
                {
                    name: 'Elhyar',
                    url: 'https://www.twitch.tv/elhyar_',
                },
                {
                    name: 'Iceofempire',
                    url: '?',
                },
                {
                    name: 'Melo',
                    url: 'https://www.twitch.tv/melon_l_esturgeon',
                },
                {
                    name: 'SMOC Vince',
                    url: 'https://www.twitch.tv/luldorelle',
                },
                {
                    name: 'Sylenix',
                    url: 'https://www.twitch.tv/sylenixfr',
                },
                {
                    name: 'Thalounette',
                    url: 'https://www.twitch.tv/thalounette',
                },
                {
                    name: 'Tutus',
                    url: 'https://www.twitch.tv/tutusasylum',
                },
            ].sort((casterA, casterB) => casterA.name.localeCompare(casterB.name)),
        };
    },
};
</script>
<style scoped>

</style>
