<template>
    <div class="container-toggle">
        <div class="card toggle">
            <input id="checkbox" type="checkbox" @click="switchMode" v-model="lightOrDark" class="switch-checkbox" />
            <label for="checkbox" class="switch-label">
                <div class="switch-toggle" />
            </label>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            'lightOrDark': Boolean
        }
    },
    'methods': {
        switchMode () {
            if (this.lightOrDark === false) {
                localStorage.setItem('lightOrDark', true)
                document.querySelector('body').classList.add('light-theme')
            } else {
                localStorage.setItem('lightOrDark', false)
                document.querySelector('body').classList.remove('light-theme')
            }
        }
    },
    mounted () {
        if (localStorage.getItem('lightOrDark') === 'true') {
            document.querySelector('body').classList.add('light-theme')
            this.lightOrDark = true
        } else {
            this.lightOrDark = false
        }
    }
}
</script>
<style lang="scss" scoped>
    .container-toggle {
        margin-left: auto;
        margin-right: 1.5em;
    }

    .switch-checkbox {
        display: none;
    }

    .toggle {
        & label {
            background-color: #777;
            border: 2px solid #555;
            border-radius: 50px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            transition: all ease-in-out 0.2s;
            width: 50px;
            height: 25px;
            top: 2px;
            &::after {
                background-color: #555;
                border-radius: 50%;
                content: ' ';
                cursor: pointer;
                display: inline-block;
                position: absolute;
                left: 2px;
                top: 2px;
                transition: all ease-in-out 0.2s;
                width: 21px;
                height: 21px;
            }
        }
    }

    .switch-toggle {
        position: relative;
        &::before, &::after {
            position: absolute;
            font-size: 18px;
            top: 0px;
        }
        &::before {
            content: '\1F319';
            left: -28px;
        }
        &::after {
            content: '☀️';
            right: -28px;
        }
    }

    .toggle input[type=checkbox]:checked {
        & ~ label {
            background-color: var(--color-text);
            border-color: var(--color-text-highlight);
        }
        & ~ label::after {
            background-color: var(--color-text-highlight);
            transform: translateX(24px);
        }
    }

    @media all and (max-width: 700px) {
        .container-toggle {
            margin-right: 0em;
        }

        .switch-toggle {
            &::before, &::after {
                display:none;
            }
        }
    }

    @media all and (max-width: 500px) {
        .container-toggle {
            margin-inline: 0.5em;
        }
    }
</style>
