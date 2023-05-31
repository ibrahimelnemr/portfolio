import React from 'react'
function Skills() {

return(

<>
<div id="skills" class="row p-0 m-0">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Skills
        </div>
    </div>

    <div  class="col-6 border">

        <div class="text-center p-2 m-2 fs-5">
                Proficient
        </div>

        <ul>
            <li>HTML, CSS, JS</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>Python</li>
            <li>Git</li>
        </ul>
        
    </div>
    <div className="col-6 border">
        <div class="text-center p-2 m-2 fs-5">
                Intermediate
        </div>
        <ul>
            <li>Flask</li>
            <li>C++</li>
            <li>Unity2D (C#)</li>
            <li>R</li>
            <li>Scrum / Agile</li>
        </ul>
    </div>
</div>
</>

    );

}

export default Skills
