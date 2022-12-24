import './style.css';
import Avatar from './avatar.js';
import {useState} from 'react';
import React, {useRef, useEffect} from 'react';

function GraphCont({children, gPosition}){  
    const [xpos, setXpos] = useState("");
    const [ypos, setYpos] = useState("");

    const canvas = useRef();
    let ctx = null;

    const drawLine = (info, style = {})=>{
        const {x, y, x1, y1} = info;
        const {color = 'white', width = 1} = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }    

    useEffect(()=>{
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
    
        ctx = canvasEle.getContext("2d");
        drawLine({x: 0, y:0, x1:xpos, y1:ypos});
        
      }, []);
    
    return(
        <div class="graphMain">            
            <div class="yAxisNumPanel">

            </div>
            <div class="tableGraph">
                <canvas ref={canvas}></canvas>
            </div>
            <div class="xAxisNumPanel">

            </div>
            <div>
            <form>
                <label>x coordinate:
                    <input type="number" value={xpos} onChange={(e)=>{ setXpos(Number.parseInt(e.target.value));}}/>
                </label>
                <label>y coordinate:
                    <input type="number" value={ypos} onChange={(e2)=>{setYpos(Number.parseInt(e2.target.value)); }}/>
                </label>
            </form>
            </div>
        </div>
    );
}

export default GraphCont;