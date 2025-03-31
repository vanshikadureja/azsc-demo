document.getElementById("greetButton").addEventListener("click", function() {
    var greetingMessage = document.getElementById("greetingMessage");
    
    
    var currentHour = new Date().getHours();
    var greeting = "";
    
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    
    greetingMessage.innerText = greeting + " Welcome to my personal website.";
    greetingMessage.classList.add("show");
});
