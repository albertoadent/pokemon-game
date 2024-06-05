function resourceOf(url) {}

function getPage(url) {

}

function getJSON(url) {}

function output(endpoint) {
  const out = getPage(url);
  out.as = (type) => {
    switch (type.toLowerCase()) {
      case "html":
        return getPage(endpoint);
      case "json":
        return getJSON(endpoint);
      default:
        return "no type specified";
    }
  };
  return out;
}
