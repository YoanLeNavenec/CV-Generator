var down = document.getElementById("ExpPro");

function AddJob() {
    var JobName = document.createElement("input");
    JobName.setAttribute("type", "text");
    JobName.setAttribute("class", "WorkTitle")
    JobName.setAttribute("placeholder", "Feral Pokemon");

    var JobPeriod = document.createElement("input");
    JobPeriod.setAttribute("type", "text");
    JobPeriod.setAttribute("class", "WorkPeriod")
    JobPeriod.setAttribute("placeholder", "3th gen > 8th gen");

    var JobLocation = document.createElement("input");
    JobLocation.setAttribute("type", "text");
    JobLocation.setAttribute("class", "WorkLocation")
    JobLocation.setAttribute("placeholder", "Road 6");

    var JobDescription = document.createElement("input");
    JobDescription.setAttribute("type", "text");
    JobDescription.setAttribute("class", "WorkDescription")
    JobDescription.setAttribute("placeholder", "Feral Pokemon to practice new trainers");

    document.querySelector("#ExpPro").appendChild(JobName);
    document.querySelector("#ExpPro").appendChild(JobPeriod);
    document.querySelector("#ExpPro").appendChild(JobLocation);
    document.querySelector("#ExpPro").appendChild(JobDescription);

   
  }