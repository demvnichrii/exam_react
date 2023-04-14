import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import crane from "../../assets/img/crane.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_left}>
                        <h1 className={style.intro_title}>Building your vision, creating your legacy</h1>
                        <p className={style.intro_text}>
                        Our experienced team of builders will work with you every step of the way to create the project of your dreams. From planning to completion, we are committed to providing quality workmanship and attention to detail.
                        </p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Explore
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