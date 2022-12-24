import './style.css';
import './avatar.css';
import GraphCont from './graphCont.js';

const xaxisvar = [];


function Xaxis(){    
    return(        
        <div class="xaxis">
            <div class="sample">

            </div>
        </div>
    );    
}

function Sections({title, children}){
    return(
        <div class="graphCont">
            <section class="cont left">
                <div class="subCont header">
                    <h1>{title}</h1>
                </div>
                <div class="subCont body">
                    <div class="subSec left">

                    </div>
                    <div class="subSec right">

                    </div>
                </div>
                <div class="subCont footer">

                </div>
            </section>

            <section class="cont right">
                <div class="subCont header">
                    
                </div>
                <div class="subCont graphSide">
                    {children}                                    
                </div>                
            </section>
        </div>
    );
}

function Base(){
    return(
        <div> 
            <Sections 
                title={'Eulers Method'}>
                    <GraphCont />
            </Sections>
            <Sections 
                title={'Heun\'s Method'}>
                <GraphCont />
            </Sections>
            <Sections 
                title={'Runge-kuta Method'}
            />
            <Sections 
                title={'Simplex Method'}
            />
            <Sections 
                title={'Knapsack Algorithm'}
            />
        </div>
    );
}

export default function Graph(){
    return(
        <Base />
    );
}