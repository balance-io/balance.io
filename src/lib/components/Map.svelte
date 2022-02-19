<script>
    import { onMount } from "svelte";

    onMount(() => {
        var MarkerAnnotation = mapkit.MarkerAnnotation,
            clickAnnotation;

        let work = new mapkit.Coordinate(37.80189, -122.45009);

        mapkit.init({
            authorizationCallback: function (done) {
                done(
                    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ilo2SFAyN0tDUUsifQ.eyJpc3MiOiIyN1I2TVVWUk5VIiwiaWF0IjoxNjQ0MTgyMjU3LCJleHAiOjE2NzU2NDE2MDB9.zhkePsjTRHHp1ZqjH5-TzXg0ra5LDyRcca-w2w6jBo3ouZJFrB_Gs3KoY-RwnA6DV_-hamMf7yv65b4O0-pheQ"
                );
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "/services/jwt");
                xhr.addEventListener("load", function () {
                    done(this.responseText);
                });
                xhr.send();
            },
        });
        var map = new mapkit.Map("map");
        // Setting properties on creation:
        // var sfoAnnotation = new MarkerAnnotation(sfo, { color: "#f4a56d", title: "SFO", glyphText: "✈️" });

        // Setting properties after creation:
        var workAnnotation = new MarkerAnnotation(work);
        workAnnotation.color = "#000000";
        workAnnotation.title = "Balance Software";
        workAnnotation.subtitle = "Balance H.Q";
        workAnnotation.selected = "true";
        workAnnotation.glyphImage = { 1: "/img/Ringfixed2.svg" };

        // Add and show both annotations on the map
        map.showItems([workAnnotation]);
    });
</script>

<a href="http://maps.apple.com/?ll=37.80189,-122.45009&z=17.8">
    <div style="border-radius: 20px;" id="map" />
</a>

<style>
    #map {
        height: 250px;
        border-radius: 20px !important;
        max-width: 860px;
        width: 100%;
        margin: 0;
    }
    @media screen and (max-width: 660px) {
        #map {
            height: 150px;
            max-width: 600px;
            width: 100%;
        }
    }
    @media screen and (min-width: 970px) {
        #map {
            margin-right: 10px;
            padding-left: 20px;
            width: 600px;
        }
    }
    :global {
        .syrup-canvas {
            border-radius: 20px !important;
        }
        .syrup-canvas,
        .rt-root {
            width: 100% !important;
        }
    }
</style>
