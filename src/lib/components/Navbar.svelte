<script>
    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };
</script>

<nav class="nav">
    <div class="nav__left">
        <a class="nav__logo" href="/" sveltekit:prefetch>
            <img class="nav__image" src="/img/logo.png" alt="Balance" />
        </a>
    </div>
    <div class="nav__right">
        <a
            class="nav__link"
            href="https://discord.gg/sZtdVDrVGH"
            rel="external noopener"
            target="_blank"
        >
            <img src="/icons/navbar/discord.svg" /><span>Discord</span>
        </a>
        <a
            class="nav__link"
            href="https://ricburton.mirror.xyz/crowdfunds/0x9500b696F00AE82CA97d06379CF0A2b60B467040"
            rel="external noopener"
            target="_blank"
        >
            <img src="/icons/navbar/store.svg" /><span>Crowdfunding</span>
        </a>
        <div class="wrapper mobile">
            <a
                class="btn btn--testflight"
                href="https://testflight.apple.com/join/2KmYYftO"
                rel="external noopener"
                target="_blank"
            >
                <img src="/icons/socials/balance-testflight.svg" /><span
                    >Join TestFlight</span
                >
            </a>
        </div>
    </div>
</nav>

<style>
    .nav {
        align-items: center;
        column-gap: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px 24px 0;
        .nav__left {
            margin-bottom: 16px;
            max-width: 200px;
            .nav__logo {
                transition: 0.15s opacity ease;
                will-change: opacity;
                .nav__image {
                    max-width: 145px;
                }
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .nav__right {
            align-items: center;
            column-gap: 36px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            max-width: 700px;
            row-gap: 20px;
            width: 100%;
            .nav__link {
                align-items: center;
                color: #0e0e0e;
                column-gap: 8px;
                display: flex;
                justify-content: center;
                padding-bottom: 4px;
                font-size: 20px;
                text-decoration: none;
                transition: 0.15s opacity ease;
                will-change: opacity;
                &:hover {
                    opacity: 0.8;
                }
                img {
                    height: 22px;
                    width: 26px;
                }
            }
        }
    }
    .mobile {
        display: block;
    }
    @media screen and (min-width: 970px) {
        .mobile {
            display: none;
        }
        .nav {
            flex-direction: row;
            padding: 50px 24px;
            .nav__left {
                margin-bottom: 12px;
            }
            .nav__right {
                flex-direction: row;
            }
        }
    }
</style>
