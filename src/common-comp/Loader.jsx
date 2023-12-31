var i = 0;

function move() {
  if (i === 0) {
    i = 1;
    document.body.style.height = '100vh'
    document.getElementById('tvEffect').style.zIndex = 999999999
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        document.getElementById('tvEffect').style.zIndex = 0
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
        }, 1200)
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

export default function Loader(){

    window.onload = function(){
        setTimeout(move, 1000)
        // Loader logic from navigation.jsx
        let menu_option = "'menu'"
        let menu_other_option = "'x'"
        let menuToggle = document.querySelector('.menu-toggle')
        let menuToggle_after = window.getComputedStyle(menuToggle, '::before');
        menuToggle.onclick = function (){
            menuToggle.classList.toggle('active')
            console.log('clicked')
            setTimeout(function(){
                if(menuToggle_after.content === '"menu"'){
                    menuToggle.style.setProperty('--menu-content', menu_other_option)
                }else{
                    menuToggle.style.setProperty('--menu-content', menu_option)
                }
            }, 500)
        }
    };

    return <>
        <section className="loader-wp" id="wrapper">
            <div className="appearAnim"><div className="animate d-100"></div></div>
            <div className="appearAnim"><div className="animate d-200"></div></div>
            <div className="appearAnim"><div className="animate d-300"></div></div>
            <div className="appearAnim"><div className="animate d-400"></div></div>
            <div className="appearAnim"><div className="animate d-500"></div></div>
            <div className="appearAnim"><div className="animate d-600"></div></div>
            <div className="appearAnim"><div className="animate d-700"></div></div>
            <div className="appearAnim"><div className="animate d-800"></div></div>
            <div className="appearAnim">
                <div className="animate d-900">
                    <section id="myProgress">
                        <div id="myBar">0%</div>
                    </section>
                </div>
            </div>
            <div className="appearAnim"><div className="animate d-1000"></div></div>
        </section>
    </>
}
