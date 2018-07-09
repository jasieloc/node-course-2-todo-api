const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove
// Todo.findOneAndRemove

// Todo.findOneAndRemove({_id: '5b4381594cded236c46eddbf'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b4381594cded236c46eddbf').then((todo) => {
  console.log(todo);
});
