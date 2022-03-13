// Get Page URL:
var url = window.location.href;
console.log(url);
window.location.href = url + 'skills';


window.scrollTo(0, document.body.scrollHeight - 1000);
setTimeout(function() {
  setTimeout(function() {
    document.getElementsByClassName('pv-skills-section__additional-skills')[0].click()
    var skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
    for (var i = 0; i < skills.length; ++i) {
      skills[i].click();
    }
  }, 1000);
}, 1000);



    var skills = document.getElementsByClassName('artdeco-button--muted');
    for (var i = 0; i < skills.length; ++i) {
      skills[i].click();
    }

i.toString().indexOf("Show all 50 skills")

// Once on the skills page:
window.scrollTo(0, document.body.scrollHeight - 100);
var skills = document.querySelectorAll('.pv2 > .artdeco-button--muted')
for (var i = 0; i < skills.length; ++i) {
  skills[i].click();
}

// WORKING CODE March 20222:
// Find the "Show all 50 skills" button on profile page:
var links = document.querySelectorAll('.pvs-navigation__text')

// Loop through the list of links and look for skills:
links.forEach((i) => {
  if(i.innerHTML.indexOf('skills') > -1) {
    i.parentElement.click()
    setTimeout(function() {
      // Once on the skills page, scroll to the bottom:
      window.scrollTo(0, document.body.scrollHeight - 100);
      // Locate all skills buttons and click them:
      var skills = document.querySelectorAll('.pv2 > .artdeco-button--muted')
      for (var i = 0; i < skills.length; ++i) {
        skills[i].click();
      }
    }, 2000);
  }
})
