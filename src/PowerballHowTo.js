import React from 'react';
import './PowerballHowTo.css';
import { Link } from 'react-router-dom';

function PowerballHowTo() {

    const linkStyle1 = {
        fontWeight: '500'
    }

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
                    <h3 class="Powerball">
                        <span>Powerball</span>
                    </h3>
                </div>
                <br></br>
                <div class="gameWrap Powerball">
                    <div class="header clearFix">
                        <div class="fl">
                            How to play 
                            <b>Powerball</b>
                        </div>
                        <div class="fr">
                            <Link to="/Powerball" className="buttonCustom" style={{ textDecoration: 'none', color: 'black', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px',borderColor: '#000102', border: '1px solid' }}>
                            Play Powerball
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="hTPGameWrap hTP-Powerball">
                        <div class="hTP-desc">
                            <strong>QUICK PICK OPTION:</strong>
                            You can play the LOTTO / 
                            <strong> PowerBall / PowerBall Plus </strong>
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
                                        <div class="stepText"> Find a valid PowerBall Betslip. </div>
                                    </li>

                                    <li class="ul-class">
                                        <div class="stepCircle">
                                            <img className='mb-6' src="https://content.nationallottery.co.za/images/siteImg/howPlay/htp-stepIcon2.png" alt=''></img>
                                            <div class="stepNum">2</div>
                                        </div>
                                        <div class="stepText">
                                        Using a pen / pencil, choose 5 numbers from 1 to 50 and 1 extra number from 1 to 20.
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
                                              <strong> eTV, Tues /Fri at 21h00 </strong>
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
                                        <li style={linkStyle1}>
                                             You can play as many boards as you want 
                                        </li>
                                        <br></br>
                                        <li style={linkStyle1}>
                                             You can choose a Multi-Draw option which allows you to play the same numbers over multiple draws.
                                        </li>
                                        <br></br>
                                        <li style={linkStyle1}>
                                             A single PowerBall play will cost you R5.00 vat incl.
                                        </li>
                                        <br></br>
                                        <li style={linkStyle1}>
                                             A single cost of PowerBall PLUS will be R2.50 vat incl.
                                        </li>
                                        <br></br>
                                        <li style={linkStyle1}>
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

export default PowerballHowTo;
