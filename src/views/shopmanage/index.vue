<template>
    <div class="shop">
        <div class="dq">
            当前位置：商品管理 > 显示商品
        </div>
        <div class="shop_show">
            <div class="shop_show_div1">
                <div class="shop_show_div1_letf">
                    <el-button type="primary" style="border:0;background-color: #06BFC3;">新建测评计划</el-button>
                </div>
                <div class="shop_show_div1_right">
                    <el-input v-model="keyword" prefix-icon="iconfont el-icon-search" style="width: 200px;"></el-input>
                    <el-button type="primary" style="border:0;margin-left: 10px;background-color: #06BFC3;">查询
                    </el-button>
                </div>
            </div>
            <div class="shop_show_div2">
            <el-table :data="temp.slice((page-1)*size,size*page)" :header-cell-style="{textAlign: 'center'}" :cell-style="{ textAlign: 'center' }">
                    <el-table-column style="width: auto;" v-for="col in columns" :prop="col.name" sortable :key="col.id" :label="col.label">
                    </el-table-column>
                    <el-table-column label="操作">
                        <span>数据</span> •
                        <span style="cursor: pointer;">修改</span> •
                        <span style="cursor: pointer;">删除</span>
                    </el-table-column>
                </el-table>
                <el-pagination
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                :current-page="page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="temp.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { getList } from '@/api/table'
    export default {
        name: "shopmanage",
        data() {
            return {
                keyword: "",
                temp: [],
                columns: [
                    {
                        id: 1,
                        name: "g_id",
                        label: "商品ID"
                    },
                    {
                        id: 2,
                        name: "g_name",
                        label: "商品名称"
                    },
                    {
                        id: 3,
                        name: "g_price",
                        label: "商品价格"
                    },
                    {
                        id: 4,
                        name: "g_type",
                        label: "商品类型"
                    },
                    {
                        id: 5,
                        name: "g_info1",
                        label: "商品信息"
                    }
                ],
                page:1,
                size:10,
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                getList().then(response => {
                    this.temp = response.data;
                })
            },
            handleCurrentChange(val){
                this.page = val;
            },
            handleSizeChange(val) {
                this.size = val
            },
        },
    }
</script>

<style lang="scss" scoped>
    .shop {
        padding: 0px 30px;
        background-color: #EDF0F5;
        height: auto;

        .dq {
            color: #00BCBA;
            background-color: white;
            margin-bottom: 15px;
            line-height: 40px;
            padding: 0px 15px;
            position: relative;
            top: 20px;
        }

        .shop_show {
            margin-top: 40px;
            background-color: white;
            padding: 15px;

            .shop_show_div1 {
                display: flex;

                .shop_show_div1_right {
                    flex: 1;
                    text-align: right;
                }
            }

            .shop_show_div2 {
                margin-top: 20px;
            }
        }
    }
</style>