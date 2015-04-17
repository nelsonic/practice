var fs         = require('fs');
var template   = fs.readFileSync('./email_html_template.html', 'utf8');
var textonly   = fs.readFileSync('./email_text_template.txt', 'utf8');

var mandrill    = require('mandrill-api');
mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_APIKEY);

module.exports = function email(person, callback) {
    var message = {
        "html": template,
        "text": textonly,
        "subject": "Welcome to DWYL",
        "from_email": "hello@dwyl.io",
        "from_name": "Hello from DWYL",
        "to": [{
                "email": person.email,
                // "name": "FirstName", // not using this for now.
                "type": "to"
            }],
        "headers": {
            "Reply-To": "hello@dwyl.io"
        },
        "important": false,
        "track_opens": true,
        "track_clicks": true,
        "tags": [
            "registration"
        ],
    };

    mandrill_client.messages.send({"message": message}, function(result) {
        console.log(result);
        callback(result);
    }, function(error) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });

}