import { Timeline } from "./plugins/timeline";
import "./index.css";

const popup = document.getElementById("timeline-wrapper");
const titles = document.getElementsByClassName("point");
let timeline;

const seqCount = {
  "INT3D-109_dihybrid": 932,
  "INT3D-109_monohybrid": 824,
}

const showVideo = (id) => {
  popup.classList.add("opened");

  timeline = new Timeline({
    containerId: "timeline",
    namePattern: id,
    fileExtension: "jpg",
    framesCount: seqCount[id],
    framesFolder: `/static/${id}`,
    fps: 30
  });

  timeline.init();
};

const closePopUp = () => {
  if (popup.classList.contains("opened")) {
    popup.classList.remove("opened");
    timeline.destroy();
  }
}

for (let title of titles) {
  title.addEventListener("click", () => {
    console.log(title);
    showVideo(title.getAttribute("data-point"))
  });
}

document.getElementById("closeButton").addEventListener("click", () => {
  closePopUp();
});
