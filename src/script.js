import "./css/styles.css";

import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";

new Controller(new Model(), new View());

document.addEventListener("DOMContentLoaded", function () {
    let theme_prompt = prompt("Which theme color do you prefer: white or black? w/b"),
        theme = theme_prompt == "w" ? "white" : "black";

    document.body.classList.add(theme);
});