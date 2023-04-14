import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import crane from "../../assets/img/crane.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_center}>
                        <h1 className={style.intro_title}>Строительная компания Bebe</h1>
                        <p className={style.intro_text}>Уют начинается с нас!</p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Смотреть каталог
                        </NavLink>
                    </div>
                    <img src={crane} alt="" className="intro_right" />
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home