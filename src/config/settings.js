let settings = () => {
    let settings;
    switch (document.location.hostname) {
      case "http://sportlocal.drf.com":
        settings = {
          api: {
            sport: "http://datastage.statfox.com"
          }
        };
        break;
      case "sportsdev.drf.com":
        settings = {
          api: {
            sport: "http://datastage.statfox.com"
          }
        };
        break;
      
      default:
        settings = {
          api: {
            sport: "http://datastage.statfox.com"
          }
        };
    }
    return settings;
  };
  
  export default settings();
  