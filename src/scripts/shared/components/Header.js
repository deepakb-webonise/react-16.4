import React from 'react';
import { ViewStream } from './../Icons/icons.component';
const header = () => {
  return (
    <header className='matchupHeader'>
      <div className="container-fluid">
        <div className='row no-gutters'>
          <div className='col-3 headerNav'>
            <button className='navbar-toggler' type="button">
              <ViewStream></ViewStream>
            </button>
          </div>
          <div className='col-6 text-center headerLogo'>
            <a className='logo' href="/#">DRF Sports</a>
          </div>
          <div className='col-3 text-right headerLogin'>
            <button className='btn btn-icon' type="button">
              <i className="material-icons">person</i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;