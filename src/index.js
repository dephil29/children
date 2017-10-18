import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function IconButton({children}) {
  return (
    <button className="icon-button">
      <i className="fa fa-bullseye" />
      {children}
    </button>
  );
}

function Nav({children}) {
  let items = React.Children.toArray(children);

  for(let i = items.length -1; i >= 1; i--){
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
      );
    }
    return <div className="nav">{items}</div>
}

function Demo() {
  return (
    <div>
      <div style={{marginBottom: 20}}>
        <div style={{marginBottom: 10}}>
          <code>IconButton</code> with text:
        </div>
        <IconButton>Do Stuff</IconButton>
      </div>
      <IconButton>Do The Right Thing</IconButton>
      <Nav>
        <a href="https://google.com"></a>
        <a href="https://slack.com"></a>
      </Nav>
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById('root'));
