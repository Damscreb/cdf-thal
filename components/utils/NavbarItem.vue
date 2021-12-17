<template>
    <Nuxt-Link exact-active-class="underline" :to="`/${link}`">
        <Font-awesome-icon class="icon" :icon="[`${iconType}`, `${icon}`]"/>
        <h3 class="font-text">{{ name }}</h3>
    </Nuxt-Link>
</template>
<script>
export default {
    props: {
        icon: {
            required: true,
            type: String,
        },
        iconType: {
            required: true,
            type: String,
        },
        link: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
    },
}
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        & .icon {
            display: none;
            font-size: 1.5em;
            color: var(--color-text);
            transition: 0.2s ease-in-out;
        }
        & h3 {
            position: relative;
            margin: 1em;
            margin-left: 0.5em;
            width: max-content;
            color: var(--color-text);
            transition: 0.2s ease-in-out;
        }
        &:hover {
            cursor: pointer;
            & .icon, & h3 {
                color: var(--color-text-highlight);
                transition: 0.2s ease-in-out;
            }
            & h3::after {
                background-color: var(--color-text);
                transition: 0.2s ease-in-out;
            }
        }
    }
    .underline {
        & h3 {
            transition: 0.2s ease-in-out;
            &::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                bottom: -3px;
                left: 0px;
                transition: 0.2s ease-in-out;
            }
        }
        & .icon {
            color: var(--color-text-highlight);
            transition: 0.2s ease-in-out;
        }
    }
    @media all and (max-width: 500px) {
        a {
            & .icon {
                display: initial;
                margin-inline: 0.5em;
            }
            & h3 {
                display: none;
            }
        }
    }
</style>
