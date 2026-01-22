var down = document.getElementById("ExpPro");

function AddJob() {
    var JobName = document.createElement("input");
    JobName.setAttribute("type", "text");
    JobName.classList.add("form-control-lg", "WorkTitle");
    JobName.setAttribute("placeholder", "Feral Pokemon");

    var JobPeriod = document.createElement("input");
    JobPeriod.setAttribute("type", "text");
    JobPeriod.classList.add("form-control-lg", "WorkPeriod");
    JobPeriod.setAttribute("placeholder", "3th gen > 8th gen");

    var JobLocation = document.createElement("input");
    JobLocation.setAttribute("type", "text");
    JobLocation.classList.add("form-control-lg","WorkLocation");
    JobLocation.setAttribute("placeholder", "Road 6");

    var JobDescription = document.createElement("input");
    JobDescription.setAttribute("type", "text");
    JobDescription.classList.add("form-control-lg", "WorkDescription");
    JobDescription.setAttribute("placeholder", "Feral Pokemon to practice new trainers");

    const DelExp = document.createElement("button");
    DelExp.classList.add("btn","btn-warning");
    DelExp.textContent = "delete";
    DelExp.addEventListener("click", () => DelExp.parentElement.remove());
    
    const exp_pro = document.querySelector("#ExpPro");
    
    exp_pro.appendChild(JobName);
    exp_pro.appendChild(JobPeriod);
    exp_pro.appendChild(JobLocation);
    exp_pro.appendChild(JobDescription);
    exp_pro.appendChild(DelExp);
  }

  var down = document.getElementById("Diplos");

  function AddDiploma() {
    var DiploName = document.createElement("input");
    DiploName.setAttribute("type", "text");
    DiploName.classList.add("form-control-lg", "Diploma");
    DiploName.setAttribute("placeholder", "Ribbon");

    document.querySelector("#Diplos").appendChild(DiploName);
  }

  var down = document.getElementById("Skills");

  function AddSkill() {
    var SkillName = document.createElement("input");
    SkillName.setAttribute("type", "text");
    SkillName.classList.add("form-control-lg", "Skill");
    SkillName.setAttribute("placeholder", "Thunder Jaw");

    document.querySelector("#Skills").appendChild(SkillName);
  }

   var down = document.getElementById("SoftSkill");

  function AddSoftSkill() {
    var SoftSkillName = document.createElement("input");
    SoftSkillName.setAttribute("type", "text");
    SoftSkillName.classList.add("form-control-lg", "SoftSkill");
    SoftSkillName.setAttribute("placeholder", "Fast");

    document.querySelector("#SoftSkill").appendChild(SoftSkillName);
  }