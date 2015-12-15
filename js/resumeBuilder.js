/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Inna Bensoussan",
  "role" : "Software Developer",
  "contacts" : {
    "mobile": "(xxx)xxx-xxxxx",
    "email": "xxx@gmail.com",
    "github": "xxx.github.com",
    "twitter": "",
    "location": "Palo Alto, CA"
  },
  "welcomeMessage": "Highly-skilled software development professional bringing more than 10 years of expertise in all aspects of the software development life cycle, including requirements analysis, design, development and production support.<br/>Possess strong commitment to team environment dynamics with the ability to contribute expertise and follow leadership directives at appropriate times, accurate and thorough, able to learn new technologies fast, Strong UX/Product sense, open minded to users’ needs and requirements, proven company loyalty and efficiency.",
  "skills": ["web development","design", "JavaScript", "jQuery", "AJAX", "CSS", "Twitter Bootstrap", "Java", "GIT"],
  "biopic": "images/inna.jpg",
  display: function(){
    //Name & role:
    var formattedName = fillData(HTMLheaderName, this.name);
    var formattedRole = fillData(HTMLheaderRole, this.role);
    $("#header").prepend(formattedName + formattedRole + internationalizeButton);
    
    //Contacts:
    for (var contact in this.contacts) {
      var currContact = this.contacts[contact];
      if(currContact){
        var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
        formattedContact = fillData(formattedContact, currContact);
        $('#topContacts').append(formattedContact); 
        $('#footerContacts').append(formattedContact); 
      }
    }  

    //biopic + welcome message::
    var formattedImage = fillData(HTMLbioPic, this.biopic);
    var formattedMessage = fillData(HTMLwelcomeMsg, this.welcomeMessage);
    $("#header").append(formattedImage + formattedMessage);

    //skills:
    if(this.skills.length>0) {
      $("#header").append(HTMLskillsStart);
      for (var skill in this.skills) {
        var currSkill = this.skills[skill];
        formattedSkill = fillData(HTMLskills, currSkill);
        $('#skills').append(formattedSkill); 
      }
    }

  }
};

var education = {
  "schools": [
    {
      "name": "Tel Aviv University",
      "location": "Tel Aviv, Israel",
      "degree": "M.B.A",
      "majors": ["management of technology and information systems"],
      "dates": 2006,
      "url": ""
    },
    {
      "name": "Hacker software Training Center",
      "location": "Tel Aviv, Israel",
      "degree": "",
      "majors": ["Software Programmer"],
      "dates": 2000,
          "url": ""
    },
    {
      "name": "Tel Aviv University",
      "location": "Tel Aviv, Israel",
      "degree": "B.A",
      "majors": ["Business", "Psychology"],
      "dates": 1998,
      "url": ""
    }
  ],
  "onlineCourses": [
        {
          "title": "Front-End Web Developer Nanodegree",
          "school": "Udacity",
          "date": 2015,
          "url": "https://www.udacity.com"
      }
    ],
  display: function(){
    //console.log("here");
    for (var school in this.schools) {
      var currSchool = this.schools[school];
      $("#education").append(HTMLschoolStart);

      var formattedName = fillData(HTMLschoolName, currSchool.name);
      var formattedDegree = fillData(HTMLschoolDegree, currSchool.degree);
      var formattedDates = fillData(HTMLschoolDates, currSchool.dates);
      var formattedLocation = fillData(HTMLworkLocation, currSchool.location);
      var formattedMajors = fillData(HTMLschoolMajor, currSchool.majors.toString());
      
      $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation+ formattedMajors);
    }

    if(this.onlineCourses.length>0){
      $("#education").append(HTMLonlineClasses);

      for (var onlineSchool in this.onlineCourses) {
        var currOnlineSchool = this.onlineCourses[onlineSchool];
        $("#education").append(HTMLschoolStart);
        
        var formattedTitle = fillData(HTMLonlineTitle, currOnlineSchool.title);
        var formattedOnlineSchool = fillData(HTMLonlineSchool, currOnlineSchool.school);
       var formattedOnlineDates = fillData(HTMLonlineDates, currOnlineSchool.date);
        var formattedUrl = fillData(HTMLonlineURL, currOnlineSchool.url);
        
        $(".education-entry:last").append(formattedTitle + formattedOnlineSchool + formattedOnlineDates + formattedUrl);
      }
    }
  }
};

