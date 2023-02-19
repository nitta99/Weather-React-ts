type DayWeaterProps = {
  title: string;
  weater: string;
};

export const DayWeather = ({ title, weater }: DayWeaterProps) => {
  return (
    <>
      <div className="titleBlock">{title}</div>
      <div id={weater} className="weatherBlock"></div>
    </>
  );
};
