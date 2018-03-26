function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var lang;
    var batt;
    checkConnection();
    StatusBar.backgroundColorByName("red");
	  console.log("Modele :"+device.model);
    navigator.globalization.getPreferredLanguage(
        function (language) {console.log("Langue : "+language.value);lang=language.value;},
        function () {alert('Error getting language\n');}
    );
    console.log("UUID : "+device.uuid);
    console.log("Version : "+device.version);
    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(status) {
        console.log("Batterie : " + status.level+"%");
        batt=status.level;
    }

    function deviceinfo(){
      alert("Modele : " +device.model+
            "\nLangue : "+lang+ 
            "\nUUID : " +device.uuid+
            "\nVersion : "+device.version+
            "\nBatterie : "+batt);
    }
    setTimeout(function () {  
      deviceinfo();
    }, 400);
    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(status) {
        alert("Battery faible : " + status.level + "%");
    }
}