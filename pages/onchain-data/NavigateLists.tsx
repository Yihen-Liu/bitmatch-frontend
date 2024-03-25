import React from "react";
import { red } from "@mui/material/colors";
import { useMemo, useState } from "react";
import { height } from "styled-system";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
const ContainerStyle = styled.div`
  display: flex;
`;

const SideBarStyle = styled.div`
  width: 250px;
  text-align:left;
  display: block;
  background-color: #f0f0f0;
`;

const ContentStyle = styled.div`
  flex-grow: 1;
`;

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ContainerStyle>
      <SideBarStyle>
        {/* 左边栏内容 */}
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
      </SideBarStyle>
      <ContentStyle>
        {/* 主内容区域 */}
        {children}
      </ContentStyle>
    </ContainerStyle>
  );
};

export default function NavigateLists() {
  // 1. 获取文件名, 从服务器拿到
  // 2.
  const [links, setLinks] = useState<string[]>([
    "sinpl",
    "sinpl_p",
    "sinpl_l",
    "sinpl_pt",
    "sinpl_ptr",
    "sinpl_ltr",
    "waves1",
    "waves2",
    "cap",
    "spentpar_liveliness",
    "spentpar_hodledorlost",
    "spentpar_hodledorlost_change",
    "spentpar_sopr",
    "spentpar_sopr_lfamily_ma",
    "spentpar_sopr_sfamily",
    "mvrv_sfamily",
    "tx_c",
    "outputs_c",
    "outputs_pertx",
    "spent_outputs",
    "spent_outputs_c",
    "spent_outputs_v",
    "utxo_cnt",
    "infl_rate",
    "addr_lc",
    "addr_lcw",
    "addr_lcb",
    "addr_v",
    "addr_c",
    "addr_c0",
    "addr_inp",
    "addr_inl",
    "addr_act",
    "utxo_h",
    "utxo_h_change",
    "miner_logwork",
    "miner_difficulty",
    "miner_hashrate",
    "miner_revenue_",
    "fees",
    "feesratio",
    "hashprice",
    "miners_cb_s",
    "miners_cb_sprofile",
    "miners_cb_c",
    "utxotype_cnt",
    "utxotype_supply",
    "op_return",
    "op_return_value",
    "op_return_size",
    "op_return_size2",
    "op_return_value2",
    "op_return2",
    "fees_u",
    "miner_revenue",
    "utxo_h_change1",
    "utxo_h_change7",
    "utxo_h_change14",
    "utxo_h_change60",
    "utxo_h_change90",
    "utxo_h_change1_2",
    "utxo_h_change7_2",
    "utxo_h_change14_2",
    "utxo_h_change30_2",
    "utxo_h_change60_2",
    "utxo_h_change90_2",
    "spentpar_sopr_lfamily",
  ]);
  const [showCharts, setShowCharts] = useState<string>("");
  const OnchainCharts = useMemo(() => {
    console.log("input charts:", showCharts);
  }, [showCharts]);

  return (
    <SidebarLayout>
      <ListsBox>
        {links.map((link, key) => (
          //   <li
          //     key={key}
          //     onClick={() => {
          //       console.log("Hello world");
          //       setShowCharts(link);
          //     }}
          //     >
          //     <a href={"/charts/" + link + ".html"}>{link}</a>
          //   </li>
          <iframe
            src={"/charts/" + link + ".html"}
            width={"80%"}
            height={"95%"}
          >
            {link}
          </iframe>
        ))}
      </ListsBox>
    </SidebarLayout>
  );
}

const ListsBox = styled.div`
  height: 1000px;
`;
