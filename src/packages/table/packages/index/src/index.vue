<template>
  <div class="e-vue-table">
    <el-table
            :data="data"
            :height="option.height"
            :max-height="option.maxHeight"
            :stripe="option.stripe"
            :border="option.border"
            :size="option.size"
            :fit="option.fit || true"
            :style="option.style"
            :show-header="option.showHeader || true"
            :highlight-current-row="option.highlightCurrentRow"
            :current-row-key="option.currentRowKey"
            :row-class-name="option.rowClassName"
            :row-style="option.rowStyle"
            :cell-class-name="option.cellClassName"
            :cell-style="option.cellStyle"
            :header-row-class-name="option.headerRowClassName"
            :header-cell-class-name="option.headerCellClassName"
            :header-row-style="option.headerRowStyle"
            :header-cell-style="option.headerCellStyle"
            :row-key="option.rowKey"
            :empty-text="option.emptyText"
            :default-expand-all="option.defaultExpandAll"
            :expand-row-keys="option.expandRowKeys"
            :default-sort="option.defaultSort"
            :tooltip-effect="option.tooltipEffect"
            :show-summary="option.showSummary"
            :sum-text="option.sumText"
            :summary-method="option.summaryMethod"
            :span-method="option.spanMethod"
            :select-on-indeterminate="option.selectOnIndeterminate || true"
            :indent="option.indent"
            :lazy="option.lazy"
            :load="option.load"
            :tree-props="option.treeProps"
            @selection-change="selectionChange"
            @select="select"
            @select-all="selectAll"
            @sort-change="sortChange"
            @row-click="rowClick"
            @row-dblclick="rowDblclick"
            @cell-mouse-enter="cellMouseEnter"
            @cell-mouse-leave="cellMouseLeave"
            @cell-click="cellClick"
            @cell-dblclick="cellDblclick"
            @current-change="currentRowChange"
            @expand-change="expandChange"
    >

      <!-- 暂无数据提醒 -->
      <template slot="empty">
        <div>
          <slot name="empty"
                v-if="$slots.empty"></slot>
          <div v-else :desc="option.emptyText || '暂无数据'"></div>
        </div>
      </template>

      <el-table-column
              v-if="option.column.length"
              v-for="(item,index) in option.column"
              :key="index"
              :label="item.label"
      >
        <template slot-scope="scope">
          <span>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>

      <!--编辑区域-->
      <el-table-column
              align="right"
              :label="'操作'"
      >
        <!--<template slot="header" slot-scope="scope">
          <el-input size="mini" placeholder="输入关键字搜索"/>
        </template>-->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