var work = {
  "jobs": [
    {
        "employer": "Stanford University",
        "title": "Software Developer",
        "location": "Palo Alto, CA, USA",
        "dates": "2010-present", 
        "description": "Researching, designing, developing, and deploying Application software and graphic design changes including diagnostic assessment and remediation of bugs and enhancement.<br>Developing next generation front end web application using HTML, JavaScript, jQuery, jQuery DataTables, RequireJS, CSS, LESS, Twitter Bootstrap, JSP.",
         "more": "Working closely with business analysts, product management and developers to define user requirements and translating them into reliable, intuitive features and robust solutions in a timely manner to ensure software solutions elevated client side experience. <br/>Serving as technical resource, providing continued maintenance and development of bug fixes, upgrading interfaces and improving performance for existing web applications.<br/>Redesigning, developing and technical administration of WordPress website.<br/>Solid engineering hygiene including focus on quality, documentation and unit testing"
    },
    {
        "employer": "Palo Alto JCC",
        "title": "Webmaster ",
        "location": "Palo Alto, CA, USA",
        "dates": "2009-2010",
        "description": "Designed and created web pages, maintained the company’s website including monitoring, improving and updating website performance.",
         "more": "Worked with all departments and different policy making stake holders in the company to obtain and supply factual information.<br/>Collaborated with creative staff on design and layout issues to facilitate web publishing. Manipulation and conversion of existing images for online use (JPG, GIF) using Adobe Photoshop.<br/>Researched emerging technologies and services that may enhance the Web experience and make recommendations to management"
    },
    {
        "employer": "Fundtech",
        "title": "Web Application Developer",
        "location": "Ramat Gan, Israel",
        "dates": "2004-2008",
        "description": "Developed front-end and back-end layers of multi-tiered architecture and multi-platform technology web based product: utilizing dynamic html/xhtml, extensive object-oriented JavaScript, CSS, XML, XSL/T and JSP for the GUI front layer; Using java in J2EE architecture, Servlets, EJB and JDBC connectivity (to Oracle and SQL databases) for the business logic in server side.",
         "more": "Integrated new functionalities into existing code and with core layers written in C++.<br/>Redesigned and replaced existing code in C++ and added new business layer and data management components over J2EE architecture.<br/>Worked continuously with business analysts, QA and other stake holders in the company through all stages of the development cycle including requirement gathering, design, coding, testing, debugging, bugs fixing including production support and maintenance.<br/>Responsible for implementation of new GUI design, including GUI layer migration to new technologies and mentoring new developers."
  }
  ],
  display: function(){
    var n=0;
    for (var job in this.jobs) {
      var currJob = this.jobs[job];
      $("#workExperience").append(HTMLworkStart);
      //console.log(currJob);
      var formattedEmployer = fillData(HTMLworkEmployer, currJob.employer);
      var formattedTitle = fillData(HTMLworkTitle, currJob.title);
      var formattedDates = fillData(HTMLworkDates, currJob.dates);
      var formattedLocation = fillData(HTMLworkLocation, currJob.location);
      var formattedDescription = fillData(HTMLworkDescription, currJob.description);      

      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation +formattedDescription);

      
      if(currJob.more) {
            var formattedMoreLink = HTMLmoreLink.replace("%n%", n);
            $(".work-entry:last p").append(formattedMoreLink);

            var formattedMore = fillData(HTMLworkMore, currJob.more);
            formattedMore = formattedMore.replace("%n%", n++);
            $(".work-entry:last").append(formattedMore);
         }   
    }

  }
};

var projects = {
  "projects": [
      {
        "title": "P1 Portfolio",
        "dates": "2015",
        "description": "Build a portfolio site",
        "images": []
      }
    ],
    display: function(){
      for (var project in this.projects) {
        $("#projects").append(HTMLprojectStart);

        var currProject = this.projects[project];
        var formattedTitle = fillData(HTMLprojectTitle, currProject.title);
        var formattedDates = fillData(HTMLprojectDates, currProject.dates);
        var formattedDescription = fillData(HTMLprojectDescription, currProject.description);
        
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if(currProject.images.length>0) {
          for (var image in currProject.images) {
            var formattedImage = fillData(HTMLprojectImage, currProject.images[image]);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    } 
};

function fillData(templateString, data) {
  return templateString.replace("%data%", data);
}

function inName() {
  var arrName = bio.name.split(" ");
  console.log(arrName);
  arrName[0] = arrName[0].slice(0,1).toUpperCase() + arrName[0].slice(1).toLowerCase();
  arrName[1] = arrName[1].toUpperCase();

  return arrName.join(" ");
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);