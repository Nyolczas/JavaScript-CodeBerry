function rosieTheFortuneTeller() {
    var X = prompt('Hi, dear! My name is Rosie and I am an expert fortune teller. What is your name?');
    var Y = prompt('Yes, I have seen that you would come to me, ' + X +
        '. Now please, choose one from the following and type it in the box: ' +
        '\n' + 'turtle,' +
        '\n' + 'rose,' +
        '\n' + 'teacup,' +
        '\n' + 'moon.');
    if (Y == 'turtle' ||
        Y == 'rose' ||
        Y == 'teacup' ||
        Y == 'moon') {
        alert('Hmm... ' + Y + '. Excellent choice. Let us see what your future holds.');
        if(Y == 'turtle') alert("Here is your fortune: Don't panic.");
        if(Y == 'rose') alert("Here is your fortune: You will find a thing. It may be important.");
        if(Y == 'teacup') alert(" Here is your fortune: The end is near, might as well have dessert. ");
        if(Y == 'moon') alert("Look before you leap. Or wear a parachute. ");
    } else {
        alert('I am sorry, '+ X + '. I do not think I understand you correctly. Are you sure you typed in one of the offered possibilities?');
    }
};

rosieTheFortuneTeller();