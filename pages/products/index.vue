<template>
  <div class="products-page">
    <div class="container" dir="ltr">
      <h1>{{ this.$store.state.products[0] }}</h1>
    </div>

    <!-- start loading -->
    <div class="has-text-centered" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-5x"></i>
    </div>
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
            <nuxt-link to="">
              <div class="card card-equal-height">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img :src="product.image" alt="a random image" />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title has-text-centered title-card">
                    {{ product.title }}
                  </p>
                  <div class="content">
                    <p>{{ product.description }}</p>
                  </div>
                </div>
                <div class="card-footer" dir="ltr">
                  <p class="card-footer-item">
                    <!-- start cart -->
                    <nuxt-link to="">
                      <span> {{ $t('add_cart') }} </span>
                    </nuxt-link>
                    <!-- end cart -->
                  </p>
                  <p class="card-footer-item">
                    <!-- start show -->
                    <nuxt-link
                      :to="
                        localePath({
                          path: 'products/details/',
                          query: {
                            id: product.id,
                            image: product.image,
                            title: product.title,
                            description: product.description,
                            price: product.price,
                            category: product.category,
                          },
                        })
                      "
                    >
                      <span> {{ $t('show_detail') }} </span>
                    </nuxt-link>
                    <!-- end show -->
                  </p>
                </div>
              </div>
            </nuxt-link>
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
      loading: false,
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('product').then((resp) => {
      this.loading = false
      resp.data
    })
  },
}
</script>

<style>
.content {
  height: 55px;
  overflow: hidden;
}
.title-card {
  height: 80px;
  overflow: hidden;
}

.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 600px;
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
