import Settings from "./settings";

let sportService = `${Settings.api.sport}/api`;

var API_ENDPOINTS = {
    getMatchups: `${sportService}/{0}/mvpmatchup`,


  formatUrl: function (url) {
    var args = Array.prototype.slice.call(arguments, 1);
    return url.replace(/{(\d+)}/g, function (match, number) {
      return args[number] ? args[number] : match;
    });
  },

  setQueryParams: function (url, params) {
    if (params) {
      var queryParams = _
        .chain(params)
        .map((value, key) => {
          return key + "=" + value;
        })
        .join("&")
        .value();
      if (url.indexOf("?") == -1) {
        return url + "?" + queryParams;
      } else {
        return url + "&" + queryParams;
      }
    } else {
      return url;
    }
  }
};

export default API_ENDPOINTS;
