// import React, { useState } from 'react';
import './LottoResults.css';
import { Link } from 'react-router-dom';

function LottoPlus2()
{

    return(
        <div class="lotto__cont">
            <div class="page-headings">
                <span>
                <Link to="/Results" onclick="history.back(1); return false;" >
                <i aria-hidden="true" class="fa fa-chevron-circle-left"></i>
                </Link>
        
                </span>
                <span style={{position: 'absolute', marginLeft: '30px'}}>Lotto Plus 2 - Results</span>
            </div>
            
            <div class="lotto-results-cont">
              <div class="lotto-results-header-cont">
                <div class="lotto-results-header">LOTTO PLUS 2 RESULTS</div>
              
              <div>
                <a href="history-lotto.php" class="historical-results-btn">HISTORICAL RESULTS</a>
              </div>
              
            </div>

            <div class="lotto-results-winning-numbers">
                <div class="lotto-results-section-header1">LOTTO RESULTS FOR DRAW ID 2333</div>
                <div class="lotto-results-balls-cont">
                    <div class="lotto-results-balls-cont-col">
                        <div class="lotto-results-balls-header">LOTTO WINNING NUMBERS</div>
                        <div class="ballslist lotto" id='ballz'>
                            <span class="ball ball49">
                                <div class="shape">
                                    <span>48</span>
                                </div>
                            </span>

                            <span class="ball ball30">
                                <div class="shape">
                                    <span>04</span>
                                </div>
                            </span>

                            <span class="ball ball10">
                                <div class="shape">
                                    <span>35</span>
                                </div>
                            </span>

                            <span class="ball ball16">
                                <div class="shape">
                                    <span>05</span>
                                </div>
                            </span>

                            <span class="ball ball23">
                                <div class="shape">
                                    <span>44</span>
                                </div>
                            </span>

                            <span class="ball ball24">
                                <div class="shape">
                                    <span>34</span>
                                </div>
                            </span>

                            <span class>
                                <div class="lotto-results-balls-plus"> + </div>
                            </span>

                            <span class="ball ball5">
                                <div class="shape">
                                    <span>45</span>         
                                </div>
                            </span>
                        </div>
                        <div class="lotto-results-balls-draw-text pt-1">DRAW DATE: 2023-05-13</div>
                    </div>

                    <div class="lotto-results-balls-cont-col">
                        <div class="lotto-results-balls-header">LOTTO WINNING NUMBERS</div>
                        <div>
                            <div class="ballslist lotto" id='ballz'>
                                <span class="ball ball10">
                                    <div class="shape">
                                        <span>04</span>
                                    </div>
                                </span>

                                <span class="ball ball16">
                                    <div class="shape">
                                        <span>05</span>
                                    </div>
                                </span>

                                <span class="ball ball23">
                                    <div class="shape">
                                        <span>34</span>
                                    </div>
                                </span>

                                <span class="ball ball24">
                                    <div class="shape">
                                        <span>35</span>
                                    </div>
                                </span>

                                <span class="ball ball30">
                                    <div class="shape">
                                        <span>44</span>
                                    </div>
                                </span>

                                <span class="ball ball49">
                                    <div class="shape">
                                        <span>48</span>
                                    </div>
                                </span>

                                <span class>
                                    <div class="lotto-results-balls-plus"> + </div>
                                </span>

                                <span class="ball ball5">
                                    <div class="shape">
                                        <span>45</span>
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
                            <span class="text-color-pink">0</span>
                            <br></br>
                            SIX CORRECT NUMBERS
                        </div>
                        <div class="width-full">R0.00</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 2</div>
                        <div class="width-full">
                            <span class="text-color-pink">1</span>
                            <br></br>
                            FIVE CORRECT NUMBERS + BONUS BALL
                        </div>
                        <div class="width-full">R184,327.20</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 3</div>
                        <div class="width-full">
                            <span class="text-color-pink">32</span>
                            <br></br>
                            FIVE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R3,840.10</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 4</div>
                        <div class="width-full">
                            <span class="text-color-pink">96</span>
                            <br></br>
                            FOUR CORRECT NUMBERS + BONUS BALL
                        </div>
                        <div class="width-full">R1,588.20</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 5</div>
                        <div class="width-full">
                            <span class="text-color-pink">1982</span>
                            <br></br>
                            FOUR CORRECT NUMBERS
                        </div>
                        <div class="width-full">R153.90</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 6</div>
                        <div class="width-full">
                            <span class="text-color-pink">2538</span>
                            <br></br>
                            THREE CORRECT NUMBERS + BONUS BALL
                        </div>
                        <div class="width-full">R120.20</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 7</div>
                        <div class="width-full">
                            <span class="text-color-pink">37462</span>
                            <br></br>
                            THREE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R25.00</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 8</div>
                        <div class="width-full">
                            <span class="text-color-pink">28201</span>
                            <br></br>
                            TWO CORRECT NUMBERS + BONUS BALL
                        </div>
                        <div class="width-full">R15.00</div>
                    </div>
                </div>

                <div class="lotto-results-more-info">
                    <div class="lotto-results-section-header1">MORE INFO</div>
                    <div class="lotto-results-more-info-empty-cell">&nbsp;</div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">ROLLOVER AMOUNT</div>
                        <div class="width-full text-color-pink">R2,379,734.40</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">ROLLOVER NO</div>
                        <div class="width-full text-color-pink">2</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">TOTAL POOL SIZE</div>
                        <div class="width-full text-color-pink">R4,933,786.71</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">TOTAL SALES</div>
                        <div class="width-full text-color-pink">R7,656,927.50</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">NEXT JACKPOT</div>
                        <div class="width-full text-color-pink">R3,500,000.00</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">DRAW MACHINE</div>
                        <div class="width-full text-color-pink">RNG2</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">NEXT DRAW DATE</div>
                        <div class="width-full text-color-pink">2023-05-17</div>
                    </div>
                    <div class="lotto-results-more-info-empty-cell">&nbsp;</div>
                </div>
            </div>
            </div>
            
            </div>
            )
}

export default LottoPlus2;