/* Components */
import Page from "@/components/Page";
import styled from "@emotion/styled";
export default function UTXOAnalyticsPage() {
  return (
    <Page>
      {/* <ProgressCountdown deadline={15000}  /> */}
      <iframe
        src="http://45.43.60.97:8080/web/"
        //src="https://checkonchain.com/btconchain/pricing/pricing_nvtprice/pricing_nvtprice_light.html"
        width="90%"
        height="800px"
        allowFullScreen
        frameBorder={"0"}
      ></iframe>
      <HeadContainerBox>
        <HeadContainerUseUsBox></HeadContainerUseUsBox>
      </HeadContainerBox>
    </Page>
  );
}
const HeadContainerUseUsBox = styled.div`
  margin-top: 100px;
  margin-bottom: 166px;
  display: flex;
  justify-content: space-between;
  gap: 194px;
`;
const HeadContainerBox = styled.div`
  margin: 112px auto 0px;
`;
