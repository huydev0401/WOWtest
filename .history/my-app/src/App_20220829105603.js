import Box from "./components/Box";
import GridBox from "./components/GridBox";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Heading>8 LÝ DO ĐỂ CHỌN</Heading>
      <GridBox>
        {Array(8)
          .fill(0)
          .map((item) => (
            <Box></Box>
          ))}
      </GridBox>
    </div>
  );
}

export default App;
