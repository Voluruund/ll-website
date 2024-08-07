import { useEffect } from "react";
import Transition from "./Transition";

var i = 0;

function move() {
  if (i === 0) {
    i = 1;
    document.body.style.height = '100vh'
    var elem = document.getElementById("myBar");
    var titleH = document.querySelectorAll(".main-title-h")
    var subtH = document.querySelectorAll(".subtitle-h")
    var logo = document.getElementById("deskLogo")
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        let bgs = document.querySelectorAll(".animate")
        bgs.forEach(bg => {
            bg.classList.add("loadingAnim")
        });

        setTimeout(() => {
          titleH.forEach(tit => {
            tit.classList.add("appearTitle")
          })
          subtH.forEach(subt => {
            subt.classList.add("appearTitle")
          })
        }, 1500)

        setTimeout(() => {
          logo.classList.add("appearLogo")
        }, 1800)

        setTimeout(() => {
            localStorage.setItem("state", "1");
            let wrapper = document.getElementById("wrapper")
            wrapper.classList.add("js")
            document.body.style.height = 'auto'
        }, 2000)        //prima era 1200
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

localStorage.setItem("state", "0");

export default function Loader(){

    useEffect(() => {
      move()
    }, [move])

    return <>
        <section className="loader-wp" id="wrapper">
          <div className="appearAnim">
              <div className="animate d-900">
                  <section id="myProgress">
                     { localStorage.getItem("state") == 0 ? <div id="myBar">0%</div> : <div id="myBar" style={{display: "none"}}></div> }
                  </section>
              </div>
          </div>
        </section>
    </>
}
