import React, {useContext} from "react";
import AppContext from "../../context";
import './Info.scss';


export const Info = (props) => {

  const {setCartOpened} = useContext(AppContext);

  return (
    <div className="info">
      <img src={props.img} alt="Clear" className="info__img" />
      <h2 className="info__title">{props.title}</h2>
      <p className="info__text">
        {props.descr}
      </p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        Вернуться назад
      </button>
    </div>
  );

};
