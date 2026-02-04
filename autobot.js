document.querySelectorAll(".notification-list-item-link")[0].click()

setTimeout(() => {
  document.querySelectorAll(".octicon-file-diff")[0].closest(".tabnav-tab").click();
  setTimeout(() => {
    document.querySelectorAll( '[ class*="ReviewMenuButton-module" ]' )[0].click()
    // PR Merged or Closed:
    if (document.querySelectorAll('[ class*="octicon-git-merge" ]').length > 0 
      || document.querySelectorAll('[ class*="octicon-git-pull-request-closed" ]').length > 0) {
      setTimeout(() => {
        document.querySelectorAll('[ class*="octicon-mention" ]')[0].parentNode.click()
        document.querySelectorAll('[class*="SubmitReviewButton"]')[0].click();
      }, 200);
    }
    else { // Fresh PR:
      setTimeout(() => {
        document.querySelectorAll( '[ class*="prc-Radio" ]' )[1].click()
        document.querySelectorAll('[class*="SubmitReviewButton"]')[0].click();
      }, 200);
    }
  }, 2000);
}, 2000);



// Second Part:

if (document.querySelectorAll('[ class*="octicon-git-merge" ]').length > 0 
      || document.querySelectorAll('[ class*="octicon-git-pull-request-closed" ]').length > 0) {
  setTimeout(() => {
    [...document.querySelectorAll('[class*="timeline-comment-action"]')].at(-1).click()
    setTimeout(() => {
      [...document.querySelectorAll('[class*="js-comment-edit-button"]')].at(-1).click();
      document.querySelectorAll('[ class*="CommentBox-input" ]')[0].value = "Thanks @dependabot 🤖📕👌";
      document.querySelectorAll('[ class*="js-comment-cancel-button"]')[0]
      setTimeout(() => { document.querySelectorAll('[ class*="js-comment-cancel-button"]')[0].nextElementSibling.click() }, 300);
    }, 500);
  }, 200);
} else { // merge:
  setTimeout(() => {
    document.querySelector('[data-variant="primary"]').click()
    setTimeout(() => { document.querySelectorAll(".flex-self-stretch")[0].click(); }, 200);
  }, 500);
}
setTimeout(() => { document.querySelectorAll('[aria-label="Done"]')[0].click(); }, 2000);