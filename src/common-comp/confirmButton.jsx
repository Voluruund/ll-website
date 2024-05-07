import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function DraggableButton(){
    
    useEffect(() => {
      dragItem = document.querySelector("#item");
      container = document.querySelector("#container");
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("click", toggleSwitch, false);
      } else {
        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);
      
        container.addEventListener("mousedown", dragStart, false);
        dragItem.addEventListener("mousedown", itemDragStart, false);
      
        container.addEventListener("mousemove", drag, false);
      
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("click", toggleSwitch, false);
      }
    }, []);

    window.addEventListener("load", ()=>{
        // dragItem = document.querySelector("#item");
        // container = document.querySelector("#container");
        // if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        //   container.addEventListener("mouseup", dragEnd, false);
        //   container.addEventListener("click", toggleSwitch, false);
        // } else {
        //   container.addEventListener("touchstart", dragStart, false);
        //   container.addEventListener("touchend", dragEnd, false);
        //   container.addEventListener("touchmove", drag, false);
        
        //   container.addEventListener("mousedown", dragStart, false);
        //   dragItem.addEventListener("mousedown", itemDragStart, false);
        
        //   container.addEventListener("mousemove", drag, false);
        
        //   container.addEventListener("mouseup", dragEnd, false);
        //   container.addEventListener("click", toggleSwitch, false);
        // }
      });

    var dragItem;
    var container;

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var itemClick;
    var xOffset = 0;
    var yOffset = 0;

    let [pippo, textPippo] = useState('Send');

    const handleSent = () =>  {
      textPippo("Successfully sent!")
    }

    const handleNotSent = () => {
      textPippo("Send")
    }

    function dragStart(e) {
      var elm = this;
      var xPos = e.pageX - elm.offsetLeft;
      
      if (e.type === "touchstart") {
        var xPosMobile = e.touches[0].pageX - elm.offsetLeft;
        initialX = xPosMobile;
      } else {
        initialX = xPos; 
      }
      
      dragItem.style.transition = "all .8s cubic-bezier(0.04, 0.46, 0.36, 0.99)";

      if (e.target === dragItem) {
        active = true;
      }
    }

    function itemDragStart(e) {
      var elm = this;
      var xPos = e.pageX - elm.offsetLeft;
      
      itemClick = xPos;
    }

    function toggleSwitch(e) {
      if (initialX > 100) {
        currentX = 0;
      } else {
        currentX = 300;
      }
    }

    function dragEnd(e) {
      initialX = currentX;

      active = false;
        
      if (initialX > 100) {
        currentX = 80;
        dragItem.style.transition = "all .8s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
        container.classList.add('select-right');
        container.classList.remove('select-left');
        handleSent()
      } else {
        currentX = 0;
        dragItem.style.transition = "all .8s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
        container.classList.remove('select-right');
        container.classList.add('select-left');
        handleNotSent()
      }
      
      setTranslateVw(currentX, dragItem);
    }

    function drag(e) {
      var elm = this;
      var xPos = e.pageX - elm.offsetLeft;
      if (!(xPos > 400 || xPos < 0)) {
        if (active) {
          // e.preventDefault();

          if (e.type === "touchmove") {
            var xPosMobile = e.touches[0].pageX - elm.offsetLeft;
            currentX = xPosMobile - initialX; 
            if (initialX > 300) {
              currentX = xPosMobile - itemClick;
            }
            if (currentX > 300) {
              currentX = 300;
              active = false;
              container.classList.add('select-right');
              container.classList.remove('select-left');
            } else if (currentX < 0) {
              currentX = 0;
              active = false;
              container.classList.remove('select-right');
              container.classList.add('select-left');
            }
          } else {
            currentX = xPos - initialX;
            if (initialX > 300) {
              currentX = xPos - itemClick;
            }
            if (currentX > 300) {
              currentX = 300;
              active = false;
              container.classList.add('select-right');
              container.classList.remove('select-left');
            } else if (currentX < 0) {
              currentX = 0;
              active = false;
              container.classList.remove('select-right');
              container.classList.add('select-left');
            }
          }

          dragItem.style.transition = "all .05s cubic-bezier(0.04, 0.46, 0.36, 0.99)";

          xOffset = currentX;

          setTranslate(currentX, dragItem);
        }
      } else {
        active = false;
        
        if (initialX > 300) {
          dragItem.style.width = "translate3d(300px, 0px, 0)";
        } else {
          dragItem.style.transform = "translate3d(0, 0px, 0)"; 
        }
      }
    }

    function setTranslate(xPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, 0px, 0)";
    }

    function setTranslateVw(xPos, el){
      el.style.transform = "translate3d(" + xPos + "vw, 0px, 0)";
    }

    const [dragging, setDragging] = useState(false);

    const handleTouchStart = (event) => {
      event.preventDefault();
      setDragging(true);
    };
  
    const handleTouchMove = (event) => {
      event.preventDefault();
    };
  
    const handleTouchEnd = () => {
      setDragging(false);
    };

    return(
        <>
            <div className='desk-hidden rel'>
                <div id="outerContainer">
                    <div className="select-left" id="container">
                        <div id="item"
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          <div className="left">
                            <span>{pippo === "Send" ? "→" : "✔"}</span>
                          </div>
                        </div>
                        
                        <div className="right">
                          <span>{pippo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DraggableButton;