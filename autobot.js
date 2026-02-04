document.querySelectorAll(".notification-list-item-link")[0].click();
setTimeout(() => { // Navigate to the Files changed tab:
  document.querySelectorAll(".octicon-file-diff")[0].closest(".tabnav-tab").click();
  setTimeout(() => { // Click the Submit comments dropdown button:
    document.querySelectorAll( '[ class*="ReviewMenuButton-module" ]' )[0].click();
    // PR Merged or Closed:
    if (document.querySelectorAll('[ class*="octicon-git-merge" ]').length > 0 // merged
      || document.querySelectorAll('[ class*="octicon-git-pull-request-closed" ]').length > 0) { // Dummy comment:
      setTimeout(() => { document.querySelectorAll('[ class*="octicon-mention" ]')[0].parentNode.click(); }, 200);
    } // Fresh PR:
    else { setTimeout(() => { document.querySelectorAll( '[ class*="prc-Radio" ]' )[1].click(); }, 200); }
  }, 2000); // Once the PR is approved or commented on, click "Submit reivew":
  setTimeout(() => { document.querySelectorAll('[class*="SubmitReviewButton"]')[0].click(); }, 2300);
}, 2000);

// Second Part:
setTimeout(() => { document.querySelectorAll('[aria-label="Done"]')[0].click(); }, 2500);
if (document.querySelectorAll('[ class*="octicon-git-merge" ]').length > 0 
      || document.querySelectorAll('[ class*="octicon-git-pull-request-closed" ]').length > 0) {
  setTimeout(() => { // Active the comment actions dropdown:
    [...document.querySelectorAll('[class*="timeline-comment-action"]')].at(-1).click();
    setTimeout(() => { // Edit the comment from "@" -> "Thanks @dependabot"
      [...document.querySelectorAll('[class*="js-comment-edit-button"]')].at(-1).click();
      document.querySelectorAll('[ class*="CommentBox-input" ]')[0].value = "Thanks @dependabot 🤖📕👌";
      document.querySelectorAll('[ class*="js-comment-cancel-button"]')[0];
      setTimeout(() => { document.querySelectorAll('[ class*="js-comment-cancel-button"]')[0].nextElementSibling.click() }, 500);
    }, 500);
  }, 500);
} else { // Merge the open/approved PR:
  setTimeout(() => {
    document.querySelector('[data-variant="primary"]').click();
    setTimeout(() => { document.querySelectorAll(".flex-self-stretch")[0].click(); }, 200);
  }, 500);
}