document
  .querySelectorAll(".notification-list-item-link")[0]
  .click()


setTimeout(() => {
  document
    .querySelectorAll(".octicon-file-diff")[0]
    .closest(".tabnav-tab")
    .click();

  setTimeout(() => {

    document.querySelectorAll( '[ class*="ReviewMenuButton-module" ]' )[0].click()
    // PR Merged or Closed:
    if (document.querySelectorAll('[ class*="octicon-git-merge" ]').length > 0 
      || document.querySelectorAll('[ class*="octicon-git-pull-request-closed" ]').length > 0) {
      setTimeout(() => {
        var sub = document.querySelectorAll('[class*="SubmitReviewButton"]')[0];
        var textarea = document.querySelectorAll( '[ class*="prc-Textarea" ]' )[0];
        document.querySelectorAll('[ class*="octicon-reply" ]')[0].click()

        // var event = new Event('keyup', { bubbles: true });
        // textarea.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
        // textarea.dispatchEvent(new KeyboardEvent('keydown', {
        //   code: 'Enter',
        //   key: 'Enter',
        //   charCode: 13,
        //   keyCode: 13,
        //   view: window,
        //   bubbles: true
        // }));
        // textarea.focus()
        textarea.value = "Thanks for closing @dependabot 🤖📕👌";
        // textarea.dispatchEvent(event);
        setTimeout(() => {
          textarea.blur();
          // document.querySelectorAll('[class*="tabNavLink"]')[1].click(); // preview
          sub.removeAttribute('disabled');
          sub.disabled = false;
          // setTimeout(() => { document.querySelectorAll('[class*="tabNavLink"]')[1].click(); }, 100); // preview
          setTimeout(() => { sub.click(); }, 300);
        }, 500);
      }, 200);
    }
    else {
      setTimeout(() => {
        document.querySelectorAll( '[ class*="prc-Radio" ]' )[1].click()
        var txt = "Thanks @dependabot 🤖 👌";
        document.querySelectorAll( '[ class*="prc-Textarea" ]' )[0].value = txt
        document.querySelectorAll('[class*="SubmitReviewButton"]')[0].click();
      }, 300);
    }
  }, 2000);
}, 2000);

// 2:

setTimeout(() => {
  document.querySelector('[data-variant="primary"]').click()
  setTimeout(() => {
    document.querySelectorAll(".flex-self-stretch")[0].click();
  }, 200);
  setTimeout(() => {
    document.querySelectorAll('[aria-label="Done"]')[0].click();
  }, 2000);
  // document.querySelectorAll('[aria-label="Done"]')[0].click();
}, 3000);


// part two:
setTimeout(() => {
  document.querySelectorAll(".hx_create-pr-button")[0].click();
  document.querySelectorAll(".js-merge-commit-button")[0].click();

  setTimeout(() => {
    document.querySelectorAll('[title="Done"]')[0].click();
  }, 4000);
}, 4000);
