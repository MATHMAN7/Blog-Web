import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [



    {
        id: ' Skills ',
        position: { x: 250, y: 0 },
        data: { label: ' Skills Snapshot ' },
    },
    {
        id: 'languages',
        position: { x: 100, y: 50 },
        data: { label: 'Programming Languages' },
    },

    {
        id: ' Frameworks ',
        position: { x: 200, y: 50 },
        data: { label: ' Frameworks & Libs ' },
    },

    {
        id: ' Databases ',
        position: { x: 300, y: 50 },
        data: { label: ' Databases ' },
    },

    {
        id: ' Tools ',
        position: { x: 100, y: 100 },
        data: { label: 'Tools & Version ' },
    },

    {
        id: ' IDE ',
        position: { x: 200, y: 100 },
        data: { label: ' IDEs & Dev Env' },
    },

    {
        id: ' Productivity ',
        position: { x: 300, y: 100 },
        data: { label: ' Productivity' },
    },
    {
        id: ' Expertise',
        position: { x: 100, y: 150 },
        data: { label: ' Expertise' },
    },

    {
        id: 'Freelance ',
        position: { x: 200, y: 150 },
        data: { label: 'Freelance Side Gigs' },
    },

    {
        id: ' Math',
        position: { x: 300, y: 150 },
        data: { label: 'Academic,Mathematical & Analytical Strengths' },
    },
    {
        id: ' Experiments ',
        position: { x: 250, y: 200 },
        data: { label: 'R&D / Experiments' },
    },


];

function SkillsFlow() {
    return(

        <div style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}>


            <ReactFlow
                nodes={nodes}
                edges={[]}
                fitView
                panOnScroll={false}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                style={{ pointerEvents: 'none' }}
            />



        </div>

            );
}

export default SkillsFlow;