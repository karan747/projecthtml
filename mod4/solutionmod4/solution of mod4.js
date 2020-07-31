(function (window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var name;
        (function (window){
        var Hellospeaker = {};
        var speakword = "Hello";
        Hellospeaker.speak = 
            function (name){
                console.log(speakword + " " + name);
            };
        window.Hellospeaker = Hellospeaker;
        })(window);
        (function (window){
            var byespeaker = {};
            var speakword = "Goodbye";
            byespeaker.speak = 
                function (name){
                    console.log(speakword + " " + name);
                };
            window.byespeaker = byespeaker;
        })(window)
    for (var name of names){
        var firstcharacter = name.charAt(0);
        if(firstcharacter == "J"){
            byespeaker.speak(name);
        }
        else{
            Hellospeaker.speak(name);
        };
    };
})(window)