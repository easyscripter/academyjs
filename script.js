function myFirstApp(name, age) {
    alert("Привет меня зовут " + name + " и это моя перваая программа");
    showSkills();
    checkAge();
    calcPow(4);

    function showSkills(){
        let skills = ["CSS","HTML", "JavaScript", "Junior design"];

        for (let i = 0; i < skills.length; i++) {
            document.write("Мои навыки :<br>" + skills[i] + "<br>");
        }
    };
    
    function checkAge() {
        if (age < 18) {
            alert("Не рано ли?");
        } else {
            alert("Самое время!!");
        }
    };
    
    function calcPow(num){
        return alert(num * num);
    }
    
}
myFirstApp("Den", 19);