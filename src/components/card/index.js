export const Card = ({
  level,
  name,
  time,
  range,
  components,
  duration,
  text,
  hightlevel,
  footer,
}) => {
  return (
    <div className="card">
      <div className="title">
        <span className="fs">{name}</span>
      </div>
      <div className="level">{level}</div>
      <div className="props">
        <div className="prop">
          <div className="propName">Время накладывания</div>
          <div className="propValue">{time}</div>
        </div>
        <div className="prop">
          <div className="propName">Дистанция</div>
          <div className="propValue">{range}</div>
        </div>
        <div className="prop">
          <div className="propName">Компоненты</div>
          <div className="propValue">{components}</div>
        </div>
        <div className="prop">
          <div className="propName">Длительность</div>
          <div className="propValue">{duration}</div>
        </div>
      </div>
      <div className="text">
        <div className="level"></div>
        {text.map((item) => (
          <p key={`p-${item}`}>{item}</p>
        ))}
        {/* <p className="first">{text}</p> */}
        {/* <p>
        Яркий луч вылетает из вашего указательного пальца в точку, выбранную
        вами в пределах дистанции, где и происходит взрыв пламени с гулким
        рѐвом. Все существа в пределах сферы с радиусом 20 футов с центром в
        этой точке должны совершить спасбросок Ловкости. Цель получает урон
        огнѐм 8к6 при провале или половину этого урона при успехе.
      </p>
      <p>
        Этот огонь огибает углы. Он воспламеняет горючие предметы, которые никто
        не несѐт и не носит.
      </p> */}
        {hightlevel && (
          <>
            {hightlevel.length > 0 && (
              <div className="higherLevels">
                <div className="level">На более высоком уровне</div>
                <p className="first">{hightlevel}</p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};
