<template>
  <div>
    <div class="title">{{ name }}</div>
    <div style="display: table-row">
      <table border="1" style="border-collapse:collapse;border-color: #a0c6e5;" class="main-table">
        <thead class="lf-table-thead">
        <th v-if="rowSelection">
          <span>
              <input type="checkbox" class="lf-checkbox-input"
                     v-model="allSelected"
                     @change="selectedAll"/>
          </span>
        </th>
        <th v-for="item in columns" :key="item.key">
          <span>{{ item.title }}</span>
        </th>
        </thead>
        <tbody>
        <tr v-for="(dataItem,index) in dataSource" :key="index">
          <td v-if="rowSelection">
             <span>
              <input type="checkbox" class="lf-checkbox-input" v-model="dataItem.selected" @change="selectedItem"/>
             </span>
          </td>
          <td v-for="item in columns" :key="item.key">
            {{ dataItem[item.dataIndex] }}
          </td>
        </tr>
        </tbody>
        <tfoot v-if="showSummary">
        <slot name="summaryFooter"></slot>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'LfTable',
    data() {
      return {
        handledData: [],
        allSelected: false
      }
    },
    props: {
      dataSource: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        default: []
      },
      name: {
        type: String,
        required: true
      },
      showSummary: {
        type: Boolean,
        default: false
      },
      rowSelection: {
        type: Object
      }
    },
    created() {
      this.handledData = this.dataSource.map(
        item => {
          if (this.rowSelection) {
            item.selected = false
          }
          return item
        }
      )
    },
    methods: {
      selectedAll(e) {
        this.handledData = this.handledData.map(
          item => {
            item.selected = e.target.checked
            return item
          }
        )
        const selectedRows = this.handledData.filter(
          item => item.selected
        )
        this.rowSelection.onChange(selectedRows)
      },
      selectedItem(e) {
        this.allSelected = this.rowSelection && !this.handledData.find(item => !item.selected)
        const selectedRows = this.handledData.filter(
          item => item.selected
        )
        this.rowSelection.onChange(selectedRows)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    background-color: #00BCD4;
    color: white;
    height: 24px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .main-table {
    border: .2px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .65);
    .lf-table-thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tbody tr:hover {
      background: #00ff00;
    }
  }

  tr {
    text-align: center;
  }
</style>
