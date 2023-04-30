window.storyFormat = (function () {
  return {
    name: "My Screenplay Format",
    version: "1.0.0",
    author: "Your Name",
    license: "Creative Commons Attribution 4.0 International License",
    proofing: false,
    source: "header.html",
    setup: function (ui) {
      var style = document.createElement("style");
      style.textContent = `
        body {
          font-family: "Courier", monospace;
          font-size: 14pt;
          line-height: 1.3;
          white-space: pre-wrap;
        }
        .scene-heading {
          text-transform: uppercase;
          margin-bottom: 0;
        }
        .action {
          margin-top: 0;
          margin-bottom: 0;
        }
        .character {
          margin-left: 15%;
          margin-top: 1em;
          margin-bottom: 0;
          text-transform: uppercase;
        }
        .dialogue {
          margin-left: 10%;
          margin-top: 0;
          margin-bottom: 0;
        }
        .parenthetical {
          margin-left: 20%;
          margin-top: 0;
          margin-bottom: 0;
        }
      `;
      document.head.appendChild(style);
    },
  };
})();
