// 1. Select the next PR notification
document.querySelectorAll(".notification-list-item-link")[0].click();

// 2. Navigate to the Files changed tab:
document.querySelectorAll(".octicon-file-diff")[0].closest(".tabnav-tab").click();
setTimeout(() => {
  document.querySelectorAll( '[ class*="ReviewMenuButton-module" ]' )[0].click();
  setTimeout(() => { document.querySelectorAll('[ class*="octicon-mention" ]')[0].parentNode.click(); }, 200);
  setTimeout(() => { document.querySelectorAll( '[ class*="prc-Radio" ]' )[1].click(); }, 300); 
  setTimeout(() => { document.querySelectorAll('[class*="SubmitReviewButton"]')[0].click(); }, 500);
}, 3000);

// 3. Comment || Merge:
setTimeout(() => { document.querySelectorAll('[aria-label="Done"]')[0].click(); }, 2500);
// Active the comment actions dropdown:
[...document.querySelectorAll('[class*="timeline-comment-action"]')].at(-1).click();
setTimeout(() => { // Edit the comment from "@" -> "Thanks @dependabot"
  [...document.querySelectorAll('[class*="js-comment-edit-button"]')].at(-1).click();
  document.querySelectorAll('[ class*="CommentBox-input" ]')[0].value = "Thanks @dependabot 🤖📕👌";
  setTimeout(() => { document.querySelectorAll('[ class*="js-comment-cancel-button"]')[0].nextElementSibling.click() }, 400);
}, 600);
setTimeout(() => {
  document.querySelector('[data-variant="primary"]').click();
  setTimeout(() => { document.querySelectorAll(".flex-self-stretch")[0].click(); }, 700);
}, 1600);