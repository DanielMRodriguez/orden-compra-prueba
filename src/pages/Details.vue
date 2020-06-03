<template>
  <div class="container-fluid cart pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 py-2">
          <h1 class="text-primary">Orden de compra</h1>
          <router-link to="/" class="btn btn-secondary">Volver</router-link>
        </div>
        <div class="col-8">
          <h2 class="text-secondary">Carrito</h2>

          <p class="ml-auto mr-4 price-title">precio por unidad</p>
        </div>
        <hr />
        <div class="col-8">
          <div class="list-group ">
            <div
              v-for="(item, index) in products"
              v-bind:key="item.sku"
              href="#"
              class="list-group-item list-group-item-action"
            >
              <Product
                v-bind:product="item"
                v-on:deleteProduct="deleteProduct"
                v-bind:index="index"
              ></Product>
            </div>
          </div>
        </div>
        <div class="col-4">
          <Total v-bind:total="total" />

          <Add-product v-on:addProduct="addProduct" />
        </div>
      </div>
      <footer class="row py-2">
        <div class="col-12 text-center">
          <a href="#">Aviso de privacidad</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import Total from '../components/Total.vue'
import AddProduct from '../components/Add-product.vue'
import { getOrder } from '../services/servicesOrders.js'
import swal from 'sweetalert'
export default {
  components: {
    Product,
    Total,
    AddProduct
  },
  data: function() {
    return {
      products: [
        {
          name: 'Cardor usb de 3m (M-M)"',
          quantity: 5,
          price: 100.0,
          sku: '69725'
        }
      ]
    }
  },
  computed: {
    total: function() {
      let total
      let acumula = 0.0
      if (this.products.length > 0) {
        this.products.forEach(product => {
          total += parseInt(product.quantity) * parseInt(product.priceN)

          total = product.quantity * product.price
          acumula = acumula + total
        })
      }
      return acumula
    }
  },
  mounted() {
    // this.products = this.obtenerDatos().then(data => {
    //   if (data.error) {
    //     swal('Hubo un error al cargar los datos', 'error')
    //   }
    //   return data
    // })

    this.products = getOrder(this.$route.params.id)

    // swal('Good job!', 'You clicked the button!', 'success')
  },
  methods: {
    addProduct: function(item) {
      // console.log(item)
      this.products.push(item)
    },
    // obtenerDatos: function() {
    //   return getOrder()
    // },
    deleteProduct: function(index) {
      swal({
        title: '¿Estas seguro que deseas eliminar este elemento?',
        text:
          'Cuando elimines este elemento tendrás que buscarlo de nuevo para poder agregarlo',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(response => {
        if (response) {
          this.products.splice(index, 1)
          swal('Eliminaste el producto', {
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
