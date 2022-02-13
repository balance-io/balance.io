<script>
    const PAGE_TITLE = `Balance`;
    const CANONICAL_URL = `https://balance.io`;
    import Button from "../../src/lib/components/Button.svelte";
    import Announcement from "$lib/components/Announcement.svelte";
</script>

<svelte:head>
    <title>{PAGE_TITLE}</title>
    <meta property="og:title" content={PAGE_TITLE} />
    <meta name="twitter:title" content={PAGE_TITLE} />
    <link rel="canonical" href={CANONICAL_URL} />
    <meta property="og:url" content={CANONICAL_URL} />
    <meta name="twitter:url" content={CANONICAL_URL} />
</svelte:head>

<section class="hero">
    <div class="hero__left">
        <!-- <img class="hero__image" src="/img/phone2.svg" /> -->
        <img class="hero__image" src="/img/phone3.png" />
    </div>
    <div class="hero__right">
        <h1 class="hero__title">
            The <span class="bold">Open Source Wallet</span> for the
            <br class="mobile-break" />
            <span class="bold">Apple & Ethereum ecosystems</span>
        </h1>
        <div class="hero__grid">
            <div class="hero__row">
                <a
                    href="https://snapshot.org"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/vote.svg"
                        text="Vote"
                        color="green"
                        id={0}
                    />
                </a>
                <a
                    href="https://showtime.io"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/mint.svg"
                        text="Mint"
                        color="orange"
                        id={1}
                    />
                </a>
                <a
                    href="https://chat.blockscan.com"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/chat.svg"
                        text="Chat"
                        color="sky"
                        id={2}
                    />
                </a>
            </div>
            <div class="hero__row">
                <a
                    href="https://gitcoin.co"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/earn.svg"
                        text="Earn"
                        color="yellow"
                        id={3}
                    />
                </a>
                <a
                    href="https://zora.co"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/find.svg"
                        text="Find"
                        color="indigo"
                        id={4}
                    />
                </a>
                <a
                    href="https://mirror.xyz"
                    target="_blank"
                    style="text-decoration:
                none;"
                >
                    <Button
                        image="/icons/verbs/fund.svg"
                        text="Fund"
                        color="red"
                        id={5}
                    />
                </a>
            </div>
            <div class="hero__row">
                <a
                    href="https://zkga.me"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/play.svg"
                        text="Play"
                        color="fuchsia"
                        id={6}
                    />
                </a>
                <a
                    href="https://poap.xyz"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/post.svg"
                        text="Post"
                        color="aqua"
                        id={7}
                    />
                </a>
                <a
                    href="https://opensea.io"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/list.svg"
                        text="List"
                        color="purple"
                        id={8}
                    />
                </a>
            </div>
            <div class="hero__row">
                <a
                    href="https://ethmail.cc"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/send.svg"
                        text="Send"
                        color="blue"
                        id={9}
                    />
                </a>
                <a
                    href="https://lens.dev"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/sign.svg"
                        text="Sign"
                        color="gray"
                        id={10}
                    />
                </a>
                <a
                    href="https://alpha.guild.xyz"
                    target="_blank"
                    style="text-decoration: none;"
                >
                    <Button
                        image="/icons/verbs/join.svg"
                        text="Join"
                        color="pink"
                        id={11}
                    />
                </a>
            </div>
            <h1 class="hero__subtitle">
                Stop <span class="bold">Trading</span> Start
                <span class="bold">Using</span>
            </h1>
        </div>
        <div class="wrapper">
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
</section>
<Announcement />
<section class="features">
    <div class="features__row">
        <div class="feature">
            <img class="feature__icon" src="/icons/features/swift.svg" />
            <h2 class="feature__title">Native to Apple platforms</h2>
            <p class="feature__text">
                Balance is built with Swift, UIKit & Swift UI to make the most
                of incredible developer APIs Apple provides
            </p>
        </div>
        <div class="feature">
            <img class="feature__icon" src="/icons/features/puzzle.svg" />
            <h2 class="feature__title">Safari Extension Integration</h2>
            <p class="feature__text">
                Our wallet is woven deeply into the Safari browser so dapp
                developers can finally start shipping for the mobile web
            </p>
        </div>
        <div class="feature">
            <img class="feature__icon" src="/icons/features/world.svg" />
            <h2 class="feature__title">Truly Open Source Code</h2>
            <p class="feature__text">
                We believe the people who use open source protocols deserve
                interfaces that respect the community’s values
            </p>
        </div>
    </div>
    <div class="features__row">
        <div class="feature">
            <img class="feature__icon" src="/icons/features/community.svg" />
            <h2 class="feature__title">Community Funded</h2>
            <p class="feature__text">
                We raised a totally open crowdfunding campaign in 2017 and have
                a new one in 2022 for everyone to be involved
            </p>
        </div>
        <div class="feature">
            <img class="feature__icon" src="/icons/features/stack.svg" />
            <h2 class="feature__title">Focused on the EVM</h2>
            <p class="feature__text">
                We are building on top of the stack that supports the Ethereum
                Virtual Machine so we can support many protocols
            </p>
        </div>
        <div class="feature">
            <img class="feature__icon" src="/icons/features/lock.svg" />
            <h2 class="feature__title">Security Community Support</h2>
            <p class="feature__text">
                Our code will be reviewed regularly by the most reputable
                auditors in Ethereum & open for any security researchers
            </p>
        </div>
    </div>
