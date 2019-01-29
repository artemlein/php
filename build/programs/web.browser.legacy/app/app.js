var require = meteorInstall({"imports":{"ui":{"body.html":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/body.html                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.link("./template.body.js", { "*": "*+" });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/template.body.js                                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<!-- <div class="wrapper"> \n   {{> menuBar}}\n  \n  </div> -->\n  '), HTML.SPAN({
    class: "text"
  }, HTML.STRONG(Blaze.View("lookup:username", function() {
    return Spacebars.mustache(view.lookup("username"));
  })), " - ", Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  })), "\n  ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n  ", Spacebars.include(view.lookupTemplate("cube")), "\n  ", Spacebars.include(view.lookupTemplate("user")), HTML.Raw('\n\n  <div id="vk_auth"></div>\n   \n\n'), HTML.SCRIPT({
    type: "text/javascript"
  }, "\n  VK.init({apiId:   6835412});\n"), HTML.Raw('\n\n<!-- VK Widget -->\n<div id="vk_auth"></div>\n'), HTML.SCRIPT({
    type: "text/javascript"
  }, '\n  VK.Widgets.Auth("vk_auth", {"authUrl":"/dev/Login"});\n') ];
}));
Meteor.startup(Template.body.renderToDocument);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dice.html":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/dice.html                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.link("./template.dice.js", { "*": "*+" });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.dice.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/template.dice.js                                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //

Template.__checkName("cube");
Template["cube"] = new Template("Template.cube", (function() {
  var view = this;
  return [ HTML.P("Баланс игрока : ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ " ", Blaze.View("lookup:money", function() {
      return Spacebars.mustache(view.lookup("money"));
    }), " RUB" ];
  })), HTML.Raw('\n  \n  <div id="background"></div>\n  <div id="wrapper">\n  \n    <p id="point">0</p>\n    <button id="play">Play</button>\n    <div id="platform">\n      <div id="dice">\n        <div class="side front">\n          <div class="dot center"></div>\n        </div>\n        <div class="side front inner"></div>\n        <div class="side top">\n          <div class="dot dtop dleft"></div>\n          <div class="dot dbottom dright"></div>\n        </div>\n        <div class="side top inner"></div>\n        <div class="side right">\n          <div class="dot dtop dleft"></div>\n          <div class="dot center"></div>\n          <div class="dot dbottom dright"></div>\n        </div>\n        <div class="side right inner"></div>\n        <div class="side left">\n          <div class="dot dtop dleft"></div>\n          <div class="dot dtop dright"></div>\n          <div class="dot dbottom dleft"></div>\n          <div class="dot dbottom dright"></div>\n        </div>\n        <div class="side left inner"></div>\n        <div class="side bottom">\n          <div class="dot center"></div>\n          <div class="dot dtop dleft"></div>\n          <div class="dot dtop dright"></div>\n          <div class="dot dbottom dleft"></div>\n          <div class="dot dbottom dright"></div>\n        </div>\n        <div class="side bottom inner"></div>\n        <div class="side back">\n          <div class="dot dtop dleft"></div>\n          <div class="dot dtop dright"></div>\n          <div class="dot dbottom dleft"></div>\n          <div class="dot dbottom dright"></div>\n          <div class="dot center dleft"></div>\n          <div class="dot center dright"></div>\n        </div>\n        <div class="side back inner"></div>\n        <div class="side cover x"></div>\n        <div class="side cover y"></div>\n        <div class="side cover z"></div>\n      </div>\n    </div>\n</div>') ];
}));

