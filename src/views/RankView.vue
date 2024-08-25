<template>
  <!-- 排行榜头部 -->
  <div class="rankHeader w-full h-[130px] bg-white border-solid border flex">
    <img src="@/assets/img/logo.png" alt="" class="z-10 absolute top-1 left-4 w-[165px]">
    <!-- 用户头像 -->
    <div class="myRepo absolute right-14 top-10 flex items-center">
      <div>hello, {{ userName }}</div>
      <img class="rounded-full ml-5 hover:scale-110" :src="userAvatar" width="55px">
    </div>
  </div>
  <!-- 排行榜部分 -->
  <div class="w-full flex items-center flex-col">
    <el-table :data="tableData" stripe row-class-name="h-14">
      <el-table-column type="index" label="排名" width="80" />
      <el-table-column prop="name" label="用户" width="200">
        <template #default="scope">
          <div class="flex items-center justify-start flex-row">
            <img :src="scope.row.avatar" width="30px" class="rounded-full" />
            <div class=" ml-4">{{ scope.row.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="总分" width="160" />
      <el-table-column prop="ch1" label="ch1" width="160" />
      <el-table-column prop="ch2" label="ch2" width="160" />
      <el-table-column prop="ch3" label="ch3" width="160" />
      <el-table-column prop="ch4" label="ch4" width="160" />
      <el-table-column prop="ch5" label="ch5" width="160" />
      <el-table-column prop="date" label="最后提交时间" />
    </el-table>
    <!-- 排行榜分页选项 -->
    <el-pagination class="flex justify-center mt-6" layout="prev, pager, next" :page-size="pageInfo.pageSize"
      :pager-count="pageInfo.pageCount" :current-page="pageInfo.pageNow.value" :total="pageInfo.pageTotal"
      @current-change="pageChange($event)" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 右上方用户头像
const userAvatar = "https://luvmand.top/img/head.png"
const userName = "Ari"
const defualtAvatar = "src/assets/svg/login.svg"

// 排名数据 一页十个人
const tableData = [
  {
    date: '2024-08-03',
    name: userName,
    score: '500',
    ch1: '500',
    ch2: '500',
    ch3: '500',
    ch4: '500',
    ch5: '500',
    avatar: userAvatar
  },
  {
    date: '2016-05-03',
    name: 'Sam',
    score: '450',
    ch1: '100',
    ch2: '100',
    ch3: '100',
    ch4: '100',
    ch5: '50',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    score: '100',
    ch1: '500',
    ch2: '500',
    ch3: '500',
    ch4: '500',
    ch5: '500',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Sam',
    score: '450',
    ch1: '100',
    ch2: '100',
    ch3: '100',
    ch4: '100',
    ch5: '50',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    score: '100',
    ch1: '500',
    ch2: '500',
    ch3: '500',
    ch4: '500',
    ch5: '500',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Sam',
    score: '450',
    ch1: '100',
    ch2: '100',
    ch3: '100',
    ch4: '100',
    ch5: '50',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    score: '100',
    ch1: '500',
    ch2: '500',
    ch3: '500',
    ch4: '500',
    ch5: '500',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Sam',
    score: '450',
    ch1: '100',
    ch2: '100',
    ch3: '100',
    ch4: '100',
    ch5: '50',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    score: '100',
    ch1: '500',
    ch2: '500',
    ch3: '500',
    ch4: '500',
    ch5: '500',
    avatar: defualtAvatar
  },
  {
    date: '2016-05-03',
    name: 'Sam',
    score: '450',
    ch1: '100',
    ch2: '100',
    ch3: '100',
    ch4: '100',
    ch5: '50',
    avatar: defualtAvatar
  },
]
// 分页选项配置
const pageInfo = reactive({
  pageSize: 10, // 每页人数
  pageCount: 5, // 选项数量
  pageTotal: tableData.length, // 数据总量
  pageNow: ref(1), // 设置当前页面
})
// 选择其他页面
const pageChange = (page) => {
  pageInfo.pageNow = page;
  // axios请求对应页码排名数据

}
</script>