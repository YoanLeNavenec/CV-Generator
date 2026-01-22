var down = document.getElementById("ExpPro");

function AddJob() {
    const JobDiv = document.createElement("div");

    var JobNameLabel = document.createElement("label");
    JobNameLabel.textContent = "Job Name";

    var JobName = document.createElement("input");
    JobName.setAttribute("type", "text");
    JobName.classList.add("form-control-lg", "WorkTitle");
    JobName.setAttribute("placeholder", "Feral Pokemon");
    JobNameLabel.appendChild(JobName);


    var JobPeriodLabel = document.createElement("label");
    JobPeriodLabel.textContent = "Job Period";

    var JobPeriod = document.createElement("input");
    JobPeriod.setAttribute("type", "text");
    JobPeriod.classList.add("form-control-lg", "WorkPeriod");
    JobPeriod.setAttribute("placeholder", "3th gen > 8th gen");
    JobPeriodLabel.appendChild(JobPeriod);


    var JobLocationLabel = document.createElement("label");
    JobLocationLabel.textContent = "Job Location";

    var JobLocation = document.createElement("input");
    JobLocation.setAttribute("type", "text");
    JobLocation.classList.add("form-control-lg","WorkLocation");
    JobLocation.setAttribute("placeholder", "Road 6");
    JobLocationLabel.appendChild(JobLocation);


    var JobDescriptionLabel = document.createElement("label");
    JobDescriptionLabel.textContent = "Job Description";

    var JobDescription = document.createElement("input");
    JobDescription.setAttribute("type", "text");
    JobDescription.classList.add("form-control-lg", "WorkDescription");
    JobDescription.setAttribute("placeholder", "Feral Pokemon to practice new trainers");
    JobDescriptionLabel.appendChild(JobDescription);

    const DelExp = document.createElement("button");
    DelExp.classList.add("btn","btn-warning");
    DelExp.textContent = "delete";
    DelExp.addEventListener("click", () => DelExp.parentElement.remove());
    
    JobDiv.appendChild(JobNameLabel);
    JobDiv.appendChild(JobPeriodLabel);
    JobDiv.appendChild(JobLocationLabel);
    JobDiv.appendChild(JobDescriptionLabel);
    JobDiv.appendChild(DelExp);

    const exp_pro = document.querySelector("#ExpPro");

    exp_pro.appendChild(JobDiv);
  }

  var down = document.getElementById("Diplos");

  function AddDiploma() {
    const DiploDiv = document.createElement("div");
    var DiploName = document.createElement("input");

    DiploName.setAttribute("type", "text");
    DiploName.classList.add("form-control-lg", "Diploma");
    DiploName.setAttribute("placeholder", "Ribbon");

    const DelDiplo = document.createElement("button");
    DelDiplo.classList.add("btn","btn-warning");
    DelDiplo.textContent = "delete";
    DelDiplo.addEventListener("click", () => DelDiplo.parentElement.remove());

    DiploDiv.appendChild(DiploName);
    DiploDiv.appendChild(DelDiplo);
    document.querySelector("#Diplos").appendChild(DiploDiv);
  }

  var down = document.getElementById("Skills");

  function AddSkill() {
    const SkillDiv = document.createElement("div");
    var SkillName = document.createElement("input");

    SkillName.setAttribute("type", "text");
    SkillName.classList.add("form-control-lg", "Skill");
    SkillName.setAttribute("placeholder", "Thunder Jaw");

    const DelSkill = document.createElement("button");
    DelSkill.classList.add("btn","btn-warning");
    DelSkill.textContent = "delete";
    DelSkill.addEventListener("click", () => DelSkill.parentElement.remove());

    SkillDiv.appendChild(SkillName);
    SkillDiv.appendChild(DelSkill);
    document.querySelector("#Skills").appendChild(SkillDiv);
  }

   var down = document.getElementById("SoftSkill");

  function AddSoftSkill() {
    var SoftSkillName = document.createElement("input");
    SoftSkillName.setAttribute("type", "text");
    SoftSkillName.classList.add("form-control-lg", "SoftSkill");
    SoftSkillName.setAttribute("placeholder", "Fast");

    document.querySelector("#SoftSkill").appendChild(SoftSkillName);
  }