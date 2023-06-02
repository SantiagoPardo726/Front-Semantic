import { ForceGraph2D } from "react-force-graph";
import Title from "../components/Title";

import React, { useState } from "react";



const MyGraph = () => {
    const [data2, setData2] = useState({
        nodes: [
          { id: "A1", color: "red", label: "Nodo A" },
          { id: "B1", color: "green", label: "Nodo B" },
          { id: "C1", color: "blue", label: "Nodo C" },
        ],
        links: [
          { source: "A1", target: "B1" },
          { source: "A1", target: "C1" },
        ],
      });


  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showHiddenText, setShowHiddenText] = useState(false);

  const handleTextChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleTextChange2 = (event) => {
    setText2(event.target.value);
  };

  const handleButtonClick = () => {



    const updatedNodes = [
        ...data2.nodes,
        { id: 'E1', color: 'blue', label: 'Nodo D' },
      ];
      const updatedLinks = [
        ...data2.links,
        { source: 'A1', target: 'E1' },
      ];
    
      setData2({
        nodes: updatedNodes,
        links: updatedLinks,
      });

    setShowHiddenText(true);
  };

  return (
    <>
      <Title
        title={"Grafo de la Ontologia"}
        subtitle={"Digita un keyTerm para ver el grafo de sus cursos Asociados"}
      />

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <input
            type="text"
            value={text1}
            onChange={handleTextChange1}
            placeholder="Texto 1"
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
            }}
          />
        </div>
        <div style={{ marginRight: "10px" }}>
          <input
            type="text"
            value={text2}
            onChange={handleTextChange2}
            placeholder="Texto 2"
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleButtonClick}
            style={{ padding: "5px 10px" }}
          >
            Enviar
          </button>
        </div>
        {showHiddenText && (
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontStyle: "italic" }}>
              Texto 1: {text1}
              <br />
            </p>
          </div>
        )}
      </div>

      <ForceGraph2D
        graphData={data2}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label;
          const fontSize = 13 / globalScale;
          const circleRadius = 10;
          const circleFill = node.color;

          // Draw circle background
          ctx.beginPath();
          ctx.arc(node.x, node.y, circleRadius, 0, 3 * Math.PI, false);
          ctx.fillStyle = circleFill;
          ctx.fill();

          // Draw text
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "white";
          ctx.fillText(label, node.x, node.y);

          //
        }}
      />
    </>
  );
};

export default MyGraph;