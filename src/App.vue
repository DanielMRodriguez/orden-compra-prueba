<template>
  <div class="container cart">
    <div class="row">
      <div class="col-12 py-2">
        <h1 class="text-primary">Mi carrito de compras</h1>
      </div>
      <div class="col-8">
        <h2 class="text-secondary">Carrito</h2>
        <p class="ml-auto mr-4 price-title">precio</p>
      </div>
      <hr />
      <div class="col-8">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
            <Product></Product>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <Product></Product>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <Product></Product
          ></a>
          <a href="#" class="list-group-item list-group-item-action">
            <Product></Product
          ></a>
          <a
            href="#"
            class="list-group-item list-group-item-action disabled"
            tabindex="-1"
            aria-disabled="true"
          >
            <Product></Product
          ></a>
        </div>
      </div>
      <div class="col-4">
        <Total />

        <Add-product />
      </div>
    </div>
  </div>
</template>

<script>
  // import Home from "./components/Home.vue";
  import Product from "./components/Product.vue";
  import Total from "./components/Total.vue";
  import AddProduct from "./components/Add-product.vue";

  export default {
    name: "App",
    components: { Product, Total, AddProduct },
    data: function() {
      return {
        products: [],
      };
    },
    computed: {
      total: function() {
        return 0;
      },
    },
    created() {
      const TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnAUsted`;
      const URL =
        "https://eshop-deve.herokuapp.com/api/v2/orders/2117155815564";

      var Header = new Headers({ Authorization: TOKEN });
      let requestInit = {
        method: "GET",
        headers: Header,
      };
      fetch(URL, requestInit);
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .cart {
    background: #f2f2f2;
  }
  .price-title {
    width: fit-content;
    font-weight: 700;
  }
</style>