Template.__checkName("user");
Template["user"] = new Template("Template.user", (function() {
  var view = this;
  return HTML.Raw('<button class="addBalance">Добавить 500</button>\n  <form class="countMoney">\n    <input type="number" min="0" name="count" placeholder="Ваша ставка">\n  </form>\n  <button value="1" class="one">1</button>\n  <button value="2" class="two">2</button>\n  <button value="3" class="three">3</button>\n  <button value="4" class="for">4</button>\n  <button value="5" class="five">5</button>\n  <button value="6" class="six">6</button>');
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/body.js                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var Users;
module.link("/lib/collection", {
  Users: function (v) {
    Users = v;
  }
}, 3);
module.link("./dice.js");
module.link("./body.html");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dice.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/dice.js                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var Users;
module.link("/lib/collection", {
  Users: function (v) {
    Users = v;
  }
}, 3);
module.link("./dice.html");

this.World = function () {
  this.vk = new VK({
    appId: 6835351,
    mode: 'oauth'
  });
  this.vk.token = '#token';
  this.viewFriends(5);
  this.listenMessages();
};

Template.cube.helpers({
  users: function () {
    return Users.find();
  }
});
Template.cube.create = {
  /*
  	var self = this;
  
      self.myAsyncValue = new ReactiveVar("Waiting for response from server...");
      self.myAsyncValue2 = new ReactiveVar("Waiting for response from server...");
      Meteor.call('getBalance', function (err, balance) {
          if (err)
              console.log(err);
          else 
              self.myAsyncValue.set(balance);
  
          	console.log("This is Meteor call in created :" + balance);
      });
  
  	VK.init({apiId: 6835351});
      VK.Widgets.Auth("vk_auth", {width: "300px", authUrl: '/vklogin.php?'});
  	
      */
};
Template.cube.events({
  'click #play': function (event) {
    //			Get variable Balance
    Meteor.call('getBalance', function (err, balanceS) {
      var balance = balanceS;
      console.log('this balance before game: ', balance); //			Get User selection 

      Meteor.call('getSelect', function (err, selectS) {
        var select = selectS;
        Meteor.call('getBet', function (err, betS) {
          var bet = parseInt(betS);
          console.log(Meteor.userId());

          if (bet === 0) {
            alert('пашёл нахуй');
          } else {
            console.log("its bet :" + bet);
            $('#platform').removeClass('stop').addClass('playing');
            $('#dice');
            setTimeout(function () {
              $('#platform').removeClass('playing').addClass('stop'); //				Get random number

              Meteor.call('getNumber', function (err, numS) {
                var number = numS; //				If user win, balance + 50 money

                if (select === number) {
                  Meteor.call('upMoney', bet);
                } //				Else user lose,  balance -50 money
                else {
                    Meteor.call('downMoney', bet);
                  }

                console.log("   balance after game : " + balance);
                var x = 0,
                    y = 20,
                    z = -20;

                switch (number) {
                  case 1:
                    x = 0;
                    y = 20;
                    z = -20;
                    break;

                  case 2:
                    x = -100;
                    y = -150;
                    z = 10;
                    break;

                  case 3:
                    x = 0;
                    y = -100;
                    z = -10;
                    break;

                  case 4:
                    x = 0;
                    y = 100;
                    z = -10;
                    break;

                  case 5:
                    x = 80;
                    y = 120;
                    z = -10;
                    break;

                  case 6:
                    x = 0;
                    y = 200;
                    x = 10;
                    break;
                }

                $('#dice').css({
                  'transform': 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
                });
                $('#platform').css({
                  'transform': 'translate3d(0,0, 0px)'
                });
                console.log("this is num: " + number + "     this is select : " + select); //num in view (html)

                $('#point').html(number);
              });
            }, 3000);
          }

          ;
        });
      });
    });
  }
}); // user 

Template.user.helpers({});
Template.user.events({
  'click .countMoney': function (event) {
    event.preventDefault();
    var textValue = $('[name="count"]').val();
    Meteor.call('updateBet', textValue);
  },
  'click .addBalance': function (event) {
    Meteor.call('addBalance');
  },
  // Update Select 1
  'click .one': function (event) {},
  // Update Select 2
  'click .two': function (event) {
    Meteor.call('updateSelect', 2, function (err, select) {
      console.log(select);
    });
  },
  // Update Select 3
  'click .three': function (event) {
    Meteor.call('updateSelect', 3, function (err, select) {
      console.log(select);
    });
  },
  // Update Select 4
  'click .for': function (event) {
    Meteor.call('updateSelect', 4, function (err, select) {
      console.log(select);
    });
  },
  // Update Select 5
  'click .five': function (event) {
    Meteor.call('updateSelect', 5, function (err, select) {
      console.log(select);
    });
  },
  // Update Select 6
  'click .six': function (event) {
    Meteor.call('updateSelect', 6, function (err, select) {
      console.log(select);
    });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"accounts-config.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/accounts-config.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 0);
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"collection.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// lib/collection.js                                                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({
  Users: function () {
    return Users;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Users = new Mongo.Collection('user');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/main.js                                                                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.link("/imports/ui/body.js");
module.link("../imports/startup/accounts-config.js");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});

var exports = require("/client/main.js");