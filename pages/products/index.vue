<template>
  <div class="products-page">
    <div class="container" dir="ltr">
      <h1>{{ this.$store.state.products[0] }}</h1>
      <span class="has-text-centered">
        <i class="fa fa-car"></i>
      </span>
    </div>

    <!-- start loading -->
    <!-- <div
      v-if="loading"
      class="fixed flex justify-center items-center top-0 left-0 right-0 z-50 h-screen w-screen"
      style="background: rgba(0, 0, 0, 0)"
    >
      <i class="fas fa-spinner fa-pulse"></i>
    </div> -->
    <!-- end loading -->


    <!-- <body> -->
    <section class="section is-small" dir="rtl">
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen"
            v-for="(product, index) in this.$store.state.products"
            :key="index"
          >
            <div class="card card-equal-height">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="product.image" alt="a random image" />
                </figure>
              </div>
              <div class="card-content">
                <p class="title has-text-centered">{{ product.title }}</p>
                <div class="content">
                  <p>{{ product.description }}</p>
                </div>
              </div>
              <div class="card-footer">
                <p class="card-footer-item">
                  <span
                    >category <a href="#"> {{ product.category }} </a></span
                  >
                </p>
                <p class="card-footer-item">
                  <span>more <a href="#"> about</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- </body> -->
  </div>
</template>

<script>
export default {
  name: 'products',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.$store.dispatch('product').then((resp) => {
      resp.data
    })
  },
}
</script>

<style>
.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-equal-height .card-footer {
  margin-top: auto;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
}
.card img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  max-width: 96.5%;
  max-height: 96.5%;
  margin: 0 auto;
  margin-top: -3.5%;
}
</style>
