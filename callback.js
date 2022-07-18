function getUser(id, callback){
  var user = {
    id: id,
    name: 'Vikram'
  };
  callback(user)
};

function my_callback (userObject) {
  console.log(userObject);
}

getUser(31, my_callback);
