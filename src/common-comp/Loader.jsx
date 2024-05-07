var i = 0;

function move() {
  if (i === 0) {
    i = 1;
    document.body.style.height = '100vh'
    var elem = document.getElementById("myBar");
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

export default function Loader(){
    setTimeout(move, 1000)
    return <>
        <section className="loader-wp" id="wrapper">
            <div className="appearAnim">
                <div className="animate d-900">
                    <section id="myProgress">
                        <div id="myBar">0%</div>
                    </section>
                </div>
            </div>
        </section>
    </>
}
