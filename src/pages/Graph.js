
import { ForceGraph2D } from 'react-force-graph';
import Title from '../components/Title';



  const data2 = {
    nodes: [
      { id: 'A', color: 'red' , label: 'Nodo A' },
      { id: 'B', color: 'green', label: 'Nodo B'},
      { id: 'C', color: 'blue', label: 'Nodo C'  },
    ],
    links: [
      { source: 'A', target: 'B' },
      { source: 'A', target: 'C' },
    ],
  };




  const MyGraph = () => {
    return (
        <>
          <Title title = {'Grafo de la Ontologia'} subtitle = {'Digita un nombre y una propiedad'}/>
          <ForceGraph2D
      graphData={data2}
      nodeCanvasObject={(node, ctx, globalScale) => {


      

        const label = node.label;
        const fontSize = 13/ globalScale;
        const circleRadius = 10;
        const circleFill = node.color;

        // Draw circle background
        ctx.beginPath();
        ctx.arc(node.x, node.y, circleRadius, 0, 3 * Math.PI, false);
        ctx.fillStyle = circleFill;
        ctx.fill();

        // Draw text
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.fillText(label, node.x, node.y);

        //

      }}
    />
      </>
    );
  };

export default MyGraph;
