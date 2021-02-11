import Classes from './WelcomeCards.module.css';
import sportImg from '../../assets/img/categories/1.jpg';
import basicImg from '../../assets/img/categories/2.jpg';
import classicImg from '../../assets/img/categories/3.jpg';
import trendImg from '../../assets/img/categories/4.jpg';

const welcomeCards = () => {
    return (
        <div className="row">
        <div className="col-lg-6 p-0">
          <div className={Classes.categories__item} style={{backgroundImage: `url(${sportImg})`, height: '101vh', backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className={Classes.categories__text}>
              <h4>Sports</h4>
              <p>Break your records</p>
              <a role="button" className="btn btn-sm" href="#">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className={Classes.categories__item} style={{backgroundImage: `url(${basicImg})`, height: '101vh', backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className={Classes.categories__text}>
                  <h4>Basics</h4>
                  <p>Essentials</p>
                  <a role="button" className="btn btn-sm" href="#">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className={Classes.categories__item} style={{backgroundImage: `url(${classicImg})`, height: '50vh', backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className={Classes.categories__text}>
                  <h4>Classics</h4>
                  <p>Formal Wear</p>
                  <a role="button" className="btn btn-sm" href="#">Explore</a>
                </div>
              </div>

                <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                  <div className={Classes.categories__item} style={{backgroundImage: `url(${trendImg})`, height: '50vh', backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                    <div className={Classes.categories__text}>
                      <h4>Trending</h4>
                      <p>New Styles</p>
                      <a role="button" className="btn btn-sm" href="#">Explore</a>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
}
export default welcomeCards;
