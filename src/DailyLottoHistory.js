import React, {useState} from "react";
import { Link } from "react-router-dom";
import './DailyLottoHistory.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DailyLottoHistory() {
    const [selectedRange, setSelectedRange] = useState(null);

  const handleDateChange = (range) => {
    setSelectedRange(range);
    // You can perform any desired actions with the selected date range here
    console.log("Selected Range:", range);
  };

    return(
        <div class="lotto__cont">
            <div class="page-headings">
                <span>
                <Link to="/DailyLottoResults" onclick="history.back(1); return false;" >
                <i aria-hidden="true" class="fa fa-chevron-circle-left"></i>
                </Link>
                </span>
                <span style={{position: 'absolute', marginLeft: '30px'}}>Daily Lotto - History</span>
            </div>

            <div class="lotto-results-cont">
                <form method="post" action autocomplete="off">
                    <div class="lotto-history-date-picker-cont bg-color-dailyLotto">
                        <div class="p-1">
                            <label for="datefilter" class="lotto-history-label">DATE RANGE:</label>
                            <div className="lotto-history-input-container" >
                                <DatePicker 
                                    selected={selectedRange}
                                    onChange={handleDateChange}
                                    startDate={selectedRange ? selectedRange[0] : null}
                                    endDate={selectedRange ? selectedRange[1] : null}
                                    selectsRange
                                />
                            </div>
                        </div>

                        <div class="p-1">
                            <input type="submit" name="search" class="lotto-history-search-btn" value="SEARCH"></input>
                        </div>
                    </div>
                </form>


            <div class="lotto-results-winning-numbers">
                <div class="lotto-results-section-header">HISTORICAL RESULTS</div>
                <div class="lotto-history-row mobile-hide" style={{alignItems: 'center'}}>
                    <div class="text-color-grey lotto-results-winners-header" style={{width:'20%'}}>LOTTO</div>
                    <div class="text-color-grey lotto-results-winners-header" style={{width:'20%'}}>GAME DATE</div>
                    <div class="text-color-grey lotto-results-winners-header" style={{width:'20%'}}>LOTTO WINNING NUMBERS</div>
                </div>

                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1524"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1524&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-15</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>02</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>05</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>17</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>29</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>32</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1523"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1523&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-14</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>12</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>15</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>32</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>34</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>35</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1522"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1522&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-13</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>03</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>10</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>28</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>30</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>31</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1521"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1521&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-12</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>13</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>22</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>23</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>26</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>34</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1520"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1520&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-11</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>10</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>14</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>17</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>22</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>32</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1519"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1519&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-10</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>03</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>08</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>09</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>19</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>35</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1518"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1518&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-09</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>01</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>11</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>13</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>26</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>36</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1517"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1517&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-08</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>06</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>09</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>13</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>16</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>36</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1516"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1516&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-07</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>05</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>13</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>16</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>19</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>28</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="lotto-history-row background-grey">
                    <div class="lotto-history-inner-cont">
                        <div class="lotto-history-inner-left">
                            <div class="lotto-history-lotto-col">
                                <form action="../ithuba/results-history-DailyLotto.php" method="post" style={{display:'inline'}}>
                                    <input type="hidden" name="DrawNumber" value="1515"></input>
                                    <button type="submit" class="lotto-draw-btn">LOTTO DRAW 1515&nbsp;</button>
                                </form>
                            </div>
                            <div class="lotto-history-date-col">2023-05-06</div>
                        </div>
                        <div class="lotto-history-inner-right ">
                            <div class="lotto-history-numbers-col">
                                <div class="ballslist lotto">
                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>03</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>08</span>
                                        </div>
                                    </span>


                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>11</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>15</span>
                                        </div>
                                    </span>

                                    <span class="ball ball2">
                                        <div class="shape">
                                            <span>28</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
            </div>
        </div>
    )
}

export default DailyLottoHistory;