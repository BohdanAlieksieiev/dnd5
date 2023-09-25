import { useState } from "react";
import { Card } from "./components/card";
import apiCards from "./api/cards.json";

function App() {
  const MAX_LVL = 10;
  const ALL_CLASS_HERO = "All"
  const CONSPIRACT = "Заговор"
  const [lvls, setLvls] = useState([]);
  const [classHero, setClassHero] = useState(ALL_CLASS_HERO);
  const { cards, classesCard } = apiCards;

  const onHandlerLvl = (event) => {
    if (event.target.id) {
      const idLvl = event.target.id;
      const findLvl = lvls.find((item) => item === idLvl);
      if (findLvl) setLvls(lvls.filter((item) => item !== idLvl));
      else setLvls([...lvls, idLvl]);
    }
  };

  return (
    <section>
      <div onClick={onHandlerLvl} className="container-lvl-checkbox">
        <select
          name="classHero"
          defaultValue={classHero}
          onChange={(e) => setClassHero(e.target.value)}
        >
          <option value={ALL_CLASS_HERO}>{ALL_CLASS_HERO}</option>
          {Object.keys(classesCard).map((key) => (
            <option key={`option-${key}`} value={key}>
              {key}
            </option>
          ))}
        </select>
        {[...Array(MAX_LVL)].map((_, index) => {
          return (
            <div key={`max-lvl-${index}`}>
              <input type="checkbox" name={index} id={index} />
              <label htmlFor={index}>{index} lvl</label>
            </div>
          );
        })}
      </div>
      <div className="container">
        {cards
          .filter((card) =>
            lvls.find((lvl) =>
              lvl === "0"
                ? card.level.toLowerCase().includes(CONSPIRACT.toLocaleLowerCase())
                : card.level.toLowerCase().includes(lvl)
            )
          ).filter((card) => {
            if (classHero === ALL_CLASS_HERO) return true
            else {
              return classesCard[classHero].find(spellName => spellName === card.name)
            }
          })
          .map((card, index) => (
            <div key={`${card.name}-${index}`}>
              <Card
                {...card}
                footer={`${classHero} - ${
                  parseInt(card.level)
                    ? `${parseInt(card.level)} уровень`
                    : CONSPIRACT
                }`}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default App;
