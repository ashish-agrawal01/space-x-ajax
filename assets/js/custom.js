var req = new XMLHttpRequest();
req.onreadystatechange = function () {
  if (req.readyState == 4 && req.status == 200) {
    var spaceX = JSON.parse(req.responseText);
    var strHtml = '<div class="row">';
    for (var i = 0; i < spaceX.length; i += 1) {
      strHtml += `<div class="col prgcol"><div class="card h-100"><div class="card-body">
        <picture class="mission-photo bg-light">
        <source media="(min-width: 576px)" srcset="${spaceX[i].links.mission_patch}">
        <img src="${spaceX[i].links.mission_patch_small}"></picture>
        <a href="#" class="mission-name">${spaceX[i].mission_name} #${spaceX[i].flight_number}</a>
        <ul class="list-unstyled mission-desc">
        <li><label>Mission Ids:</label> <a href="#">${spaceX[i].mission_id}</a></li>
        <li><label>Launch Year:</label> <a href="#">${spaceX[i].launch_year}</a></li>
        <li><label>Successful Launch:</label> <a href="#">${spaceX[i].launch_success}</a></li>
        <li><label>Successful Landing:</label> <a href="#">${spaceX[i].launch_landing}</a></li>
        </div></div></div>`;
    }
    strHtml += "</div>";
    document.getElementById("spaceXdata").innerHTML = strHtml;
  }
};

req.open("GET", "https://api.spacexdata.com/v3/launches?limit=100", true);
req.send();
function openYear(tyear) {
  addEventListener("click", function () {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (req.readyState == 4 && req.status == 200) {
        var spaceX = JSON.parse(req.responseText);
        console.log(spaceX[0].launch_year);
        var strHtml = '<div class="row">';
        for (var i = 0; i < spaceX.length; i += 1) {
          if (spaceX[i].launch_year == tyear) {
            strHtml += `<div class="col prgcol"><div class="card h-100"><div class="card-body">
                <picture class="mission-photo bg-light">
                <source media="(min-width: 576px)" srcset="${spaceX[i].links.mission_patch}">
                <img src="${spaceX[i].links.mission_patch_small}"></picture>
                <a href="#" class="mission-name">${spaceX[i].mission_name} #${spaceX[i].flight_number}</a>
                <ul class="list-unstyled mission-desc">
                <li><label>Mission Ids:</label> <a href="#">${spaceX[i].mission_id}</a></li>
                <li><label>Launch Year:</label> <a href="#">${spaceX[i].launch_year}</a></li>
                <li><label>Successful Launch:</label> <a href="#">${spaceX[i].launch_success}</a></li>
                <li><label>Successful Landing:</label> <a href="#">${spaceX[i].launch_landing}</a></li>
                </div></div></div>`;
          }
        }
        strHtml += "</div>";
        document.getElementById("spaceXdata").innerHTML = strHtml;
      }
    };
    req.open(
      "GET",
      "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014",
      true
    );
    req.send();
  });
}
