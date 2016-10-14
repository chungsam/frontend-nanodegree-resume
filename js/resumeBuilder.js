function addGoogleMap() {
    $("#mapDiv").append(googleMap);

}


var bio = {
    name: "Sam Chung",
    role: "Front-End Developer",
    contacts: {
        mobile: "604-442-3006",
        email: "chungsam@outlook.com",
        github: "chungsam",
        location: "Vancouver, BC"
    },
    welcomeMsg: "Hi! Feel free to look around!",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "Python"
    ],
    "bioPic": "images/197x148.gif",
    display: function() {
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
                formattedSkill = HTMLskills
                    .replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    schools: [{
        name: "British Columbia Institute of Technology",
        degree: "Bachelor of Technology",
        dates: "September 2012-June 2016",
        location: "Burnaby, BC",
        major: ["Accounting"]
    }],
    onlineCourses: [{
        title: "Online Course",
        school: "Online School",
        dates: "Date-Date",
        url: "Url"
    }],
    display: function() {

        function addMajor(element) {
            var formattedMajor = HTMLschoolMajor.replace(
                "%data%", element);

            $('.education-entry').append(formattedMajor);

        }

        function addOnlineCourse(element) {
            var formattedTitle = HTMLonlineTitle
                .replace('%data%', element.title);
            var formattedSchool = HTMLonlineSchool
                .replace('%data%', element.school);
            var formattedDates = HTMLonlineDates
                .replace('%data%', element.dates);
            var formattedURL = HTMLonlineURL
                .replace('%data%', element.url);

            $('#education h3').append(formattedTitle + formattedSchool);
            $('#education h3').append(formattedDates);
            $('#education h3').append(formattedURL);
        }

        if (this.schools.length > 0) {
            for (i = 0; i < this.schools.length; i++) {
                $('#education').append(HTMLschoolStart);

                var formattedName = HTMLschoolName
                    .replace("%data%", this.schools[i].name);
                var formattedDegree = HTMLschoolDegree
                    .replace("%data%", this.schools[i].degree);
                var formattedDates = HTMLschoolDates
                    .replace("%data%", this.schools[i].dates);
                var formattedLocation = HTMLschoolLocation
                    .replace("%data%", this.schools[i].location);

                $('.education-entry').append(formattedName + formattedDegree);
                $('.education-entry').append(formattedDates);
                $('.education-entry').append(formattedLocation);

                this.schools[i].major.forEach(addMajor);

            }
        }

        if (this.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);

            this.onlineCourses.forEach(addOnlineCourse);



        }
    }
};

var work = {
    jobs: [{
        title: "Financial Analyst",
        employer: "IT|IQ Tech Recruiters",
        dates: "May 2014 - Present",
        location: "Vancouver, BC",
        description: "Did some cool stuff."
    }],
    display: function() {
        if (this.jobs.length > 0) {
            for (var job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer
                    .replace("%data%", this.jobs[job].employer);
                var formattedTitle = HTMLworkTitle
                    .replace("%data%", this.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedLocation = HTMLworkLocation
                    .replace("%data%", this.jobs[job].location);
                var formattedDates = HTMLworkDates
                    .replace(
                        "%data%", this.jobs[job].dates);
                var formattedDescription = HTMLworkDescription
                    .replace(
                        "%data%", this.jobs[job].description);
                $(".work-entry:last").append(formattedEmployerTitle);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};



var projects = {

    projects: [{
        title: "Sample Project 1",
        dates: "2014",
        description: "I created something cool with some cool technologies.",
        images: ["#"]
    }],
    display: function() {
        if (this.projects.length > 0) {
            for (i = 0; i < this.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle
                    .replace("%data%", this.projects[i].title);
                var formattedDates = HTMLprojectDates
                    .replace("%data%", this.projects[i].dates);
                var formattedDescription = HTMLprojectDescription
                    .replace("%data%", this.projects[i].description);

                $(".project-entry").append(formattedTitle);
                $(".project-entry").append(formattedDates);
                $(".project-entry").append(formattedDescription);

                if (this.projects[i].images.length > 0) {
                    for (j = 0; j < this.projects[i].images.length; j++) {
                        var formattedImage = HTMLprojectImage
                            .replace("%data%", this.projects[i].images[j]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};








// display work and project content on site
bio.display();
work.display();
projects.display();
education.display();
addGoogleMap();
