<script>
    import toggledButton from "$lib/stores/toggledButton";
    export let image;
    export let text;
    export let color;
    export let id;
    const toggle = () => {
        toggledButton.update(() => id);
    };
</script>

<button
    class="hero__link hero__link--{color}{$toggledButton === id
        ? ` highlight`
        : ``}"
    on:click={toggle}
>
    <img src={image} /><span>{text}</span>
</button>

<style>
    .hero__link {
        align-items: center;
        background-color: #dcf2df;
        border: 0;
        border-radius: 8px;
        color: #1daa10;
        column-gap: 2px;
        display: flex;
        font-size: 17px;
        font-weight: 400;
        height: 45px;
        justify-content: center;
        text-decoration: none;
        width: 90px;
        perspective: 2000px;
        cursor: pointer;
        transform-origin: center -100px;
        transform: rotateX(-15deg);
        transition: transform 0.3s;

        > img {
            height: 15px;
            width: 15px;
            padding-right: 5px;
        }
        &.highlight {
            color: #fff !important;
            background-color: green;
            transition: all 0.6s;
            transform: rotateX(0);

            > img {
                filter: brightness(0) invert(1);
            }
        }
        &:hover {
            opacity: 0.8;
        }
        &.hero__link--orange {
            background-color: #fcebde;
            color: #ff6f00;
            &.highlight {
                /* transition: all 0.6s; */
                background-color: #ff6f00;
            }
        }
        &.hero__link--sky {
            background-color: #dcf2fb;
            color: #00b1ff;
            &.highlight {
                background-color: #00b1ff;
            }
        }
        &.hero__link--yellow {
            background-color: #fcf3de;
            color: #ffbd00;
            &.highlight {
                background-color: #ffbd00;
            }
        }
        &.hero__link--indigo {
            background-color: #dee7f0;
            color: #004d9b;
            &.highlight {
                background-color: #004d9b;
            }
        }
        &.hero__link--red {
            background-color: #f9dfe0;
            color: #e80000;
            &.highlight {
                background-color: #e80000;
            }
        }
        &.hero__link--fuchsia {
            background-color: #ffdff5;
            color: #ff00cf;
            &.highlight {
                background-color: #ff00cf;
            }
        }
        &.hero__link--aqua {
            background-color: #dcf0eb;
            color: #00996c;
            &.highlight {
                background-color: #00996c;
            }
        }
        &.hero__link--purple {
            background-color: #f7dff8;
            color: #cf00e8;
            &.highlight {
                background-color: #cf00e8;
            }
        }
        &.hero__link--blue {
            background-color: #dfebfa;
            color: #0074ff;
            &.highlight {
                background-color: #0074ff;
            }
        }
        &.hero__link--gray {
            background-color: #e6e6e6;
            color: #404040;
            &.highlight {
                background-color: #404040;
            }
        }
        &.hero__link--pink {
            background-color: #fee4e9;
            color: #ff0057;
            &.highlight {
                background-color: #ff0057;
            }
        }
    }
    @media screen and (min-width: 970px) {
        .hero__link {
            column-gap: 12px;
            font-size: 28px;
            height: 62px;
            width: 138px;
            > img {
                height: 20px;
                width: 20px;
                padding-right: 0px;
            }
        }
    }
</style>
