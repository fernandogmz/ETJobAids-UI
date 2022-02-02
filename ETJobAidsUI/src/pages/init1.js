import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavNext from '../components/btns/BtnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"



const Init1 = ({terms}) => {
    console.log(terms);
    let op_lngs ={
        name: 'languages',
        clss:'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top">
                    <div className="select_lang slide_in_blurred_right" tabindex="1">
                        <SelectOp ops={op_lngs.lngs} name={op_lngs.name} clss={op_lngs.clss}/>
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div className="int1">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{terms['INT.Welcome']}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="content_video slide_in_blurred_bottom">
                        <ReactPlayer
                                    url={require('../assets/mp4/example_video.mp4')}
                                    width='auto'
                                    height='45vh'
                                    controls
                                    playing
                                    volume='0.85'
                                    />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">

                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Init_2"}>
                            <BtnNavNext text_btn={terms['core.Next']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Init1;