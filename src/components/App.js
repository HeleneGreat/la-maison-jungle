import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

import logo from '../assets/logo.png'
import Recommandation from './Recommendation'

function App() {
  return (
    <div>
      <Banner>
        <div className="lmj-banner-row">
          <img src={logo} alt="La maison jungle" className='lmj-logo'/>
          <h1 className='lmj-title'>La maison jungle</h1>
        </div>
        <Recommandation/>
      </Banner>

      {/* <Cart/> */}

      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
