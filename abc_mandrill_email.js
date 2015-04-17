
/**
 *    Email service 
 *
 */
var mandrill    = require('mandrill-api');
mandrill_client = new mandrill.Mandrill('');

module.exports = {
    /**
     * Creates and email and sends it through Mandrill.
     * @param {String} service
     * @param {Object} data
     */
    sendSubscribe: function (service, data){

        var email = module.exports._createEmail(data);

        switch(process.env.NODE_ENV){
            case 'testing':
                // sendEmail(email);
                break;
            case 'unit-test':
                // sendEmail(email);
                break;
            case 'staging':
                module.exports._sendEmail(email);
                break;
            case 'production':
                module.exports._sendEmail(email);
                break;
            default:
                // module.exports._sendEmail(email);
        };
    },
    _createEmail: function (data){
        var message = {
            "html": module.exports._templateEngine(data),
            "subject": "Activate your account",
            "from_email": "messenger@africanity.net",
            "from_name": "africanity: creativity + humanity",
            "to": [{
                "email": data.email,
                "name": "",
                "type": "to"
            }]
        };
        return message;
    },
    _sendEmail: function (dataEmail){
        mandrill_client.messages.send({'message': dataEmail}, function (result) {
            /*
                [{
                    "email": "recipient.email@example.com",
                    "status": "sent",
                    "reject_reason": "hard-bounce",
                    "_id": "abc123abc123abc123abc123abc123"
                }]
            */
        }, function (e) {
            // Mandrill returns the error as an object with name and message keys
            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
            sails.log.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        });
    },
    /**
     * Given the user data, creates an "activation" email
     * @param {Object} data
        {
          first_name: {String}
          last_name:  {String}
          activation_codes: {
            code: {String}
          }
        }
     */
    _templateEngine: function (data){
        var html = [
                '<p>We have received a request to create a new account for Africanity on your email.</p>',
                '<p>Please follow the link below to activate your account securely:</p>',
                '<a href="'+ process.env.NODE_DIR +'/activate?code='+ data.activation_codes[0].code +'">'+ process.env.NODE_DIR +'/activate?code='+ data.activation_codes[0].code +'</a>',
                '<p>If you have received this message in error, please ignore it as someone has incorrectly<br/>',
                'entered your email. If this persists, please let us know so we can stop the annoyance.</p>',
                '<p>Thank you - and welcome!</p>'
            ].join('');
        return html;
    }
}