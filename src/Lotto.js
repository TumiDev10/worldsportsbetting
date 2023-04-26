import React, { useState } from 'react';
import './Lotto.css';


function Lotto() {
  const [numRows, setNumRows] = useState(1);
  const [quickPick, setQuickPick] = useState(true);
  const [ticketNotification, setTicketNotification] = useState(true);

  function handleNumRowsChange(e) {
    setNumRows(e.target.value);
  }

  function handleQuickPickChange(e) {
    setQuickPick(e.target.checked);
  }

  function handleTicketNotificationChange(e) {
    setTicketNotification(e.target.checked);
  }

  function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  function generateTickets() {
    const tickets = [];
    for (let i = 0; i < numRows; i++) {
      const ticket = quickPick ? generateRandomNumbers() : [];
      tickets.push(ticket);
    }
    return tickets;
  }

  const tickets = generateTickets();

  return (
    <div className="lotto">
      <div className="header">
      <div class="buttons">
      <i className="fas fa-chevron-circle-left back-button"></i>
      <i className="fas fa-times exit-button"></i>
      </div>
        <div className='Lotto'>
          <h1>National Lottery - Lotto</h1>
        </div>
      </div>
      <div className='header__logo'>
      <button className="lotto-button1">
  <img className="blue-background" src="https://yt3.googleusercontent.com/ytc/AGIKgqP-H0waolKlrxysnALgv_SX58bciXjKHR6JqnQ-Ng=s900-c-k-c0x00ffffff-no-rj" alt="National Lottery" width="100" height="100" />
  <h1 className='daily-lotto1'>Daily Lotto</h1>
</button>
<button className="lotto-button2">
  <img style={{ backgroundColor: 'transparent' }} src="https://yt3.googleusercontent.com/ytc/AGIKgqP-H0waolKlrxysnALgv_SX58bciXjKHR6JqnQ-Ng=s900-c-k-c0x00ffffff-no-rj" alt="National Lottery" width="100" height="100" />
  <h1 className='daily-lotto2'>Powerball</h1>
</button>
<button className="lotto-button3">
  <img style={{ backgroundColor: 'transparent' }} src="https://yt3.googleusercontent.com/ytc/AGIKgqP-H0waolKlrxysnALgv_SX58bciXjKHR6JqnQ-Ng=s900-c-k-c0x00ffffff-no-rj" alt="National Lottery" width="100" height="100" />
  <h1 className='daily-lotto3'>SPORTSTAKE8</h1>
</button>
<button className="lotto-button4">  
  <img style={{ backgroundColor: 'transparent' }} src="https://yt3.googleusercontent.com/ytc/AGIKgqP-H0waolKlrxysnALgv_SX58bciXjKHR6JqnQ-Ng=s900-c-k-c0x00ffffff-no-rj" alt="National Lottery" width="100" height="100" />
  <h1 className='daily-lotto4'>SPORTSTAKE13</h1>
</button>
        </div>
        <div className='Lotto-heading'>
        <h2>LOTTO</h2>
        <label>
        YOU HAVE SELECTED TO PLAY LOTTO
        </label>
        <div className='Lotto-heading1'>
        <button type="button" className='Instructions'>
        <label>HOW TO PLAY?</label>
        </button>
        <button className='Results'>
        <label>Results</label>
        </button>
        </div>
        
        </div>
      
      <div className="selections">
        <h3>Select number of draws: </h3>
        <input className='Slider' type="range" h4 min="1" max="10" value={numRows} onChange={handleNumRowsChange} />
        <label className= 'NoDraws'>  No Draws:</label>
        <span> {numRows}</span>
      </div>
      <div className="selections">
        <h3>Selections:</h3>
        <label>
          Quick pick:
          <input type="checkbox" checked={quickPick} onChange={handleQuickPickChange} />
        </label>
        <div className="numbers">
          {quickPick && (
            <>
              <span className="selected">{generateRandomNumbers()[0]}</span>
              <span className="selected">{generateRandomNumbers()[1]}</span>
              <span className="selected">{generateRandomNumbers()[2]}</span>
              <span className="selected">{generateRandomNumbers()[3]}</span>
              <span className="selected">{generateRandomNumbers()[4]}</span>
              <span className="selected">{generateRandomNumbers()[5]}</span>
            </>
          )}
        </div>
      </div>
      <div className="selections">
        <h3>Ticket(s):</h3>
        <input type="range" min="0" max="1" value={ticketNotification ? 1 : 0} onChange={handleTicketNotificationChange} />
        <span>{ticketNotification ? 'Yes' : 'No'}</span>
      </div>
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket">
          {ticket.map((num) => (
            <span key={num} className="selected">
              {num}
            </span>
          ))}
        </div>
      ))}
      <button onClick={() => window.location.reload()}>Generate ticket(s)</button>
    </div>
  );
}

export default Lotto;
