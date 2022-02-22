<h2>Set up Balance</h2>

<img class="gif" src="/img/setup.gif" alt="Setup" />

<h3>Step-by-Step Guide</h3>

<div class="step radius">
    <img src="/img/steps/step-1.png" alt="Step 1: Tap aA" />
</div>
<div class="arrow">↓</div>
<div class="step radius">
    <img src="/img/steps/step-2.png" alt="Step 2: Tap Manage Extensions" />
</div>
<div class="arrow">↓</div>
<div class="step radius">
    <img src="/img/steps/step-3.png" alt="Step 3: Enable Balance" />
</div>
<div class="arrow">↓</div>
<div class="step">
    <img src="/img/steps/step-4.png" alt="Step 4: Tap puzzle piece" />
</div>
<div class="arrow">↓</div>
<div class="step">
    <img src="/img/steps/step-5.png" alt="Step 5: Tap Balance" />
</div>
<div class="arrow">↓</div>
<div class="step">
    <img src="/img/steps/step-6.png" alt="Step 6: Tap Always Allow" />
</div>
<div class="arrow">↓</div>
<div class="step">
    <img src="/img/steps/step-7.png" alt="Step 7" />
</div>
<div class="arrow">↓</div>
<div class="congrats">🥳</div>

<div class="go-home">
    <a href="/">❮ Go back to the home page</a>
</div>

<style>
    h2, h3 {
        text-align: center;
    }

    .gif {
        width: 300px;
        max-width: calc(100% - 20px);
        display: block;
        margin: 0 auto;
        border-radius: 20px;
    }

    .step {
        margin: 0 auto;
        padding: 10px 15%;
        text-align: center;

        > img {
            width: 400px;
            max-width: 100%;
            box-sizing: border-box;
            padding: 10px;
        }

        &.radius > img {
            background-color: white;
            border-radius: 20px;
        }
    }

    .arrow {
        text-align: center;
    }

    .go-home {
        text-align: center;
        padding: 30px 0 50px;
        
        > a {
            text-decoration: none;
        }

        > a, a:visited, a:hover, a:active {
            color: inherit;
        }
    }

    .congrats {
        font-size: 100px;
        text-align: center;
        margin-top: 20px;
    }
</style>

<svelte:head>
    <style>
        nav {
            display: none !important;
        }
    </style>
</svelte:head>