</section>
<section class="community">
    <a
        class="btn btn--twitter"
        href="https://twitter.com/Balance_io"
        rel="external noopener"
        target="_blank"
    >
        <img src="/icons/socials/twitter.svg" /><span>Follow on Twitter</span>
    </a>
    <a
        class="btn btn--discord"
        href="https://discord.gg/sZtdVDrVGH"
        rel="external noopener"
        target="_blank"
    >
        <img src="/icons/socials/discord.svg" /><span>Join our Discord</span>
    </a>
    <a
        class="btn btn--github"
        href="https://github.com/balance-io"
        rel="external noopener"
        target="_blank"
    >
        <img src="/icons/socials/github.svg" /><span>Watch on GitHub</span>
    </a>
</section>

<style>
    :global(body.highlight) button {
        background-color: #0084f6;
        color: white;
    }
    .mobile-break {
        display: none;
    }
    .hero {
        display: block;
        margin-bottom: 43px;
        margin-top: 30px;
        width: 100%;
        .hero__left {
            text-align: center;
            .hero__image {
                max-width: 250px;
            }
        }
        .hero__right {
            display: flex;
            flex-direction: column;
            padding: 0 24px;
            .hero__title {
                font-weight: 300;
                font-size: 37px;
                margin-top: 0;
                text-align: center;
                .bold {
                    font-size: 40px;
                    font-weight: 600;
                }
            }
            .hero__subtitle {
                font-weight: 300;
                font-size: 28px;
                margin-top: 0;
                text-align: center;
                .bold {
                    font-weight: 500;
                }
            }
            .hero__grid {
                display: flex;
                flex-direction: column;
                row-gap: 16px;
                .hero__row {
                    align-items: center;
                    column-gap: 16px;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    &:first-child {
                        .hero__link > img {
                            height: 22px;
                        }
                    }
                    &:last-child {
                        margin-bottom: 43px;
                    }
                    .hero__link {
                        align-items: center;
                        background-color: #dcf2df;
                        border: 0;
                        border-radius: 8px;
                        color: #1daa10;
                        column-gap: 6px;
                        display: flex;
                        font-size: 17px;
                        font-weight: 500;
                        height: 45px;
                        justify-content: center;
                        text-decoration: none;
                        width: 90px;
                        > img {
                            height: 20px;
                            width: 20px;
                        }
                        &.hero__link--orange {
                            background-color: #fcebde;
                            color: #ff6f00;
                        }
                        &.hero__link--sky {
                            background-color: #dcf2fb;
                            color: #00b1ff;
                        }
                        &.hero__link--yellow {
                            background-color: #fcf3de;
                            color: #ffbd00;
                        }
                        &.hero__link--indigo {
                            background-color: #dee7f0;
                            color: #004d9b;
                        }
                        &.hero__link--red {
                            background-color: #f9dfe0;
                            color: #e80000;
                        }
                        &.hero__link--fuchsia {
                            background-color: #ffdff5;
                            color: #ff00cf;
                        }
                        &.hero__link--aqua {
                            background-color: #dcf0eb;
                            color: #00996c;
                        }
                        &.hero__link--purple {
                            background-color: #f7dff8;
                            color: #cf00e8;
                        }
                        &.hero__link--blue {
                            background-color: #dfebfa;
                            color: #0074ff;
                        }
                        &.hero__link--gray {
                            background-color: #e6e6e6;
                            color: #404040;
                        }
                        &.hero__link--pink {
                            background-color: #fee4e9;
                            color: #ff0057;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 970px) {
        .hero {
            column-gap: 64px;
            display: flex;
            justify-content: center;
            margin-top: 0;
            .hero__right .hero__grid .hero__row .hero__link {
                column-gap: 12px;
                font-size: 28px;
                height: 62px;
                width: 138px;
            }
            .hero__image {
                max-width: 400px !important;
            }
            .hero__title {
                margin-top: 0.5em !important;
            }
        }
    }
    .wrapper {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .features {
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        margin: 0 24px;
        padding: 30px 40px;
        .features__row {
            column-gap: 40px;
            display: flex;
            flex-direction: column;
            .feature {
                margin-bottom: 12px;
                .feature__icon {
                    height: 26px;
                    width: 26px;
                }
                .feature__title {
                    color: #131415;
                    font-size: 21px;
                    margin-top: 8px;
                }
                .feature__text {
                    color: #131415;
                    font-size: 17px;
                }
            }
        }
    }
    @media screen and (min-width: 970px) {
        .features {
            margin: 0;
            .features__row {
                flex-direction: row;
                &:last-child {
                    margin-top: 12px;
                }
                .feature {
                    margin-bottom: 0;
                }
            }
        }
    }
    .community {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        row-gap: 16px;
        .btn {
            max-width: 200px;
            width: 100%;
        }
    }
    @media screen and (min-width: 970px) {
        .community {
            column-gap: 27px;
            flex-direction: row;
            justify-content: center;
            margin: 57px 0;
        }
    }
    @media (max-width: 480px) {
        .mobile-break {
            display: inline;
        }
    }
</style>
