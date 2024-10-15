
        let datetime = document.getElementById("datetime");
        let greet = document.getElementById("greet");
        
        function updateDateTime() {
            let curDate = new Date();
            datetime.innerHTML = curDate.toLocaleString();
           
            if (curDate.getHours() >= 4 && curDate.getHours() < 12) {
                greet.innerHTML = "Good morning";
            } else if (curDate.getHours() >= 12 && curDate.getHours() < 16) {
                greet.innerHTML = "Good afternoon";
            } else if (curDate.getHours() >= 16 && curDate.getHours() < 24) {
                greet.innerHTML = "Good evening";
            } else {
                greet.innerHTML = "Good night";
            }
        }
    
        updateDateTime();
        setInterval(updateDateTime, 1000);
  