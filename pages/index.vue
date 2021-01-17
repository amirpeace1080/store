<template>
  <div class="home-page is-white mt-3">
    <h1 class="title has-text-centered mt-5">{{ $t('welcom_site') }}</h1>

    <p class="subtitle mt-3 p-lorem" dir="rtl">{{ $t('lorem') }}</p>

    <div class="has-text-centered" dir="rtl">
      <button class="button is-danger">
        <i class="fa fa-arrow-left ml-2"></i>
        {{ $t('ok') }}
      </button>
    </div>

    <!-- start slider -->
    <div class="main-slider mt-5 mb-5">
      <div class="m-slider">
        <div class="carousel">
          <input type="radio" id="carousel-1" name="carousel[]" checked />
          <input type="radio" id="carousel-2" name="carousel[]" />
          <input type="radio" id="carousel-3" name="carousel[]" />
          <input type="radio" id="carousel-4" name="carousel[]" />
          <input type="radio" id="carousel-5" name="carousel[]" />
          <ul class="carousel__items">
            <li class="carousel__item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/45139b2d6457e2082f95ccf76275554bce43e0ae_1610721602.jpg?x-oss-process=image/quality,q_80"
                alt=""
                style="height: 420px"
              />
            </li>
            <li class="carousel__item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a48a79e95b7086f1eb80890c053c08f7fb37c288_1610352949.jpg?x-oss-process=image/quality,q_80"
                alt=""
                style="height: 420px"
              />
            </li>
            <li class="carousel__item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1610281203.jpg?x-oss-process=image/quality,q_80"
                alt=""
                style="height: 420px"
              />
            </li>
            <li class="carousel__item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a71806fea4d53b98a4b6853dd44304aa3214a47e_1610013213.jpg?x-oss-process=image/quality,q_80"
                alt=""
                style="height: 420px"
              />
            </li>
            <li class="carousel__item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1b920b268ff6171b01fea0d8453ca857f6bfb92f_1610439616.jpg?x-oss-process=image/quality,q_80"
                alt=""
                style="height: 420px"
              />
            </li>
          </ul>
          <div class="carousel__prev">
            <label for="carousel-1"></label>
            <label for="carousel-2"></label>
            <label for="carousel-3"></label>
            <label for="carousel-4"></label>
            <label for="carousel-5"></label>
          </div>
          <div class="carousel__next">
            <label for="carousel-1"></label>
            <label for="carousel-2"></label>
            <label for="carousel-3"></label>
            <label for="carousel-4"></label>
            <label for="carousel-5"></label>
          </div>
          <div class="carousel__nav">
            <label for="carousel-1"></label>
            <label for="carousel-2"></label>
            <label for="carousel-3"></label>
            <label for="carousel-4"></label>
            <label for="carousel-5"></label>
          </div>
        </div>
      </div>
    </div>
    <!-- end slider -->

    <!-- start shopping-1 -->
    <div class="mr-5">
      <p class="title has-text-right mr-5" style="margin-top: 100px">
        {{ $t('recent_popular_products') }}
      </p>
    </div>
    <div class="main-shop1">
      <div class="container-shop">
        <div class="grid">
          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>1200</h2>
            <h1 class="card-title">iPhone Х</h1>
            <p class="details-btn">{{ $t('click_to_view') }}</p>
            <div class="card-image-container">
              <img
                src="https://clipart-db.ru/file_content/rastr/smartphone_025.png"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>

          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>800</h2>
            <h1 class="card-title">Samsung r8</h1>
            <p class="details-btn">{{ $t('click_to_view') }}</p>
            <div class="card-image-container">
              <img
                src="http://purepng.com/public/uploads/large/purepng.com-android-smartphonepersonal-computersmartphonemobile-operating-systemcellular-phoneandroid-1701528391092ypwe7.png"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>

          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>750</h2>
            <h1 class="card-title">HUAWAI 5</h1>
            <p class="details-btn">{{ $t('click_to_view') }}</p>
            <div class="card-image-container">
              <img
                src="https://www.pngarts.com/files/3/Smartphone-PNG-High-Quality-Image.png"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>

          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>470</h2>
            <h1 class="card-title">Samsung A2</h1>
            <p class="details-btn"> {{ $t('click_to_view') }} </p>
            <div class="card-image-container">
              <img
                src="https://i.warosu.org/data/lit/img/0115/80/1533609351327.png"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>

          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>520</h2>
            <h1 class="card-title">iPhone 5s</h1>
            <p class="details-btn">{{ $t('click_to_view') }}</p>
            <div class="card-image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1200px-IPhone_5.png"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>

          <div class="card-container">
            <h2 class="card-price"><span class="currency">$</span>680</h2>
            <h1 class="card-title">Samsung S8+</h1>
            <p class="details-btn">{{ $t('click_to_view') }}</p>
            <div class="card-image-container">
              <img
                src="https://avatars.mds.yandex.net/get-pdb/805781/76eb6370-4ebd-4bfb-9694-b210d0a9b190/orig"
                alt=""
              />
            </div>
            <i class="fas fa-cart-plus cart-btn"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- end shopping-1 -->

    <!-- start shopping-2 -->
    <div class="main-shop2">

    </div>
    <!-- end shopping-2 -->
    
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-shop1 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-shop {
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 40px;
}

.project-title {
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 100;
  margin-top: 100px;
  font-size: 40px;
  opacity: 0.3;
  text-transform: uppercase;
}

.card-container {
  height: 400px;
  width: 300px;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  background: #fafafa;
  cursor: pointer;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.3s;
}

