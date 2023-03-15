import React from 'react';

const Blog = () => {
  return (
    <section class="section blog">
      <div class="container">
        <h2 class="h2 section-title">Latest fashion news</h2>

        <ul class="blog-list">
          <li>
            <div class="blog-card">
              <figure class="card-banner">
                <a href="#">
                  <img
                    src="./assets/images/blog-1.jpg"
                    alt="Worthy Cyber Monday Fashion From Casmart"
                    loading="lazy"
                    width="1020"
                    height="700"
                    class="w-100"
                  />
                </a>
              </figure>

              <div class="card-content">
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon name="folder-open-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      Fashion
                    </a>
                  </li>

                  <li class="card-meta-item">
                    <ion-icon name="time-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </a>
                  </li>
                </ul>

                <h3 class="h3 card-title">
                  <a href="#">Worthy Cyber Monday Fashion From Casmart</a>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure class="card-banner">
                <a href="#">
                  <img
                    src="./assets/images/blog-2.jpg"
                    alt="Holiday Home Decoration I’ve Recently Ordered"
                    loading="lazy"
                    width="1020"
                    height="700"
                    class="w-100"
                  />
                </a>
              </figure>

              <div class="card-content">
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon name="folder-open-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      Fashion
                    </a>
                  </li>

                  <li class="card-meta-item">
                    <ion-icon name="time-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </a>
                  </li>
                </ul>

                <h3 class="h3 card-title">
                  <a href="#">Holiday Home Decoration I’ve Recently Ordered</a>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div class="blog-card">
              <figure class="card-banner">
                <a href="#">
                  <img
                    src="./assets/images/blog-3.jpg"
                    alt="Unique Ideas for Fashion You Haven’t heard yet"
                    loading="lazy"
                    width="1020"
                    height="700"
                    class="w-100"
                  />
                </a>
              </figure>

              <div class="card-content">
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon name="folder-open-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      Fashion
                    </a>
                  </li>

                  <li class="card-meta-item">
                    <ion-icon name="time-outline"></ion-icon>

                    <a href="#" class="card-meta-link">
                      <time datetime="2021-03-31">31 Mar 2021</time>
                    </a>
                  </li>
                </ul>

                <h3 class="h3 card-title">
                  <a href="#">Unique Ideas for Fashion You Haven’t heard yet</a>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
