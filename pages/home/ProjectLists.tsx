/* Components */

import Button from "@/components/Button"
import ArrowRightIcon from "@/components/Svg/ArrowRightIcon"
import styled from "@emotion/styled"
import BestIcon from "@/assets/img/best_1.png"
import Image from "next/image"
import Link from "next/link"
import { Spaced } from "@/components/Spaced"
import { useEffect, useMemo } from "react"

import {
  luanchSlice,
  useSelector,
  useDispatch,
  selectLuanch,
  fetchDashboardAsync,
  fetchProjectInfoSelectInfoAsync,
  FilterTypeProps,
} from "@/lib/redux"
import ValueSkeleton from "@/components/ValueSkeleton"


export default function ProjectLists() {
  const dispatch = useDispatch()
  const {
    dashboard,
    pageNum,
    pageSize,
    total: totalNum,
    lists: projectList,
    lists_status,
    tabType,
  } = useSelector(selectLuanch)
  console.log({projectList})
  const oneInfo = useMemo(()=>projectList?.find(itm=>itm.id === 1),[projectList])
  const twoInfo =  useMemo(()=>projectList?.find(itm=>itm.id === 2),[projectList])
  const threeInfo =  useMemo(()=>projectList?.find(itm=>itm.id === 3),[projectList])
  return (
    <ProjectListsBox>
      <ProjectListsTitleBox>Project list</ProjectListsTitleBox>
      <Spaced size="80"/>
      <ProjectContainerBox>
        <ProjectItemBox>
          <ProjectItemImgBox>
            {!oneInfo ? <ValueSkeleton width={720} height={390}/> :<ProjectItemImage alt=""  src={`data:image/jpeg;base64,${oneInfo?.projecthead}`} height={390} width={720} />}
          </ProjectItemImgBox>
          <ProjectItemInfoBox style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div>
              <ProjectItemInfoTitleBox>{!oneInfo ?<ValueSkeleton width={378} /> : oneInfo?.projectname}</ProjectItemInfoTitleBox>
              <ProjectItemInfoContxtBox>
              {!oneInfo ?<ValueSkeleton width={378} height={120} /> : oneInfo?.projectdescription} 
              </ProjectItemInfoContxtBox>
            </div>
            <ViewButton variant='secondary' to="/ft/1">View</ViewButton>
          </ProjectItemInfoBox>
        </ProjectItemBox>
        <Spaced size="50"/>
        {twoInfo && threeInfo ?<ProjectContainerTowBox>
        <ProjectItemTowBox>
          <ProjectItemImgBox>
            {/* <ProjectItemTowImage alt="" src={BestIcon} /> */}
            {!twoInfo ? <ValueSkeleton width={554} height={300}/> :<ProjectItemImage alt=""  src={`data:image/jpeg;base64,${twoInfo?.projecthead}`} height={554} width={300} />}
          </ProjectItemImgBox>
          <ProjectItemInfoBox>
            {/* <div> */}
              <ProjectItemInfoTitleBox>{!twoInfo ?<ValueSkeleton width={378} /> : twoInfo?.projectname}</ProjectItemInfoTitleBox>
              <ProjectItemInfoContxtBox>
              {!twoInfo ?<ValueSkeleton width={378} height={120} /> : twoInfo?.projectdescription} 
              </ProjectItemInfoContxtBox>
              <Spaced size="80"/>
            {/* </div> */}
            <ViewButton variant='secondary' to="/ft/2">View</ViewButton>
          </ProjectItemInfoBox>
        </ProjectItemTowBox> 
        <ProjectItemTowBox>
          <ProjectItemImgBox>

            {!threeInfo ? <ValueSkeleton width={554} height={300}/> :<ProjectItemImage alt=""  src={`data:image/jpeg;base64,${threeInfo?.projecthead}`} height={554} width={300} />}
          </ProjectItemImgBox>
          <ProjectItemInfoBox>
          <ProjectItemInfoTitleBox>{!threeInfo ?<ValueSkeleton width={378} /> : threeInfo?.projectname}</ProjectItemInfoTitleBox>
              <ProjectItemInfoContxtBox>
              {!threeInfo ?<ValueSkeleton width={378} height={120} /> : threeInfo?.projectdescription} 
              </ProjectItemInfoContxtBox>
              <Spaced size="80"/>
            <ViewButton variant='secondary' to="/ft/3">View</ViewButton>
          </ProjectItemInfoBox>
        </ProjectItemTowBox>
        </ProjectContainerTowBox>:''}
        <Spaced size="90"/>
        <ProjectMoreBox href={"/lists"}>
          <span>View More</span>
          <ArrowRightIcon width={63} />
        </ProjectMoreBox>
      </ProjectContainerBox>
    </ProjectListsBox>
  )
}

const ProjectContainerTowBox=styled.div`
  display: flex;
  gap: 40px;
`
const ViewButton = styled(Button)`
  width: 390px;
  height: 80px;
`
const ProjectListsTitleBox = styled.div`
  font-size: 80px;
  font-weight: 600;
  color: #dbdbdb;
  line-height: 120px;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 160px;
    height: 15px;
    background-color: #f7931a;
    bottom: -18px;
    left: 0;
    border-radius: 8px;
  }
`
const ProjectMoreBox = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  /* border-top: 5px solid #f8931a; */
  user-select: none;
  font-size: 36px;
  font-weight: 600;
  color: #c2c5c8;
  svg {
    fill: #c2c5c8;
  }
  &:hover {
    color: #f8931a;
    svg {
      fill: #f8931a;
    }
  }
`
const ProjectItemInfoTitleBox = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
`
const ProjectItemInfoContxtBox = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #c2c5c8;
  line-height: 36px;
  margin-top: 30px;
`
const ProjectListsBox = styled.div`
  /* margin-top: 100px; */
  /* margin-bottom: 150px; */
`
const ProjectItemTowImage = styled(Image)`
  width: auto;
  border-radius: 20px;
  height: 300px;
  border: 0;
`
const ProjectItemImage = styled(Image)`
  width: auto;
  border-radius: 20px;
  height: 390px;
  border: 0;
`
const ProjectItemImgBox = styled.div``
const ProjectItemInfoBox = styled.div`
  /* flex: 1; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* justify-content: space-between; */
  padding-bottom: 10px;
`
const ProjectItemTowBox=styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color:#181B20;
  border-radius: 36px;
  text-align: center;
`
const ProjectItemBox = styled.div`
  padding: 40px 45px;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  gap: 40px;
  background-color:#181B20;
  border-radius: 36px;
`
const ProjectContainerBox = styled.div`
  /* margin-top: 98px; */
  /* border: 5px solid #f8931a;
  border-top: 48px solid #f8931a; */
  /* border-radius: 24px; */
  overflow: hidden;
`
