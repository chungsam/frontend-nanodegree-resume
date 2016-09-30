/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Sam Chung",
    role: "Front-End Developer",
    contacts: {
        mobile: "604-442-3006",
        email: "chungsam@outlook.com",
        github: "chungsam",
        location: "Vancouver, BC"
    },
    bioPic: "images/197x148.gif",
    welcomeMsg: "Hi! Feel free to look around!",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "Python"
    ],
};

var work = {
    title: "Financial Analyst",
    employerName: "IT|IQ Tech Recruiters",
    dates: {
        startDate: "March 2015",
        endDate: "Current"
    },
    location: "Vancouver, BC"
};

var education = {
    schoolName: "British Columbia Institute of Technology",
    schoolDegree: "Bachelor of Technology",
    schoolDates: "September 2012-June 2016",
    schoolLocation: "Burnaby, BC",
    schoolMajor: "Accounting"
};

// format bio info
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

// format work info
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employerName);
var formattedWorkStartDate = HTMLworkDates.replace("%data%", work.dates.startDate);
var formattedWorkEndDate = HTMLworkDates.replace("%data%", work.dates.endDate);
var formattedWorkCity = HTMLworkLocation.replace("%data%", work.location);

// format school info
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);

// add bio info
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);

// add work info
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);

// add education info
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
