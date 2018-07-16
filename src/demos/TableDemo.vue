<template>
  <div>
    <lf-table name="test"
              :dataSource="dataSource"
              :columns="columns"
              :rowSelection="rowSelection"
              showSummary>
      <template slot="summaryFooter">
        <td colspan="2"><span>合计:1020</span></td>
      </template>
    </lf-table>
  </div>
</template>

<script>
  import LfTable from '../lib/table/LfTable'

  export default {
    components: {
      LfTable
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataSource: [
          {
            'title': 'column1',
            'amount': 22
          },
          {
            'title': 'column2',
            'amount': 44
          }
        ],
        columns: [
          {
            'key': 'title',
            'title': '名称',
            'dataIndex': 'title'
          },
          {
            'key': 'amount',
            'title': '数量',
            'dataIndex': 'amount'
          }
        ],
        rowSelection: {
          onChange: (selectedRows) => {
            console.log(selectedRows)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
