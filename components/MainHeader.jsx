export function MainHeader() {
  return (<div className="main-header">
    <div className="p-10 mx-auto col-span-12">
      <div className="flex pt-20 pb-16 main-header__title">
        <div className="page-title">
          <h1 className="chakra-heading css-6zdeqh">All Products</h1>
          <p className="pt-1">A 360° look at Lumin</p>
        </div>
        <div className="shop-filter">
          <div className="luminskin-select__wrapper--fullwidth">
            <select className="">
              <option disabled>
                Filter by
              </option>
              <option value="all-products">All Products</option>
              <option value="new-products">New Products</option>
              <option value="sets">Sets</option>
              <option value="skincare">Skincare</option>
              <option value="hair-and-body">Hair &amp; Body Care</option>
              <option value="accessories">Accessories</option>
            </select>
            <div className="luminskin-select__icon-wrapper--fullwidth">
              <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style={{
                width: "1em",
                height: "1em",
                color: "currentColor"
              }}>
                <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>);
}
