import React from 'react';
import { Link } from 'react-router-dom';
import { arr } from '../../data/jsonTestData';
import './product.css';

const Products = () => {
  console.log(arr);
  return (
    <div>
      <section class="section product">
        <div class="container">
          <h2 class="h2 section-title">Products of the week</h2>

          <ul class="filter-list">
            <li>
              <button class="filter-btn  active">Best Seller</button>
            </li>

            <li>
              <button class="filter-btn">Hot Collection</button>
            </li>

            <li>
              <button class="filter-btn">Trendy</button>
            </li>

            <li>
              <button class="filter-btn">New Arrival</button>
            </li>
          </ul>

          <ul class="product-list">
            {arr.map((product) => {
              return (
                <li className="product-single-item">
                  <div class="product-card">
                    <figure class="card-banner">
                      <Link to={`/product/${arr.ID}`}>
                        <img
                          src={product.Images}
                          alt={product.Name}
                          loading="lazy"
                          width="800"
                          height="1034"
                          class="w-100"
                        />
                      </Link>

                      <div class="card-badge green">New</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <p>Add to Cart</p>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <Link to={`/product/${product.ID}`}>
                          {product['Name']}
                        </Link>
                      </h3>

                      <div class="card-price">
                        <data value={product['Regular price']}>
                          &#8377;{product['Regular price']}
                        </data>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-1.jpg"
                      src="https://ii2.pepperfry.com/media/catalog/product/k/i/494x544/kiosk-coffee-table-in-choco-walnut--by-a-globia-creations-kiosk-coffee-table-in-choco-walnut--by-a-g-34ibdb.jpg"
                      alt="Varsi Leather Bag"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-badge red"> -25%</div>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Kiosk Coffee Table in Choco Walnut Colour</a>
                  </h3>

                  <div class="card-price">
                    <data value="48.75">&#8377;3674.25</data>

                    <data value="65.00">&#8377;4,899</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      src="https://ii1.pepperfry.com/media/catalog/product/n/e/494x544/nen-shoe-cabinet-with-drawer-in-columbia-walnut-finish-by-valuewud-nen-shoe-cabinet-with-drawer-in-c-emqm25.jpg"
                      alt="Fit Twill Shirt for Woman"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-badge green"> New</div>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Nen Shoe Cabinet in Columbia Walnut Finish</a>
                  </h3>

                  <div class="card-price">
                    <data value="62.00">&#8377;6249</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-3.jpg"
                      src="https://ii1.pepperfry.com/media/catalog/product/a/k/494x544/akasuki-king-size-bed-in-walnut-finish-by-valuewud-akasuki-king-size-bed-in-walnut-finish-by-valuewu-9h0drs.jpg"
                      alt="Grand Atlantic Chukka Boots"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Akasuki King Size Bed in Walnut Finish</a>
                  </h3>

                  <div class="card-price">
                    <data value="32.00">&#8377;16249</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-4.jpg"
                      src="https://ii2.pepperfry.com/media/catalog/product/s/u/494x544/sutlej-solid-wood-4-seater-dining-set-in-antique-cherry-finish-by--home-sutlej-solid-wood-4-seater-d-suzynb.jpg"
                      alt="Women's Faux-Trim Shirt"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">
                      Sutlej Solid Wood 4 Seater Dining Set in Antique Cherry
                      Finish
                    </a>
                  </h3>

                  <div class="card-price">
                    <data value="84.00">&#8377;18810</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-5.jpg"
                      src="https://ii1.pepperfry.com/media/catalog/product/n/a/494x544/nanna-storage-cabinet-in-columbia-walnut-finish-by-mintwud-nanna-storage-cabinet-in-columbia-walnut--yces91.jpg"
                      alt="Soft Touch Interlock Polo"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Nanna Cabinet in Columbia Walnut Finish</a>
                  </h3>

                  <div class="card-price">
                    <data value="45.00">&#8377;6,499</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-6.jpg"
                      src="https://ii3.pepperfry.com/media/catalog/product/k/a/494x544/karl-solid-wood-sideboard-in-honey-oak-finish-by-woodsworth-karl-solid-wood-sideboard-in-honey-oak-f-4yltld.jpg"
                      alt="Casmart Smart Watch"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">
                      Karl Sheesham Wood Sideboard In Honey Oak Finish
                    </a>
                  </h3>

                  <div class="card-price">
                    <data value="30.00">&#8377;32399</data>

                    <data value="38.00">&#8377;41945</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-7.jpg"
                      src="https://ii1.pepperfry.com/media/catalog/product/d/e/494x544/derrick--study-table-in-frosty-white-finish-by-woodbuzz-derrick--study-table-in-frosty-white-finish--ceor5g.jpg"
                      alt="Casmart Smart Glass"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Derrick Hutch Desk in Frosty White Finish</a>
                  </h3>

                  <div class="card-price">
                    <data value="25.00">&#8377;15,595</data>

                    <data value="39.00">&#8377;17254</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      // src="./assets/images/product-8.jpg"
                      src="https://ii3.pepperfry.com/media/catalog/product/m/a/494x544/madison-executive-table-in-teak-finish-by-neudot-madison-executive-table-in-teak-finish-by-neudot-b6bzf8.jpg"
                      alt="Cotton Shirt for Men"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">Madison Executive Desk in Leon Teak Finish</a>
                  </h3>

                  <div class="card-price">
                    <data value="85.00">&#8377;25,899</data>

                    <data value="99.00">&#8377;27,754</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="product-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      src="https://ii1.pepperfry.com/media/catalog/product/m/e/236x260/meridian-offie-table-meridian-offie-table-88itiq.jpg"
                      alt="Double-breasted Blazer"
                      loading="lazy"
                      width="800"
                      height="1034"
                      class="w-100"
                    />
                  </a>

                  <div class="card-actions">
                    <button class="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="card-action-btn cart-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p>Add to Cart</p>
                    </button>

                    <button
                      class="card-action-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <h3 class="h4 card-title">
                    <a href="#">
                      Meridian Medium Executive Desk in Brown Finish
                    </a>
                  </h3>

                  <div class="card-price">
                    <data value="32.00">&#8377;78,957</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <button class="btn btn-outline">View All Products</button>
        </div>
      </section>
    </div>
  );
};

export default Products;
