import React from 'react';
import './lottoHowTo.css';
import { Link } from 'react-router-dom';

function LottoHowTo() {
  return (  
      <div id="sp-component" class="col-sm-12 col-md-12">
        <div class="sp-column">
            <div id="system-message-container"></div>
            <article class="item item-page" itemscope itemtype="http://schema.org/Article">
                <meta itemprop="inLanguage" content="en-GB"></meta>
                <div class="entry-header"></div>
            </article>
            <div itemprop="articleBody">
                <div class="page-header">
                    <h2 class="sportstake8">
                        <span>Lotto</span>
                    </h2>
                </div>
                <br></br>
                <div class="gameWrap sportstake8">
                    <div class="header clearFix">
                        <div class="fl">
                            How to play 
                            <b>Lotto</b>
                        </div>
                        <div class="fr">
                            <Link to="/" className="buttonCustom" style={{ textDecoration: 'none', color: 'black', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px',borderColor: '#000102', border: '1px solid' }}>
                            Play Lotto
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="hTPGameWrap hTP-sortstake8">
                        <div class="hTP-desc">
                            <strong>QUICK PICK OPTION:</strong>
                            You can play the LOTTO / 
                            <strong>LOTTO Plus 1 / LOTTO Plus 2</strong>
                            games by choosing a Quick Pick option where the Lottery processing system randomly chooses 6 lucky numbers for you. 
                            <br></br>
                            <br></br>
                             or 
                        </div>
                        <div class="hTP-panel">
                            <div class="hTP-panelHeading">You can manually choose your lucky numbers by following these easy steps.</div>
                            <div class="hTP-panelBody">
                                <ul class="hTP-step">
                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon1.png" alt=''></img>
                                            <div class="stepNum">1</div>
                                        </div>
                                        <div class="stepText"> Find a valid LOTTO Betslip. </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon2.png" alt=''></img>
                                            <div class="stepNum">2</div>
                                        </div>
                                        <div class="stepText">
                                             Using a pen / pencil, choose 6 numbers from 1 to 52 numbers on any board by marking your choice of numbers. 
                                        </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon3.png" alt=''></img>
                                            <div class="stepNum">3</div>
                                        </div>
                                        <div class="stepText">
                                            Take your Betslip to a teller at an approved Lottery retailer to make your payment. 
                                        </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon4.png" alt=''></img>
                                            <div class="stepNum">4</div>
                                        </div>
                                        <div class="stepText"> You will receive a receipt from the teller with all your chosen numbers. </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon5.png" alt=''></img>
                                            <div class="stepNum">5</div>
                                        </div>
                                        <div class="stepText"> Make sure you write your name on the back of the receipt. </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon6.png" alt= ''></img>
                                            <div class="stepNum">6</div>
                                        </div>
                                        <div class="stepText">
                                             Look out for the next LOTTO Draw on
                                              <strong>SABC 2, Wed /Sat at 20h57 </strong>
                                             to see if you have won. 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="hTP-panel margin-b50">
                            <div class="hTP-panel margin-b50">
                                <div class="hTP-panelHeading">Remember:</div>
                                <div class="hTP-panelBody">
                                    <ul class="bulletList">
                                        <li>
                                             You can play as many boards as you want 
                                        </li>
                                        <li>
                                            To Play LOTTO PLUS 2, simply Mark LOTTO PLUS 2 option on your betslip. 
                                        </li>
                                        <li>
                                            In order to Play LOTTO PLUS 2, LOTTO and LOTTO PLUS 1 has to be played. 
                                        </li>
                                        <li>
                                            You can choose a Multi-Draw option which allows you to play the same numbers over multiple draws. 
                                        </li>
                                        <li>
                                            A single LOTTO play will cost you R5.00 vat incl. A single cost of LOTTO PLUS 1 will be R2.50 and a single cost of LOTTO PLUS 2 will be R2.50 vat incl. 
                                        </li>
                                        <li>
                                             Ticket sales close at 8:30pm on any given draw day. 
                                        </li>
                                    </ul>
                                </div>
                                <button onclick="window.open('/ithuba/images/docs/LOTTO-Rules-and-Regs-V11-18320.pdf', '_blank', 'fullscreen=yes'); return false;" class="btnGray"> Rules and regulations </button>
                            </div>
                        </div>
                </div> 

                

             
            </div>







        </div>
      </div>
    
  );
}

export default LottoHowTo;
