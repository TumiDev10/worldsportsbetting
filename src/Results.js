// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css'


function Results() {

    const linkStyle = {
        padding: '0px 10px',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    }

    const linkStyle1 = {
        position: 'absolute',
        marginLeft: '30px'
    }

    const linkStyle2 = {
        backgroundColor: 'transparent',
        color: '#fff',
        opacity: '1', 
        position: 'absolute',
        right: '0',
        fontSize: '1.5rem',
        fontWeight: '700',
        textShadow: '0 1px 0 #fff',
        marginRight: '30px',
        marginTop: '-9px',
        border: 'none'
    }

    return(
        <div class="lotto__cont">
            <div class="page-headings">
                <span>
                    <Link to="/" onclick="history.back(1); return false;">
                        <i aria-hidden="true" class="fa fa-chevron-circle-left"></i>
                    </Link>
                    <button style={linkStyle2} type="button" class="close" data-bs-dismiss="modal">×</button>
                </span>
                <span style={linkStyle1}>National Lottery - Results</span>
            </div>
            <div style={linkStyle}>
                <p>Please select a result for:</p>
                <div class="lotto-selection-cont">
                    <div class="lotto-selection-col">
                    <Link to="/dailyLottoResults" className="buttonCustom" >
                        <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_dailylotto.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-DailyLotto.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_dailylotto.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>
                    
                    <div class="lotto-selection-col">
                    <Link to="/LottoResults" className="buttonCustom" >
                        <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lotto.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-Lotto.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lotto.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>

                    <div class="lotto-selection-col">
                    <Link to="/LottoPlus1" className="buttonCustom" >
                        <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lottoplus1.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-LottoPlus1.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lottoplus1.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>

                    <div class="lotto-selection-col">
                    <Link to="/LottoPlus2" className="buttonCustom" >
                        <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lottoplus2.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-LottoPlus2.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_lottoplus2.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>

                    <div class="lotto-selection-col">
                    <Link to="/PowerballResults" className="buttonCustom" >
                    <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_powerball.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-Powerball.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_powerball.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>

                    <div class="lotto-selection-col">
                    <Link to="/PowerballPlus1" className="buttonCustom" >
                        <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_powerballPlus.png" alt='' class="select-img"></img>
                    </Link>
                        {/* <a href="/ithuba/results-PowerballPlus.php">
                            <img src="http://cdn.worldsportsbetting.co.za/images/ithuba/game_powerballPlus.png" alt='' class="select-img"></img>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;