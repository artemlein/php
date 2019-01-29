var require = meteorInstall({"lib":{"collection.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collection.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Users: () => Users
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Users = new Mongo.Collection('user');
///////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Users;
module.link("/lib/collection", {
  Users(v) {
    Users = v;
  }

}, 1);
Meteor.startup(() => {// code to run on server at startup
});
Meteor.methods({
  // get Balance 
  getBalance: function () {
    balance = Users.find({
      "_id": Meteor.userId()
    }).fetch()[0].money;
    return balance;
  },
  // get randomNumber in logic cube
  getNumber: function () {
    number = Math.floor(Math.random() * 6) + 1;
    ;
    return number;
  },
  //Get User Selection
  getSelect: function () {
    select = Users.find({
      "_id": Meteor.userId()
    }).fetch()[0].section;
    return select;
  },
  //Update user select
  updateSelect: function (select) {
    hi = select;
    Users.update({
      "_id": Meteor.userId()
    }, {
      $set: {
        'section': hi
      }
    });
    return "complete";
  },
  updateSelect1: function () {
    hi = Meteor.userId();
    return hi;
  },
  upMoney: function (arg1) {
    balance = Users.find().fetch()[0].money + arg1 * 5;
    Users.update({
      "_id": Meteor.userId()
    }, {
      $set: {
        'money': balance
      }
    });
  },
  downMoney: function (arg1) {
    balance = Users.find().fetch()[0].money - arg1;
    Users.update({
      "_id": Meteor.userId()
    }, {
      $set: {
        'money': balance
      }
    });
  },
  updateBet: function (arg1) {
    bet = arg1;
    Users.update({
      "_id": Meteor.userId()
    }, {
      $set: {
        "bet": bet
      }
    });
  },
  getBet: function () {
    bet = Users.find({
      "_id": Meteor.userId()
    }).fetch()[0].bet;
    balance = Users.find({
      "_id": Meteor.userId()
    }).fetch()[0].money;

    if (bet > balance) {
      bet = 0;
      return bet;
    } else {
      return bet;
    }
  },
  addBalance: function () {
    balanceS = Users.find({
      "_id": Meteor.userId()
    }).fetch()[0].money;
    balance = balanceS + 500;
    Users.update({
      "_id": Meteor.userId()
    }, {
      $set: {
        "bet": bet
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbGxlY3Rpb24uanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIlVzZXJzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJzdGFydHVwIiwibWV0aG9kcyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiZmluZCIsInVzZXJJZCIsImZldGNoIiwibW9uZXkiLCJnZXROdW1iZXIiLCJudW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRTZWxlY3QiLCJzZWxlY3QiLCJzZWN0aW9uIiwidXBkYXRlU2VsZWN0IiwiaGkiLCJ1cGRhdGUiLCIkc2V0IiwidXBkYXRlU2VsZWN0MSIsInVwTW9uZXkiLCJhcmcxIiwiZG93bk1vbmV5IiwidXBkYXRlQmV0IiwiYmV0IiwiZ2V0QmV0IiwiYWRkQmFsYW5jZSIsImJhbGFuY2VTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxPQUFLLEVBQUMsTUFBSUE7QUFBWCxDQUFkO0FBQWlDLElBQUlDLEtBQUo7QUFBVUgsTUFBTSxDQUFDSSxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFFcEMsTUFBTUgsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQ0csVUFBVixDQUFxQixNQUFyQixDQUFkLEM7Ozs7Ozs7Ozs7O0FDRlAsSUFBSUMsTUFBSjtBQUFXUCxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNHLFFBQU0sQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLFVBQU0sR0FBQ0YsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJSCxLQUFKO0FBQVVGLE1B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QUFLLENBQUNVLElBQU4sQ0FBVztBQUFDLGFBQVFMLE1BQU0sQ0FBQ00sTUFBUDtBQUFULEtBQVgsRUFBc0NDLEtBQXRDLEdBQThDLENBQTlDLEVBQWlEQyxLQUEzRDs7QUFFQSxRQUFJa0IsR0FBRyxHQUFHdEIsT0FBVixFQUFrQjtBQUNkc0IsU0FBRyxHQUFHLENBQU47QUFDQSxhQUFPQSxHQUFQO0FBQ0gsS0FIRCxNQUdPO0FBRUgsYUFBT0EsR0FBUDtBQUNIO0FBQ0osR0FuRFU7QUFvRFhFLFlBQVUsRUFBRSxZQUFZO0FBQ3BCQyxZQUFRLEdBQUdsQyxLQUFLLENBQUNVLElBQU4sQ0FBVztBQUFDLGFBQVFMLE1BQU0sQ0FBQ00sTUFBUDtBQUFULEtBQVgsRUFBc0NDLEtBQXRDLEdBQThDLENBQTlDLEVBQWlEQyxLQUE1RDtBQUNBSixXQUFPLEdBQUd5QixRQUFRLEdBQUcsR0FBckI7QUFDQWxDLFNBQUssQ0FBQ3dCLE1BQU4sQ0FBYTtBQUFDLGFBQVFuQixNQUFNLENBQUNNLE1BQVA7QUFBVCxLQUFiLEVBQXdDO0FBQUNjLFVBQUksRUFBRTtBQUFDLGVBQVFNO0FBQVQ7QUFBUCxLQUF4QztBQUNIO0FBeERVLENBQWYsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgVXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlcicpO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy9saWIvY29sbGVjdGlvbic7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICAgLy8gZ2V0IEJhbGFuY2UgXG5cdGdldEJhbGFuY2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgXHRiYWxhbmNlID0gVXNlcnMuZmluZCh7XCJfaWRcIiA6IE1ldGVvci51c2VySWQoKX0pLmZldGNoKClbMF0ubW9uZXk7XG4gICAgICAgIHJldHVybiBiYWxhbmNlO1xuICAgIH0sXG4gICAgLy8gZ2V0IHJhbmRvbU51bWJlciBpbiBsb2dpYyBjdWJlXG4gICAgZ2V0TnVtYmVyIDogZnVuY3Rpb24gKCkge1xuICAgIFx0bnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxOztcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICBcdFxuICAgIH0sXG4gICAgLy9HZXQgVXNlciBTZWxlY3Rpb25cbiAgICBnZXRTZWxlY3QgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGVjdCA9IFVzZXJzLmZpbmQoe1wiX2lkXCIgOiBNZXRlb3IudXNlcklkKCl9KS5mZXRjaCgpWzBdLnNlY3Rpb247XG4gICAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfSxcbiAgICAvL1VwZGF0ZSB1c2VyIHNlbGVjdFxuICAgIHVwZGF0ZVNlbGVjdDogZnVuY3Rpb24gKHNlbGVjdCkge1xuICAgICAgICBoaSA9IHNlbGVjdDtcbiAgICAgICAgVXNlcnMudXBkYXRlKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSwgeyAkc2V0OiB7ICdzZWN0aW9uJyA6IGhpIH0gfSk7XG4gICAgICAgIHJldHVybiBcImNvbXBsZXRlXCI7XG4gICAgfSxcbiAgICB1cGRhdGVTZWxlY3QxOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpID0gTWV0ZW9yLnVzZXJJZCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhpO1xuICAgIH0sXG4gICAgdXBNb25leTogZnVuY3Rpb24gKGFyZzEpIHtcbiAgICAgICAgYmFsYW5jZSA9IFVzZXJzLmZpbmQoKS5mZXRjaCgpWzBdLm1vbmV5ICsgYXJnMSAqIDU7XG4gICAgICAgIFVzZXJzLnVwZGF0ZSh7XCJfaWRcIiA6IE1ldGVvci51c2VySWQoKX0sIHsgJHNldDogeyAnbW9uZXknIDogYmFsYW5jZSB9IH0pO1xuICAgIH0sXG4gICAgZG93bk1vbmV5OiBmdW5jdGlvbiAoYXJnMSkge1xuICAgICAgICBiYWxhbmNlID0gVXNlcnMuZmluZCgpLmZldGNoKClbMF0ubW9uZXkgLSBhcmcxO1xuICAgICAgICBVc2Vycy51cGRhdGUoe1wiX2lkXCIgOiBNZXRlb3IudXNlcklkKCl9LCB7ICRzZXQ6IHsgJ21vbmV5JyA6IGJhbGFuY2UgfSB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZUJldDogZnVuY3Rpb24gKGFyZzEpIHtcbiAgICAgICAgYmV0ID0gYXJnMTtcbiAgICAgICAgVXNlcnMudXBkYXRlKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSwgeyRzZXQ6IHtcImJldFwiIDogYmV0fX0pIDsgICAgICBcbiAgICB9LFxuICAgIGdldEJldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBiZXQgPSBVc2Vycy5maW5kKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSkuZmV0Y2goKVswXS5iZXQ7XG4gICAgICAgIGJhbGFuY2UgPSBVc2Vycy5maW5kKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSkuZmV0Y2goKVswXS5tb25leTsgIFxuXG4gICAgICAgIGlmKCBiZXQgPiBiYWxhbmNlKXtcbiAgICAgICAgICAgIGJldCA9IDBcbiAgICAgICAgICAgIHJldHVybiBiZXQ7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBiZXQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFkZEJhbGFuY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFsYW5jZVMgPSBVc2Vycy5maW5kKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSkuZmV0Y2goKVswXS5tb25leTsgXG4gICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlUyArIDUwMDtcbiAgICAgICAgVXNlcnMudXBkYXRlKHtcIl9pZFwiIDogTWV0ZW9yLnVzZXJJZCgpfSwgeyRzZXQ6IHtcImJldFwiIDogYmV0fX0pIDsgXG4gICAgfVxufSk7Il19
