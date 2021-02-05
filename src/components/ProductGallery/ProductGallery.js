import Classes from './ProductGallery.module.css';

const productGallery = () => {
  return(
    <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className={(Classes.section_title)}>
            <h4>Product Gallery</h4>
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <ul className={(Classes.filter__controls)}>
            <li className="active" data-filter="*">All</li>
            <li data-filter=".women">Sport</li>
            <li data-filter=".men">Basics</li>
            <li data-filter=".kid">Classics</li>
            <li data-filter=".accessories">New Arrivals</li>
            <li data-filter=".cosmetic">Sales</li>
          </ul>
        </div>
    </div>
  );
}

export default productGallery;