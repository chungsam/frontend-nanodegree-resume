var addGoogleMap = function() {
    $("#mapDiv").append(googleMap);

};

var bio = {
    name: "Sam Chung",
    role: "Front-End Developer",
    contacts: {
        mobile: "604-442-3006",
        email: "chungsam@outlook.com",
        github: "chungsam",
        location: "Vancouver, BC"
    },
    welcomeMessage: "Hi! Feel free to look around!",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "Python"
    ],
    biopic: "images/fry.jpg",
};

bio.display = function() {
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
            .replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg
            .replace("%data%", bio.welcomeMessage);

        // add bio info to header
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);
        $("#topContacts").append(formattedEmail, formattedGithub, formattedMobile, formattedLocation);

        // add skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills
                    .replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }

        // add contact info to footer
        $("#footerContacts").append(formattedEmail, formattedGithub, formattedMobile, formattedLocation);
    };

var education = {
    schools: [{
        name: "British Columbia Institute of Technology",
        degree: "Bachelor of Technology",
        dates: "September 2012 - June 2016",
        location: "Burnaby, BC",
        major: ["Accounting"],
        url: "http://www.bcit.ca"
    }],
    onlineCourses: [{
        title: "Online Course",
        school: "Online School",
        dates: "Month Year - Month Year",
        url: "http://www.udacity.com"
    }],
};

education.display = function() {

        function addMajor(element) {
            var formattedMajor = HTMLschoolMajor.replace(
                "%data%", element);

            $('.education-entry').append(formattedMajor);

        }

        function addOnlineCourse(element) {
            var formattedTitle = HTMLonlineTitle
                .replace('%data%', element.title)
                .replace('#', element.url);
            var formattedSchool = HTMLonlineSchool
                .replace('%data%', element.school);
            var formattedDates = HTMLonlineDates
                .replace('%data%', element.dates);
            var formattedURL = HTMLonlineURL
                .replace('%data%', element.url);

            $('#education h3').append(formattedTitle + formattedSchool, formattedDates, formattedURL);
        }

        if (this.schools.length > 0) {
            var countSchools = this.schools.length;

            for (i = 0; i < countSchools; i++) {
                $('#education').append(HTMLschoolStart);

                var formattedName = HTMLschoolName
                    .replace("%data%", this.schools[i].name)
                    .replace("#", this.schools[i].url);
                var formattedDegree = HTMLschoolDegree
                    .replace("%data%", this.schools[i].degree);
                var formattedDates = HTMLschoolDates
                    .replace("%data%", this.schools[i].dates);
                var formattedLocation = HTMLschoolLocation
                    .replace("%data%", this.schools[i].location);

                $('.education-entry').append(formattedName + formattedDegree, formattedDates, formattedLocation);

                this.schools[i].major.forEach(addMajor);

            }
        }

        if (this.onlineCourses.length > 0) {

            $('#education').append(HTMLonlineClasses);

            this.onlineCourses.forEach(addOnlineCourse);
        }
    }

var work = {
    jobs: [{
        title: "Financial Analyst",
        employer: "IT|IQ Tech Recruiters",
        dates: "May 2014 - Present",
        location: "Vancouver, BC",
        description: "Did some cool stuff with some cool technologies and learned a lot!"
    }, {
        title: "Title 2",
        employer: "Employer 2",
        dates: "Month Year - Month Year",
        location: "Vancouver, BC",
        description: "Did some cool stuff with some cool technologies and learned a lot!"
    }],
    display: function() {
        if (this.jobs.length > 0) {

            this.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer
                    .replace("%data%", job.employer);
                var formattedTitle = HTMLworkTitle
                    .replace("%data%", job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedLocation = HTMLworkLocation
                    .replace("%data%", job.location);
                var formattedDates = HTMLworkDates
                    .replace(
                        "%data%", job.dates);
                var formattedDescription = HTMLworkDescription
                    .replace(
                        "%data%", job.description);
                $(".work-entry:last").append(formattedEmployerTitle);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
            });
        }
    }
};



var projects = {

    projects: [{
        title: "Sample Project 1",
        dates: "2014",
        description: "I created something cool with some cool technologies.",
        images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
        if (this.projects.length > 0) {
            var countProjects = this.projects.length;

            for (i = 0; i < countProjects; i++) {
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
                    var countImages = this.projects[i].images.length;

                    for (j = 0; j < countImages; j++) {
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
