<template>
  <div>
    <!-- start loading -->
    <div class="has-text-centered" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-5x"></i>
    </div>
    <!-- end loading -->
    <div class="container product-detail box" style="margin: 3%">
      <br />
      <div class="columns">
        <div
          class="column is-hidden-desktop is-1-tablet is-hidden-mobile"
        ></div>

        <div class="column is-5-desktop is-5-tablet is-12-mobile">
          <img
            :src="this.$store.state.productItem.image"
            alt="image"
            style="max-height: 500px"
          />
        </div>

        <div
          class="column is-7-desktop is-5-tablet is-12-mobile content-detail"
        >
          <dt style="font-size: 1.5em; text-transform: uppercase">
            <span class="is-pulled-right" style="font-size: 16px"> : {{ $t('product_name') }} </span>
            {{ this.$store.state.productItem.title }}
          </dt>
          <span class="is-pulled-right" style="font-size: 16px"> : {{ $t('product_category') }} </span>
          <dt style="font-size: 1.2em; text-transform: uppercase">{{this.$store.state.productItem.category}}</dt>
          <hr />
          <div class="price">
            <label for="price">$ </label>
            <span>{{this.$store.state.productItem.price}}</span>
            <br /><br />
          </div>

          <p style="font-size: 1.2em">
            {{ this.$store.state.productItem.description }}
          </p>
          <hr />
          <button class="button is-full is-warning"> {{ $t('add_to_cart') }} </button>
          <button class="button is-full is-primary"> {{ $t('buy_now') }} </button>
          <div
            class="column is-hidden-desktop is-1-tablet is-hidden-mobile"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('productItem', {id: this.$route.params.id}).then((resp)=>{
      this.loading = false
      resp.data
    })
  },
}
</script>

<style lang="scss">
.product-detail {
  .content-detail {
    text-align: left !important;
  }
  .discount {
    font-size: 1.2em;
    text-align: left;
    text-decoration: line-through;
  }
  .price {
    font-size: 1.7em;
    text-align: left;
  }
}
</style>