.card-title {
  position: absolute;
  bottom: 65px;
  width: 100%;
  text-align: center;
  color: #2f3640;
  opacity: 0.9;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
}

.details-btn {
  position: absolute;
  opacity: 0;
  width: 100%;
  bottom: 30px;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 5px;
  color: #2f3640;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  transition: ease-in-out 0.3s;
  animation: slide-out-right 1.4s;
}

.details-btn:after {
  content: '';
  position: absolute;
  width: 30px;
  top: 7px;
  right: 50px;
  height: 2px;
  opacity: 0.7;
  border-bottom: 1px solid #2f3640;
}

.details-btn:before {
  content: '';
  position: absolute;
  width: 30px;
  top: 7px;
  left: 50px;
  height: 2px;
  opacity: 0.7;
  border-bottom: 1px solid #2f3640;
}

.card-price {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #4f4f4f;
}

.card-price > .currency {
  position: absolute;
  font-size: 16px;
  top: 6px;
  left: -12px;
}

.card-container:hover {
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.45);
}

.card-container:hover .details-btn {
  opacity: 0.7;
  animation: slide-in-left 0.6s;
}

.card-image-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  margin: 0 auto;
}

.card-image-container > img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(0.5);
  transition: ease-in-out 0.6s;
  opacity: 0.9;
}

.card-container:hover img {
  transform: scale(0.55);
  opacity: 1;
}

.cart-btn {
  opacity: 0;
  position: absolute;
  top: 16px;
  padding: 10px;
  left: 20px;
  font-size: 22px;
  color: #bdbdbd;
  transition: ease-in-out 0.3s;
  animation: slide-out-left 0.62s;
}

.card-container:hover .cart-btn {
  opacity: 1;
  animation: slide-in-left 0.62s;
}

.cart-btn:hover {
  cursor: pointer;
  color: #27ae60;
}

@media (max-width: 1200px) {
  .container {
    max-width: 760px;
  }

  .project-title {
    font-size: 30px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 780px) {
  .container {
    max-width: 380px;
  }

  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@keyframes slide-in-left {
  0% {
    transform: translate3d(-300px, 0, 0);
  }
  20% {
    transform: translate3d(-300px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-out-left {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-300px, 0, 0);
  }
}

@keyframes slide-out-right {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(300px, 0, 0);
  }
}

.p-lorem {
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
}

.m-slider {
  margin-right: 50px;
  margin-left: 50px;
}
/**
 * Carousel.sass
 * @author: Dang Van Thanh
 * @github: https://github.com/dangvanthanh/carousel.sass
 * @description: A Simple Carousel Pure CSS Using Sass
 * @version: 1.0.0
 */
%animation-default {
  opacity: 1 !important;
  z-index: 3;
}

@mixin carousel($items, $animation: 'default') {
  .carousel {
    width: 100%;
    height: 430px;
    position: relative;
    overflow: hidden;

    > input[type='radio'] {
      position: absolute;
      left: 0;
      opacity: 0;
      top: 0;

      &:checked {
        ~ .carousel__items .carousel__item,
        ~ .carousel__prev > label,
        ~ .carousel__next > label {
          opacity: 0;
        }
      }

      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ .carousel__items .carousel__item {
              @if $animation == 'default' {
                &:nth-child(#{$i}) {
                  opacity: 1;
                }
              }
            }

            ~ .carousel__prev {
              > label {
                @if $i == 1 {
                  &:nth-child(#{$items}) {
                    @extend %animation-default;
                  }
                } @else if $i == $items {
                  &:nth-child(#{$items - 1}) {
                    @extend %animation-default;
                  }
                } @else {
                  &:nth-child(#{$i - 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~ .carousel__next {
              > label {
                @if $i == $items {
                  &:nth-child(1) {
                    @extend %animation-default;
                  }
                } @else {
                  &:nth-child(#{$i + 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~ .carousel__nav {
              > label {
                &:nth-child(#{$i}) {
                  background: #ccc;
                  cursor: default;
                  pointer-events: none;
                }
              }
            }
          }
        }
      }
    }

    &__items {
      margin: 0;
      padding: 0;
      list-style-type: none;
      width: 100%;
      height: 600px;
      position: relative;
    }

    &__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: opacity 2s;
      -webkit-transition: opacity 2s;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    &__prev,
    &__next {
      > label {
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        opacity: 0;
        z-index: 2;

        &:hover,
        &:focus {
          opacity: 0.5 !important;
        }

        &:before,
        &:after {
          content: '';
          position: absolute;
          width: inherit;
          height: inherit;
        }

        &:before {
          background: linear-gradient(
              to top,
              #fff 0%,
              #fff 10%,
              rgba(51, 51, 51, 0) 10%
            ),
            linear-gradient(to left, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%);
          width: 60%;
          height: 60%;
          top: 20%;
        }
      }
    }

    &__prev {
      > label {
        left: 2%;

        &:before {
          left: 35%;
          top: 20%;
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }
      }
    }

    &__next {
      > label {
        right: 2%;

        &:before {
          left: 10%;
          transform: rotate(315deg);
          -webkit-transform: rotate(315deg);
        }
      }
    }

    &__nav {
      position: absolute;
      bottom: 3%;
      left: 0;
      text-align: center;
      width: 100%;
      z-index: 3;

      > label {
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 0.125%;
        width: 20px;
        height: 20px;
      }
    }
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  background: #fcfcfc;
  margin: 0;
}

.container {
  width: 900px;
  min-width: 900px;
  margin: 50px auto;
}

@include carousel(5);
</style>
