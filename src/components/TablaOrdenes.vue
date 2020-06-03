<template>
  <div class="row">
    <div class="col">
      <div class="card card-custom gutter-b">
        <div class="card-header border-0 py-5">
          <h1>Ordenes de compra</h1>
        </div>

        <div class="card-body py-0">
          <div class="table-responsive">
            <table
              class="table table-head-custom table-vertical-center"
              id="kt_advance_table_widget_3"
            >
              <thead>
                <tr class="text-left text-uppercase">
                  <th class="px-0" style="width: 50px">authors</th>

                  <th style="min-width: 120px">country</th>
                  <th class="text-info" style="min-width: 150px">company</th>
                  <th style="min-width: 150px">status</th>
                  <th class="pr-0" style="min-width: 160px">action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pl-0">
                    <a
                      href="#"
                      class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >Brad Simmons</a>
                    <span class="text-muted font-weight-bold text-muted d-block">HTML, JS, ReactJS</span>
                  </td>
                  <td>
                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Brasil</span>
                    <span class="text-muted font-weight-bold">Code: BR</span>
                  </td>
                  <td>
                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Intertico</span>
                    <span class="text-muted font-weight-bold">Web, UI/UX Design</span>
                  </td>
                  <td>
                    <div class="d-flex flex-column w-100 mr-2">
                      <div class="d-flex align-items-center justify-content-between mb-2">
                        <span class="text-muted mr-2 font-size-sm font-weight-bold">65%</span>
                        <span class="text-muted font-size-sm font-weight-bold">Progress</span>
                      </div>
                      <div class="progress progress-xs w-100">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 65%;"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right pr-0">
                    <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
                      <span class="svg-icon svg-icon-md svg-icon-primary"></span>
                    </a>
                    <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                      <span class="svg-icon svg-icon-md svg-icon-primary"></span>
                    </a>
                    <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
                      <span class="svg-icon svg-icon-md svg-icon-primary"></span>
                    </a>
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
export default {}
</script>
