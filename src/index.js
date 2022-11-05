import "./index.css";
import Icon from "./icon.jpg";

const myIcon = new Image();
myIcon.src = Icon;

const element = document.createElement("div");
element.appendChild(myIcon);

document.body.appendChild(element);
