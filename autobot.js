document
  .querySelectorAll(".octicon-git-pull-request.color-fg-open")[0]
  .closest(".notification-list-item-link")
  .click();

setTimeout(() => {
  document
    .querySelectorAll(".octicon-file-diff")[0]
    .closest(".tabnav-tab")
    .click();

  setTimeout(() => {
    document.querySelectorAll(".js-reviews-toggle")[0].click();
    var text = "Thanks @dependabot 🤖 👌";
    document.getElementById("pull_request_review_body").value = text;
    document.querySelectorAll('[value="approve"]')[0].click();
    document.querySelectorAll("button.float-left")[2].click();
  }, 3000);
}, 3000);

// part two:
setTimeout(() => {
  document.querySelectorAll(".hx_create-pr-button")[0].click();
  document.querySelectorAll(".js-merge-commit-button")[0].click();

  setTimeout(() => {
    document.querySelectorAll('[title="Done"]')[0].click();
  }, 4000);
}, 4000);
