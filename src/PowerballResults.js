// import React, { useState } from 'react';
import './PowerballResults.css';
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
                <span style={{position: 'absolute', marginLeft: '30px'}}>Powerball - Results</span>
            </div>
            
            <div class="lotto-results-cont">
              <div class="lotto-results-header-cont">
                <div class="lotto-results-header">POWERBALL RESULTS</div>
              
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
                                    <span>29</span>
                                </div>
                            </span>

                            <span class="ball ball47">
                                <div class="shape">
                                    <span>47</span>
                                </div>
                            </span>

                            <span class="ball ball05">
                                <div class="shape">
                                    <span>05</span>
                                </div>
                            </span>

                            <span class="ball ball030">
                                <div class="shape">
                                    <span>30</span>
                                </div>
                            </span>

                            <span class="ball ball40">
                                <div class="shape">
                                    <span>40</span>
                                </div>
                            </span>

                            <span class>
                                <div class="lotto-results-balls-plus"> + </div>
                            </span>

                            <span class="ball ball18">
                                <div class="shape">
                                    <span>18</span>         
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
                                        <span>05</span>
                                    </div>
                                </span>

                                <span class="ball ball11">
                                    <div class="shape">
                                        <span>11</span>
                                    </div>
                                </span>

                                <span class="ball ball030">
                                    <div class="shape">
                                        <span>30</span>
                                    </div>
                                </span>

                                <span class="ball ball40">
                                    <div class="shape">
                                        <span>40</span>
                                    </div>
                                </span>

                                <span class="ball ball47">
                                    <div class="shape">
                                        <span>47</span>
                                    </div>
                                </span>

                                <span class>
                                    <div class="lotto-results-balls-plus"> + </div>
                                </span>

                                <span class="ball ball18">
                                    <div class="shape">
                                        <span>18</span>
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
                            FIVE CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R0.00</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 2</div>
                        <div class="width-full">
                            <span class="text-color-pink">0</span>
                            <br></br>
                            FIVE CORRECT NUMBERS 
                        </div>
                        <div class="width-full">R0.00</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 3</div>
                        <div class="width-full">
                            <span class="text-color-pink">28</span>
                            <br></br>
                            FOUR CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R23,388.70</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 4</div>
                        <div class="width-full">
                            <span class="text-color-pink">388</span>
                            <br></br>
                            FOUR CORRECT NUMBERS
                        </div>
                        <div class="width-full">R1,101.90</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 5</div>
                        <div class="width-full">
                            <span class="text-color-pink">845</span>
                            <br></br>
                            THREE CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R572.10</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 6</div>
                        <div class="width-full">
                            <span class="text-color-pink">17323</span>
                            <br></br>
                            THREE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R23.30</div>
                    </div>

                    <div class="lotto-results-winners-row background-grey">
                        <div class="width-full">DIV 7</div>
                        <div class="width-full">
                            <span class="text-color-pink">12648</span>
                            <br></br>
                            THREE CORRECT NUMBERS
                        </div>
                        <div class="width-full">R23.90</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 8</div>
                        <div class="width-full">
                            <span class="text-color-pink">68646</span>
                            <br></br>
                            TWO CORRECT NUMBERS + POWERBALL
                        </div>
                        <div class="width-full">R15.00</div>
                    </div>

                    <div class="lotto-results-winners-row">
                        <div class="width-full">DIV 9</div>
                        <div class="width-full">
                            <span class="text-color-pink">113760</span>
                            <br></br>
                            MATCH POWERBALL
                        </div>
                        <div class="width-full">R10.00</div>
                    </div>
                </div>

                <div class="lotto-results-more-info">
                    <div class="lotto-results-section-header1">MORE INFO</div>
                    <div class="lotto-results-more-info-empty-cell">&nbsp;</div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">ROLLOVER AMOUNT</div>
                        <div class="width-full text-color-pink">R33,657,332.32</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">ROLLOVER NO</div>
                        <div class="width-full text-color-pink">7</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">TOTAL POOL SIZE</div>
                        <div class="width-full text-color-pink">R38,096,380.72</div>
                    </div>

                    <div class="lotto-results-more-info-row2">
                        <div class="width-full">TOTAL SALES</div>
                        <div class="width-full text-color-pink">R20,680,350.00</div>
                    </div>

                    <div class="lotto-results-more-info-row1">
                        <div class="width-full">NEXT JACKPOT</div>
                        <div class="width-full text-color-pink">R39,000,000.00</div>
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