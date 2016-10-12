/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Sam Chung",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "604-442-3006",
        "email": "chungsam@outlook.com",
        "github": "chungsam",
        "location": "Vancouver, BC"
    },
    "bioPic": "images/197x148.gif",
    "welcomeMsg": "Hi! Feel free to look around!",
    "skills": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "Python"
    ],
};

var work = {

    jobs: [{
            "title": "Financial Analyst",
            "employer": "IT|IQ Tech Recruiters",
            "dates": "May 2014 - Present",
            "location": "Vancouver, BC",
            "description": "Gained extensive experience in creating data models using Microsoft PowerPivot and advanced Excel skills including custom VBA coding. Also created a consultant payroll tracking system with Microsoft Access to track payments and to import timesheet and ATS data via CSVs."
        }],
        display: function() {
            if (work.jobs.length > 0) {
                for (var job in work.jobs) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                    var formattedEmployerTitle = formattedEmployer + formattedTitle;
                    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                    $(".work-entry:last").append(formattedEmployerTitle);
                    $(".work-entry:last").append(formattedLocation);
                    $(".work-entry:last").append(formattedDates);
                    $(".work-entry:last").append(formattedDescription);
                }
            }
        }
};

var education = {
    "schools": [{
        "name": "british columbia institute of technology",
        "degree": "bachelor of technology",
        "dates": "September 2012-June 2016",
        "location": "Burnaby, BC",
        "major": ["Accounting"]
    }],
    "onlineCourses": [{

    }]
};

var projects = {

    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "I created something cool with some cool technologies.",
        "images": ["#"]
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(
                "%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace(
                "%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace(
                "%data%", projects.projects[i].description);

            $(".project-entry").append(formattedTitle);
            $(".project-entry").append(formattedDates);
            $(".project-entry").append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace(
                        "%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }

};


// format bio info
var formattedName = HTMLheaderName
    .replace("%data%", bio.name);
var formattedRole = HTMLheaderRole
    .replace("%data%", bio.role);
var formattedMobile = HTMLmobile
    .replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail
    .replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub
    .replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation
    .replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic
    .replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg
    .replace("%data%", bio.welcomeMsg);

// add bio info
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);

// add skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

// add work info
function displayWork() {

}

// display functions
work.display();
projects.display();
