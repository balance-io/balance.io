<script context="module">
    import { browser, dev } from "$app/env";
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<script>
    import "$lib/global.scss";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Announcement from "$lib/components/Announcement.svelte";
</script>

<div class="container">
    <div class="container__child">
        <Navbar />
        <slot />
    </div>
</div>

<div class="container container--footer">
    <div class="container__child">
        <Footer />
    </div>
</div>

<style>
    .container {
        background-color: #fafafa;
        border-radius: 0 0 32px 32px;
        display: flex;
        justify-content: center;
        width: 100%;
        &.container--footer {
            background-color: #15242e;
            border-radius: 0;
        }
        .container__child {
            max-width: 1100px;
            width: 100%;
        }
    }
</style>
