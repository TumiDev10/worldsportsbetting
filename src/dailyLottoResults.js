// import React, { useState } from 'react';
import './dailyLottoResults.css';
import { Link } from 'react-router-dom';

function DailyLottoResults()
{

    return(
        <div class="lotto__cont">
            <div class="page-headings">
                <span>
                <Link to="/Results" onclick="history.back(1); return false;" >
                <i aria-hidden="true" class="fa fa-chevron-circle-left"></i>
                </Link>
        
                </span>
                <span style={{position: 'absolute', marginLeft: '30px'}}>Daily Lotto - Results</span>
            </div>
            <div class="lotto-results-cont">
                <div class="lotto-results-header-cont">
                    <div class="lotto-results-header">DAILY LOTTO RESULTS</div>
                    <div>  
                        <Link to="/DailyLottoHistory" class="historical-results-btn">HISTORICAL RESULTS</Link>
                    </div>
                </div>
                    <div class="lotto-results-winning-numbers">
                        <div class="lotto-results-section-header">LOTTO RESULTS FOR DRAW ID 1523</div>
                        <div class="lotto-results-balls-cont">
                            <div class="lotto-results-balls-cont-col">
                                <div class="lotto-results-balls-header">LOTTO WINNING NUMBERS</div>
                                <div class="ballslist lotto">
                                    <span class="ball ball015" id='balls'>
                                        <div class="shape">
                                            <span>15</span>
                                        </div>
                                    </span>

                                    <span class="ball ball32" id='balls'>
                                        <div class="shape">
                                            <span>32</span>
                                        </div>
                                    </span>

                                    <span class="ball ball12" id='balls'>
                                        <div class="shape">
                                            <span>12</span>
                                        </div>
                                    </span>

                                    <span class="ball ball34" id='balls'>
                                        <div class="shape">
                                            <span>34</span>
                                        </div>
                                    </span>

                                    <span class="ball ball035" id='balls'>
                                        <div class="shape">
                                            <span>35</span>
                                        </div>
                                    </span>
                                </div>
                                <div class="lotto-results-balls-draw-text pt-1">DRAW DATE: 2023-05-14</div>
                            </div>

                            <div class="lotto-results-balls-cont-col">
                                <div class="lotto-results-balls-header">LOTTO WINNING NUMBERS</div>
                                <div>
                                    <div class="ballslist lotto">
                                        <span class="ball ball12" id='balls'>
                                            <div class="shape">
                                                <span>12</span>
                                            </div>
                                        </span>

                                        <span class="ball ball015" id='balls'>
                                            <div class="shape">
                                                <span>15</span>
                                            </div>
                                        </span>

                                        <span class="ball ball32" id='balls'>
                                            <div class="shape">
                                                <span>32</span>
                                            </div>
                                        </span>

                                        <span class="ball ball34" id='balls'>
                                            <div class="shape">
                                                <span>34</span>
                                            </div>
                                        </span>

                                        <span class="ball ball035" id='balls'>
                                            <div class="shape">
                                                <span>35</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div class="lotto-results-balls-draw-text pt-1">(NUMERICAL ORDER) </div>
                            </div>
                            
                        </div>
                            

                            <div class="lotto-results-winners">
                                <div class="lotto-results-winners-row">
                                    <div class="width-full text-color-grey lotto-results-winners-header">DIVISIONS</div>
                                    <div class="width-full text-color-grey lotto-results-winners-header">WINNERS</div>
                                    <div class="width-full text-color-grey lotto-results-winners-header">WINNINGS</div>
                                </div>

                                <div class="lotto-results-winners-row background-grey">
                                    <div class="width-full">DIV 1</div>
                                    <div class="width-full">
                                        <span class="text-color-pink">2</span>
                                        <br></br>
                                        FIVE CORRECT NUMBERS
                                    </div>
                                    <div class="width-full">R141,543.40</div>
                                </div>

                                <div class="lotto-results-winners-row">
                                    <div class="width-full">DIV 2</div>
                                    <div class="width-full">
                                        <span class="text-color-pink">187</span>
                                        <br></br>
                                        FOUR CORRECT NUMBERS
                                    </div>
                                    <div class="width-full">R348.70</div>
                                </div>

                                <div class="lotto-results-winners-row background-grey">
                                    <div class="width-full">DIV 3</div>
                                    <div class="width-full">
                                        <span class="text-color-pink">6543</span>
                                        <br></br>
                                         THREE CORRECT NUMBERS
                                    </div>
                                    <div class="width-full">R19.90</div>
                                </div>

                                <div class="lotto-results-winners-row">
                                    <div class="width-full">DIV 4</div>
                                    <div class="width-full">
                                        <span class="text-color-pink">61776</span>
                                        <br></br>
                                        TWO CORRECT NUMBERS
                                    </div>
                                    <div class="width-full">R5.20</div>
                                </div>
                            </div>

                            <div class="lotto-results-more-info">
                                  <div class="lotto-results-section-header">MORE INFO</div>
                                  <div class="lotto-results-more-info-empty-cell">&nbsp;</div>
                                  <div class="lotto-results-more-info-row1">
                                    <div class="width-full">TOTAL POOL SIZE</div>
                                    <div class="width-full text-color-pink">R799,734.60</div>
                                  </div>

                                  <div class="lotto-results-more-info-row2">
                                    <div class="width-full">TOTAL SALES</div>
                                    <div class="width-full text-color-pink">R1,590,375.00</div>
                                  </div>

                                  <div class="lotto-results-more-info-row2">
                                    <div class="width-full">DRAW MACHINE</div>
                                    <div class="width-full text-color-pink">RNG2</div>
                                  </div>

                                  <div class="lotto-results-more-info-row1">
                                    <div class="width-full">NEXT DRAW DATE</div>
                                    <div class="width-full text-color-pink">2023-05-15</div>
                                  </div>
                                  <div class="lotto-results-more-info-empty-cell">&nbsp;</div>

                            </div>
                        
                    </div>
            </div>
        </div>
    )
}


export default DailyLottoResults