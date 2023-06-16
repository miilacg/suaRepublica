import Header from './Header';
import Menu from './Menu';

import '../style/BaseTemplate.css';


function BaseTemplate(props) {

  return (
    <div className='baseTemplate'>      
      <Menu />
      <section>
        <Header titulo={props.titleHeader} />
        <main>{props.children}</main>
      </section>
    </div>
  );
}

export default BaseTemplate;