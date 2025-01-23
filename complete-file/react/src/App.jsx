import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Box from "Box";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight />
        <Environment
          files="./cloudy_puresky_1k.hdr"
          background
        />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
