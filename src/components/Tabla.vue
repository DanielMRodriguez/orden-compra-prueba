<template>
  <div class="row">
    <div class="col">
      <div class="card card-custom gutter-b">
        <div class="card-body py-0">
          <div class="table-responsive">
            <table class="table table-head-custom table-vertical-center">
              <thead>
                <tr class="text-center text-uppercase">
                  <th class="px-0">ID</th>

                  <th class="text-center text-uppercase">Solicitante</th>
                  <th class="text-center text-uppercase">fecha</th>
                  <th class="text-center text-uppercase">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr v-bind:key="index" v-for="(order, index) in orders">
                  <td class="pt-2 text-center">
                    <p class="text-center text-hover-primary mb-1">
                      {{ order.id }}
                    </p>
                  </td>
                  <td class="text-center">
                    <p class="text-center">{{ order.requestName }}</p>
                  </td>
                  <td>
                    <p class="text-center">{{ order.date }}</p>
                  </td>
                  <td class="text-center pr-0">
                    <router-link
                      v-bind:to="'/details/' + order.id"
                      class="btn btn-primary"
                      >Detalles</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrders } from '../services/servicesOrders.js'
export default {
  name: 'Tabla',
  data: function() {
    return {
      orders: []
    }
  },
  mounted() {
    // this.products = this.obtenerDatos().then(data => {
    //   if (data.error) {
    //     swal('Hubo un error al cargar los datos', 'error')
    //   }
    //   return data
    // })

    this.orders = getOrders()
    // console.log(this.products)

    // swal('Good job!', 'You clicked the button!', 'success')
  }
}
</script>
