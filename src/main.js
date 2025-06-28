import "./styles.less";
import equipos from "./data/equipos.js";
import Handlebars from "handlebars";
import templateSource from "./tabla.hbs?raw";
const template = Handlebars.compile(templateSource);
const html = template(equipos);
document.getElementById("car-table-container").innerHTML = html;
