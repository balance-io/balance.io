<script>
  import Map from "$lib/components/Map.svelte";
</script>

<footer class="footer">
  <div class="radius">
    <Map />
  </div>

  <div class="footer__left">
    <img class="footer__logo mb" src="/img/logo-white.png" />
    <p class="footer__text footer__text--highlight">Balanced Software, Inc.</p>
    <p class="footer__text mb">San Francisco, California</p>
    <h2 class="footer__title">Want to visit us?</h2>
    <p class="footer__text mb">
      We love having guests from the Ethereum community in our Presidio studio
    </p>
    <a
      href="https://app.uniswap.org/#/swap?exactField=output&exactAmount=1&inputCurrency=ETH&outputCurrency=0xd3ba270f82CadabD0596D3D30233448621d561BB"
      target="_blank"
      style="text-decoration: none;"
    >
      <button class="btn btn--apply mb">
        <img src="/icons/socials/pin.svg" /><span>Buy 1 $BAE to visit</span>
      </button>
    </a>
  </div>
  <div class="footer__center">
    <h2 class="footer__title">Contact</h2>
    <p class="footer__text" style="padding-bottom: 10px;">
      <a class="footer__link" href="mailto:hello@balance.io">hello@balance.io</a
      >
    </p>

    <h2 class="footer__title">Media</h2>
    <p class="footer__text">
      <a class="footer__link" href="https://ricburton.substack.com/">Blog</a>
    </p>
  </div>
</footer>

<style>
  .radius {
    border-radius: 20px !important;
    margin-bottom: 30px;
  }
  .footer {
    font-weight: 300;
    display: block;
    padding: 30px 24px 40px;
    .footer__left,
    .footer__center {
      max-width: 200px;
    }
    .footer__logo {
      max-width: 144px;
      width: 100%;
    }
    .footer__text {
      color: #bfbfbf;
      font-size: 14px;
      margin: 0;
      &.footer__text--highlight {
        color: #f9f9f9;
        font-size: 16px;
      }
      .footer__link {
        color: #bfbfbf;
        text-decoration: none;
        transition: 0.1s opacity ease;
        will-change: opacity;
        &:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      }
    }
    .hidden {
      visibility: hidden;
    }
    .footer__title {
      color: #fff;
      font-size: 19px;
      font-weight: 300;
      margin: 0 0 4px 0;
    }
    .footer__map {
      max-width: 600px;
      width: 100%;
      display: none;
    }
    .mb {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 970px) {
    .footer {
      column-gap: 32px;
      display: flex;
      /* justify-content: space-between; */
      padding: 60px 0 80px;
    }
  }
</style>
