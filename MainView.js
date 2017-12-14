var Observable = require('FuseJS/Observable');
var messages = Observable();
var dummyData = [
    { text: 'message 1' },
    { text: 'message 2' },
    { text: 'message 3' },
    { text: 'message 4' },
    { text: 'message 5' },
    { text: 'message 6' }
];
messages.addAll(dummyData);

var chatState = 2;

function goUp() {
    console.log('goUp');
    if (chatState < 2) {
        setChatState(++chatState);
    }
}

function goDown() {
    console.log('goDown');
    if (chatState > 0) {
        setChatState(--chatState);
    }
}

function setChatState(stateIndex) {
    switch (stateIndex) {
        case 2:
           chatCardStates.goto(Expanded);
           console.log('Expanded');
           break;
       case 1:
           chatCardStates.goto(Half);
           console.log('Half');
           break;
       case 0:
           chatCardStates.goto(Collapsed);
           console.log('Collapsed');
           break;
       default:
           console.log('Undefined state');
    }
}

module.exports = {
    messages: messages,
    goUp: goUp,
    goDown: goDown
};