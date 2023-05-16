// import React, { useState } from 'react';
import './PowerballPlus1.css';
import { Link } from 'react-router-dom';

function PowerballResults()
{

    return(
        <div class="lotto__cont">
            <div class="page-headings">
                <span>
                <Link to="/Results" onclick="history.back(1); return false;" >
                <i aria-hidden="true" class="fa fa-chevron-circle-left"></i>
                </Link>
        
                </span>
                <span style={{position: 'absolute', marginLeft: '30px'}}>Powerball Plus 1 - Results</span>
            </div>
            
            <div class="lotto-results-cont">
              <div class="lotto-results-header-cont">
                <div class="lotto-results-header">POWERBALL PLUS 1 RESULTS</div>
              
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
                            <span class="ball ball29">
                                <div class="shape">
                                    <span>35</span>
                                </div>
                            </span>

                            <span class="ball ball47">
                                <div class="shape">
                                    <span>36</span>
                                </div>
                            </span>

                            <span class="ball ball05">
                                <div class="shape">
                                    <span>37</span>
                                </div>
                            </span>

                            <span class="ball ball030">
                                <div class="shape">
                                    <span>15</span>
                                </div>
                            </span>

                            <span class="ball ball40">
                                <div class="shape">
                                    <span>13</span>
                                </div>
                            </span>

                            <span class>
                                <div class="lotto-results-balls-plus"> + </div>
                            </span>

                            <span class="ball ball18">
                                <div class="shape">
                                    <span>13</span>         
                                </div>
                            </span>
                        </div>
                        <div class="lotto-results-balls-draw-text pt-1">DRAW DATE: 2023-05-13</div>
                    </div>

                    <div class="lotto-results-balls-cont-col">
                        <div class="lotto-results-balls-header">LOTTO WINNING NUMBERS</div>
                        <div>
                            <div class="ballslist lotto" id='ballz'>
                                <span class="ball ball05">
                                    <div class="shape">
                                        <span>13</span>
                                    </div>
                                </span>

                                <span class="ball ball11">
                                    <div class="shape">
                                        <span>15</span>
                                    </div>
                                </span>

                                <span class="ball ball030">
                                    <div class="shape">
                                        <span>35</span>
                                    </div>
                                </span>

                                <span class="ball ball40">
                                    <div class="shape">
                                        <span>36</span>
                                    </div>
                                </span>

                                <span class="ball ball47">
                                    <div class="shape">
                                        <span>37</span>
                                    </div>
                                </span>

                                <span class>
                                    <div class="lotto-results-balls-plus"> + </div>
                                </span>

                                <span class="ball ball18">
                                    <div class="shape">
                                        <span>13</span>
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
                            <span class="text-color-pink">1</span>
                            <br></br>
                            FIVE CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R40,218,921.61</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 2</div>
                        <div class="width-full">
                            <span class="text-color-pink">3</span>
                            <br></br>
                            FIVE CORRECT NUMBERS 
                        </div>
                        <div class="width-full">R58,141.70</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 3</div>
                        <div class="width-full">
                            <span class="text-color-pink">28</span>
                            <br></br>
                            FOUR CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R3,900.90</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 4</div>
                        <div class="width-full">
                            <span class="text-color-pink">369</span>
                            <br></br>
                            FOUR CORRECT NUMBERS
                        </div>
                        <div class="width-full">R501.80</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 5</div>
                        <div class="width-full">
                            <span class="text-color-pink">1034</span>
                            <br></br>
                            THREE CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R202.50</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 6</div>
                        <div class="width-full">
                            <span class="text-color-pink">16147</span>
                            <br></br>
                            THREE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R10.80</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 7</div>
                        <div class="width-full">
                            <span class="text-color-pink">14504</span>
                            <br></br>
                            THREE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R9.10</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 8</div>
                        <div class="width-full">
                            <span class="text-color-pink">73974</span>
                            <br></br>
                            TWO CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R7.50</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 9</div>
                        <div class="width-full">
                            <span class="text-color-pink">117008</span>
                            <br></br>
                            MATCH POWERBALL
                        </div>
                        <div class="width-full">R5.00</div>
                    </div>
                </div>

                <div class="lotto-results-more-info">
                    <div class="lotto-results-section-header1">MORE INFO</div>
                    <div class="lotto-results-more-info-empty-cell">&nbsp;</div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">ROLLOVER AMOUNT</div>
                        <div class="width-full text-color-pink">R0.00</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">ROLLOVER NO</div>
                        <div class="width-full text-color-pink">7</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">TOTAL POOL SIZE</div>
                        <div class="width-full text-color-pink">R42,343,340.06</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">TOTAL SALES</div>
                        <div class="width-full text-color-pink">R9,376,325.00</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">NEXT JACKPOT</div>
                        <div class="width-full text-color-pink">R2,000,000.00</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">DRAW MACHINE</div>
                        <div class="width-full text-color-pink">RNG2</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">NEXT DRAW DATE</div>
                        <div class="width-full text-color-pink">2023-05-16</div>
                    </div>
                    <div class="lotto-results-more-info-empty-cell">&nbsp;</div>
                </div>
            </div>
            </div>
            
            </div>
            )
}

export default PowerballResults;