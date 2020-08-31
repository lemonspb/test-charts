import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../ContextMetrika";
import { PageHeader, Spin } from "antd";
import DoughnutChart from "../Charts/Doughnut";
import HorizontalChart from "../Charts/HorizontalBar";
import VerticalChart from "../Charts/VerticalBar";
import LineChart from "../Charts/LineBar";
import PolarChart from "../Charts/PolarBar";

import { Typography } from "antd";

import "./style.scss";
function App() {
  const { Title } = Typography;
  const { metrikaServiсe } = useContext(ServiceContext);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [labelsAge, setLabelsAge] = useState([]);
  const [dataAge, setDataAge] = useState([]);
  const [labelsGender, setLabelsGender] = useState([]);
  const [dataGender, setDataGender] = useState([]);
  const [loadingOsReport, setLoadingOsReport] = useState(false);
  const [loadingAgeReport, setLoadingAgeReport] = useState(false);
  const [loadingGenderReport, setLoadingGenderReport] = useState(false);
  useEffect(() => {
    setLoadingOsReport(true);
    metrikaServiсe.getTechPlatforms().then((res) => {
      setLabels(res.data.map(({ dimensions }) => dimensions[1].name));
      setData(res.data.map(({ metrics }) => metrics[0]));
      setLoadingOsReport(false);
    });
  }, [metrikaServiсe]);

  useEffect(() => {
    setLoadingAgeReport(true);
    metrikaServiсe.getAge().then((res) => {
      setLabelsAge(res.data.map(({ dimensions }) => dimensions[0].name));
      setDataAge(res.data.map(({ metrics }) => metrics[0]));
      setLoadingAgeReport(false);
    });
  }, [metrikaServiсe]);

  useEffect(() => {
    setLoadingGenderReport(true);
    metrikaServiсe.getGender().then((res) => {
      setLabelsGender(res.data.map(({ dimensions }) => dimensions[0].name));
      setDataGender(res.data.map(({ metrics }) => metrics[0]));
      setLoadingGenderReport(false);
    });
  }, [metrikaServiсe]);

  return (
    <div className="app">
      <PageHeader
        className="site-page-header"
        title="Yandex metrics"
        subTitle="chart set"
      />
      <div className="app__wrap">
        <Title>Operating system report</Title>
        <div className="app__content">
          {loadingOsReport ? (
            <Spin size={"large"} />
          ) : (
            <DoughnutChart labels={labels} metrics={data} />
          )}
          {loadingOsReport ? (
            <Spin size={"large"} />
          ) : (
            <HorizontalChart labels={labels} metrics={data}  title='Os report' />
          )}
          {loadingOsReport ? (
            <Spin size={"large"} />
          ) : (
            <LineChart labels={labels} metrics={data} title='Os report' />
          )}
        </div>
        <Title>Age report</Title>
        <div className="app__content">
          {loadingAgeReport ? (
            <Spin size={"large"} />
          ) : (
            <LineChart labels={labelsAge} metrics={dataAge}  title='Age'/>
          )}
          <div className="app__chunk">
            {loadingAgeReport ? (
              <Spin size={"large"} />
            ) : (
              <DoughnutChart labels={labelsAge} metrics={dataAge}  />
            )}
            {loadingAgeReport ? (
              <Spin size={"large"} />
            ) : (
              <HorizontalChart labels={labelsAge} metrics={dataAge} title='Age' />
            )}
          </div>
        </div>
        <Title>Gender report</Title>
        <div className="app__content">
          {loadingGenderReport ? (
            <Spin size={"large"} />
          ) : (
            <DoughnutChart labels={labelsGender} metrics={dataGender} />
          )}
          {loadingGenderReport ? (
            <Spin size={"large"} />
          ) : (
            <HorizontalChart labels={labelsGender} metrics={dataGender} title='Gender' />
          )}
          {loadingGenderReport ? (
            <Spin size={"large"} />
          ) : (
            <VerticalChart labels={labelsGender} metrics={dataGender} title='Gender'/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
