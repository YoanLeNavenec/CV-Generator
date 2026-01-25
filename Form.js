var down = document.getElementById("ExpPro");

//Generating a new number for each name and Id in Job Section//
    var NN = 1;

    function NumName(){
    NN++;
    return NN;
    }

    var NP = 1;
    function NumPeriod(){
    NP++;
    return NP;
    }


    var NL = 1;
    function NumLocation(){
    NL++;
    return NL;
    }

    var ND= 1;
    function NumDescription(){
    ND++;
    return ND;
    }

//Generate a new job in the job section//
function AddJob() {
    const JobDiv = document.createElement("div");

    var JobNameLabel = document.createElement("label");
    JobNameLabel.textContent = "Job Name";

    var JobName = document.createElement("input");
    JobName.setAttribute("type", "text");
    JobName.classList.add("form-control-lg", "Work");
    JobName.setAttribute("placeholder", "Feral Pokemon");
    JobName.setAttribute("name", 'JobName' + NumName());
    JobNameLabel.appendChild(JobName);

    var JobPeriodLabel = document.createElement("label");
    JobPeriodLabel.textContent = "Job Period";

    var JobPeriod = document.createElement("input");
    JobPeriod.setAttribute("type", "text");
    JobPeriod.classList.add("form-control-lg", "Work");
    JobPeriod.setAttribute("placeholder", "3th gen > 8th gen");
    JobPeriod.setAttribute("name", 'JobPeriod' + NumPeriod());
    JobPeriodLabel.appendChild(JobPeriod);

    var JobLocationLabel = document.createElement("label");
    JobLocationLabel.classList.add("form-label");
    JobLocationLabel.textContent = "Job Location";

    var JobLocation = document.createElement("input");
    JobLocation.setAttribute("type", "text");
    JobLocation.classList.add("form-control-lg","Work");
    JobLocation.setAttribute("placeholder", "Road 6");
    JobLocation.setAttribute("name", 'JobLocation' + NumLocation());
    JobLocationLabel.appendChild(JobLocation);


    var JobDescriptionLabel = document.createElement("label");
    JobDescriptionLabel.classList.add("form-label");
    JobDescriptionLabel.textContent = "Job Description";

    var JobDescription = document.createElement("input");
    JobDescription.setAttribute("type", "text");
    JobDescription.classList.add("form-control-lg", "Work");
    JobDescription.setAttribute("name", 'JobDescription' + NumDescription());
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

  //Generate a new number for the names/id's in diploma section//

  var DN = 1;

    function NumDiplo(){
    DN++;
    return DN;
    }

    var NDY = 1;
    function NumDYear(){
    NDY++;
    return NDY;
    }

  //generate new diploma in diploma section//

  var down = document.getElementById("Diplos");

  function AddDiploma() {
    const DiploDiv = document.createElement("div");
    var DiploName = document.createElement("input");
    var DiploYear = document.createElement("input");

    const DiploNameLabel = document.createElement("label");
    DiploNameLabel.setAttribute("type", "label");
    DiploNameLabel.classList.add("form-label");
    DiploNameLabel.textContent = "Diploma Name";

    DiploName.setAttribute("type", "text");
    DiploName.classList.add("form-control-lg", "DiplomaName");
    DiploName.setAttribute("placeholder", "Ribbon");
    DiploName.setAttribute("name", 'DiploName' + NumDiplo())
    DiploNameLabel.appendChild(DiploName);

    const DiploYearLabel = document.createElement("label");
    DiploYearLabel.setAttribute("type", "label");
    DiploYearLabel.classList.add("form-label");
    DiploYearLabel.textContent = "Year of Obtention";

    DiploYear.setAttribute("type", "text");
    DiploYear.classList.add("form-control-lg", "DiploYear");
    DiploYear.setAttribute("name", 'DiploName' + NumDYear())
    DiploYear.setAttribute("placeholder", "4th gen");
    DiploYearLabel.appendChild(DiploYear);

    const DelDiplo = document.createElement("button");
    DelDiplo.classList.add("btn","btn-warning");
    DelDiplo.textContent = "delete";
    DelDiplo.addEventListener("click", () => DelDiplo.parentElement.remove());

    DiploDiv.appendChild(DiploNameLabel);
    DiploDiv.appendChild(DiploYearLabel);
    DiploDiv.appendChild(DelDiplo);
    document.querySelector("#Diplos").appendChild(DiploDiv);
  }

  //Generate new number for names/ids in skill section//

  var NS = 1;

    function NumSkill(){
    NS++;
    return NS;
    }

  //generate a new skill in the skill section//

  var down = document.getElementById("Skills");

  function AddSkill() {
    const SkillDiv = document.createElement("div");
    var SkillName = document.createElement("input");

    SkillName.setAttribute("type", "text");
    SkillName.classList.add("form-control-lg", "Skill");
    SkillName.setAttribute("placeholder", "Thunder Jaw");
    SkillName.setAttribute("name", "Skill" + NumSkill());

    const DelSkill = document.createElement("button");
    DelSkill.classList.add("btn","btn-warning");
    DelSkill.textContent = "delete";
    DelSkill.addEventListener("click", () => DelSkill.parentElement.remove());

    SkillDiv.appendChild(SkillName);
    SkillDiv.appendChild(DelSkill);
    document.querySelector("#Skills").appendChild(SkillDiv);
  }

  //Generate a new number for names/id in soft skill section//
  var NSS = 1;

    function NumSoftSkill(){
    NSS++;
    return NSS;
    }

  //generate a new soft skill in the soft skill section//

   var down = document.getElementById("SoftSkill");

  function AddSoftSkill() {
    const SoftDiv = document.createElement("div");
    var SoftSkillName = document.createElement("input");

    SoftSkillName.setAttribute("type", "text");
    SoftSkillName.classList.add("form-control-lg", "SoftSkill");
    console.log(SoftSkillName);
    SoftSkillName.setAttribute("name", "SoftSkill" + NumSoftSkill());
    SoftSkillName.setAttribute("placeholder", "Fast");

    const DelSoft = document.createElement("button");
    DelSoft.classList.add("btn", "btn-warning");
    DelSoft.textContent = "delete";
    DelSoft.addEventListener("click", () => DelSoft.parentElement.remove());

    SoftDiv.appendChild(SoftSkillName);
    SoftDiv.appendChild(DelSoft);
    document.querySelector("#SoftSkill").appendChild(SoftDiv);
  }
