module.exports = {

  p(text) {
    document.write("<p>" + text + "</p>");
  },

  t(text) {
    document.write(text);
  },

  p(text) {
    document.write("<p>" + text + "</p>");
  },

  wval(desc, value) {
    document.write("<p><b>" + desc + " =</b> " + value + "</p>");
  },

  h1(text) {
    this.whead(text, 1);
  },

  h2(text) {
    this.whead(text, 2);
  },

  h3(text) {
    this.whead(text, 3);
  },

  h4(text) {
    this.whead(text, 4);
  },

  whead(text, level) {
    var val = level ? level : 1;
    var h = document.createElement("h" + val);
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
  },

  log(name, value) {
    var str = name;
    if (value) {
      str += "=" + value;
    }
    console.log("%c [LOG] " + str, "background: #222; color: #ADD8E6");
  },

  logFunction(name) {
    console.log("%c [LOG] " + name + "()", "background: #222; color: green");
  },
};
