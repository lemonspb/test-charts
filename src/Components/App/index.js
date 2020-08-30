import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../ContextMetrika";
import { PageHeader } from "antd";
import DoughnutChart from "../Charts/Doughnut";
import HorizontalChart from "../Charts/HorizontalBar";
import VerticalChart from "../Charts/VerticalBar";
import { Typography } from 'antd';

import './style.scss'
function App() {
  const { Title } = Typography;

  const { metrikaServiсe } = useContext(ServiceContext);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [labelsAge, setLabelsAge] = useState([]);
  const [dataAge, setDataAge] = useState([]);
  const [labelsGender, setLabelsGender] = useState([]);
  const [dataGender, setDataGender] = useState([]);
  useEffect(() => {
    metrikaServiсe.getTechPlatforms().then((res) => {
      setLabels(res.data.map(({ dimensions }) => dimensions[1].name));
      setData(res.data.map(({ metrics }) => metrics[0]));
    });
  }, [metrikaServiсe]);

  useEffect(() => {
    metrikaServiсe.getAge().then((res) => {
      setLabelsAge(res.data.map(({ dimensions }) => dimensions[0].name));
      setDataAge(res.data.map(({ metrics }) => metrics[0]));
    });
  }, [metrikaServiсe]);

  useEffect(() => {
    metrikaServiсe.getGender().then((res) => {
      setLabelsGender(res.data.map(({ dimensions }) => dimensions[0].name));
      setDataGender(res.data.map(({ metrics }) => metrics[0]));
    });
  }, [metrikaServiсe]);

  return (
    <div className="app">
      <PageHeader
        className="site-page-header"
        title="Yandex metrics"
        subTitle="chart set"
      />
      <div className='app__wrap'>
      <Title>Operating system report</Title>

        <DoughnutChart labels={labels} metrics={data}  />
        <HorizontalChart labels={labels} metrics={data}  />
        <VerticalChart labels={labels} metrics={data}  />
        <Title>age report</Title>
        <DoughnutChart labels={labelsAge} metrics={dataAge}  />
        <HorizontalChart labels={labelsAge} metrics={dataAge}  />
        <VerticalChart labels={labelsAge} metrics={dataAge}  />
        <Title>Gender report</Title>
        <DoughnutChart labels={labelsGender} metrics={dataGender}  />
        <HorizontalChart labels={labelsGender} metrics={dataGender}  />
        <VerticalChart labels={labelsGender} metrics={dataGender}  />
      </div>
    </div>
  );
}

export default App;
