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
            <Box
              content="Nhà huấn luyện ActionCOACH giúp bạn xây dựng kế hoạch dài hạn giúp
              doanh nghiệp bạn trở nên đồng bộ và sinh lời hiệu quả hơn."
            ></Box>
          ))}
      </GridBox>
    </div>
  );
}

export default App;
