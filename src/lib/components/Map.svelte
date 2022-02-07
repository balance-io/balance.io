<!-- svelte-ignore a11y-missing-attribute -->
<html>
    <head>
        <meta charset="utf-8" />

        <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script>

        <style>
            #map > div {
                height: 200px;
                max-width: 600px;
                border-radius: 10px;
                width: 100%;

                margin-right: 10px;
            }
        </style>
    </head>

    <body>
        <div id="map" />

        <script>
            var MarkerAnnotation = mapkit.MarkerAnnotation,
                clickAnnotation;
            // var sfo = new mapkit.Coordinate(37.616934, -122.383790),
            work = new mapkit.Coordinate(37.80189, -122.45009);

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
        </script>
    </body>
</html>
