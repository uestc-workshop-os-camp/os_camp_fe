<template>
    <!-- 网站配色
    --background-color: #363dc2;
    --background-color-2: #282faf;
    --background-color-3: #202692; -->
    <!-- 可参考的动态背景js  https://github.com/codrops/MorphingBackgroundShapes/blob/master/js/demo1.js -->

    <!-- 这是背景后面那一坨 -->
    <div class="morph-wrap fixed z-0">
        <svg class="morph" width="1400" height="770" viewBox="0 -00 1400 770">
            <path class="" fill="#282faf"
                d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" />
        </svg>
    </div>

    <!-- 首页 -->
    <div
        class="content--layout content-wrap homePage w-full h-[50vh] lg:h-screen bg-[#363dc2] flex justify-center items-center flex-col -z-20">
        <!-- 首页头部 -->
        <div class="homePageTop flex w-full min-w-20 h-8 justify-between absolute top-0">
            <RouterLink to="/rank"
                class="rankButton bg-transparent w-auto min-w-10 h-auto text-white font-bold text-xl relative left-10 top-10 border-b-2 border-solid border-white hover:text-[#cdd0ff]">
                Visit Rank</RouterLink>
            <RouterLink to="/login"
                class="loginButton bg-transparent text-white font-bold right-10 text-xl relative top-10 z-10">
                Login</RouterLink>
        </div>

        <!-- 首页标题 -->
        <div class="homePageTitle w-auto h-auto  bg-transparent p-1 flex justify-center">
            <div class="content__img"><img src="/img/homePicNew.png" alt=""
                    class="relative left-1/5 bottom-10 z-0 shadow-2xl max-w-[350px] max-h-[350px]:"></div>
            <div class="title text-white relative left-5 z-10 w-3/4">
                <h1 class=" font-extrabold text-7xl relative right-48 mb-4 bottom-6">操作系统开源活动</h1>
                <div class="content__title overflow-hidden">
                    <div class="font-bold text-3xl">你可以得到：</div>
                    <div class="font-bold text-3xl">一次触碰前沿编程语言、最新机器架构的机会</div>
                    <div class="font-bold text-3xl">一次从零实现操作系统、培养计算机系统能力的经历</div>
                    <div class="font-bold text-3xl">一群志同道合、共同进步的朋友</div>
                    <div class="font-bold text-3xl mt-5"> 一路 | 微光 | YOLO | 嵌入式</div>
                </div>

            </div>
        </div>
    </div>

    <!-- 加入活动 -->
    <div class="p-4  joinPage w-full h-[40vh] lg:h-screen bg-[#363dc2] flex items-center flex-col ">
        <div class="z-10 w-full h-full flex items-center justify-center">
            <div class="text-white mr-4 lg:mr-24 flex items-start justify-center flex-col">
                <h1 class=" text-5xl font-bold relative mb-5">活动详情</h1>
                <div class="w-[38rem] mt-5 text-lg">
                    由多个工作室联合举办的为期2月的开源操作系统训练营活动，为对计算机底层感兴趣的同学提供一个学习平台。无论你是否接触过体系结构的项目，你能通过这个活动了解到你是否喜欢它，是否可能继续研究它。如果你已经计划走向计算机科学家的道路，那通过这个活动，你能积累更多知识，找到志同道合的伙伴。你亦可以通过参与举办这次活动的工作室的招新，成为多个工作室的成员。
                </div>
                <div class="w-[38rem] mt-2 text-lg">
                    活动本身取自清华大学面向社会的开源操作系统训练营，题目来自于清华大学计算机学院以及叉院的lab。意在推广清华大学的开源活动，已得到举办老师的支持。</div>
                <!-- <div class="text-xl mt-2">9.25-10.19 : rust学习</div>
                        <div class="text-xl mt-2">10.20-11.19 : rcore实验</div> -->
                <div class=" text-3xl font-bold mt-10">- Github<a href="https://github.com/uestc-workshop-os-camp"
                        class="border-b-2 hover:text-slate-200">报名链接</a></div>
                <div class=" text-2xl mt-5 font-bold">- 官方QQ群：735598360</div>
            </div>
            <img src="/img/chat.jpg" alt="" width="250px" class="rounded-md ml-2">
        </div>

    </div>

    <!-- 工作室页面 -->
    <div class="studioPage w-full lg:h-[500vh] bg-[#363dc2] flex items-center flex-col">
        <!-- 想做一个点击工作室logo下滑到对应位置的效果，还未实现 -->
        <div class="content-wrap w-full h-[40vh] lg:h-screen flex  items-center flex-col z-0">
            <h1 class=" text-white text-5xl font-bold mb-16 mt-20">成员工作室</h1>
            <div class="flex mt-24">
                <!-- 一路 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='/img/studio/yilu/logo.jpg' class="rounded-full"
                            width="250px"></div>
                    <a href="#yilu" class="content__link text-white font-lg text-2xl mt-10">一路工作室</a>
                </div>
                <!-- 微光 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='/img/studio/glimmer/logo.png' class="rounded-full"
                            width="250px"></div>
                    <a href="#weiguang" class="content__link text-white font-lg text-2xl mt-10">微光工作室</a>
                </div>
                <!-- yolo -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='/img/studio/yolo/logo.jpg' class="rounded-full"
                            width="250px"></div>
                    <a href="#yolo" class="content__link text-white font-lg text-2xl mt-10">YOLO工作室</a>
                </div>
                <!-- 嵌入式 -->
                <div class="studioLogo flex flex-col justify-center items-center">
                    <div class=" ml-5 mr-5 min-w-[100px]"><img src='/img/studio/embedded/logo.jpg' class="rounded-full"
                            width="250px"></div>
                    <a href="#qianrushi" class="content__link text-white font-lg text-2xl mt-10">嵌入式工作室</a>
                </div>
            </div>
        </div>
        <!-- 一路 -->
        <div id="yilu"
            class="content-wrap yilu w-full lg:w-3/4 h-[40vh] lg:h-screen p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full lg:min-h-[80vh] min-h-[30vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionYilu.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span :class="{ gradient: viewWidth > 980 }">
                                {{ introducionYilu.name }}</span>
                            🥏
                        </h2>
                    </div>
                </div>

                <!-- 折叠面板组件 -->
                <el-collapse v-model="yiluActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="ml-4 text-lg flex">
                            {{ introducionYilu.data1 }}
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="ml-4  text-lg">{{ introducionYilu.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="ml-4 text-xl">{{ introducionYilu.data3 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目成果✨" name="4">
                        <div class="ml-4 text-lg">{{ introducionYilu.data4 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionYilu.pic1Src" alt="111"
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYilu.pic2Src" alt="1111"
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <!-- <img :src="introducionYilu.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;"> -->
                </div>
            </el-card>
        </div>
        <!-- 微光 -->
        <div id="weiguang"
            class="content-wrap glimmer w-full lg:w-3/4 h-[40vh] lg:h-screen  p-20 bg-transparent text-white flex justify-center items-center text-left"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full  lg:min-h-[80vh] min-h-[30vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionGlimmer.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span :class="{ gradient: viewWidth > 980 }">
                                {{ introducionGlimmer.name }}</span>
                            ❄️
                        </h2>
                    </div>
                </div>

                <!-- 添加折叠面板组件 -->
                <el-collapse v-model="weiguangActiveName" accordion>
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="ml-4 text-lg">{{ introducionGlimmer.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="ml-4 text-lg">{{ introducionGlimmer.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="ml-4 text-lg">{{ introducionGlimmer.data3 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目成果✨" name="4">
                        <div class="ml-4 text-lg">{{ introducionGlimmer.data4 }}</div>
                    </el-collapse-item>
                </el-collapse>
                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionGlimmer.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionGlimmer.pic2Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionGlimmer.pic3Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
        <!-- YOLO -->

        <div id="yolo"
            class="content-wrap yilu w-full lg:w-3/4 h-[40vh] lg:h-screen  p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full lg:min-h-[80vh] min-h-[30vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionYolo.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span :class="{ gradient: viewWidth > 980 }">
                                {{ introducionYolo.name }}</span>
                            🍀
                        </h2>
                    </div>
                </div>

                <!-- 折叠面板组件 -->
                <el-collapse v-model="yoloActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="ml-4 text-lg">{{ introducionYolo.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="ml-4 text-lg">{{ introducionYolo.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="ml-4 text-xl">{{ introducionYolo.data3 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目成果✨" name="4">
                        <div class="ml-4 text-lg">{{ introducionYolo.data4 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionYolo.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYolo.pic2Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionYolo.pic3Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
        <!-- 嵌入式 -->
        <div id="qianrushi"
            class="content--related  embedded w-full lg:w-3/4 h-[40vh] lg:h-screen  p-20 bg-transparent text-white flex justify-center items-center"
            style="clip-path: url(#loginSvg);">
            <el-card class="box-card w-full lg:min-h-[80vh] min-h-[30vh]">
                <div class="studioText">
                    <div class="flex justify-between items-center">
                        <a :href="introducionEmbedded.website"
                            class="text-xl h-8 ml-6 border-b-2 hover:text-slate-300">官网访问</a>
                        <h2 class="font-bold text-5xl mb-6">
                            <span :class="{ gradient: viewWidth > 980 }">
                                {{ introducionEmbedded.name }}</span>
                            ⚙️
                        </h2>
                    </div>
                </div>

                <el-collapse v-model="qianrushiActiveNames" accordion="true">
                    <el-collapse-item title="工作室简介🪁" name="1">
                        <div class="ml-4 text-lg">{{ introducionEmbedded.data1 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="工作室文化🎯" name="2">
                        <div class="ml-4 text-lg">{{ introducionEmbedded.data2 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="研究方向🧐" name="3">
                        <div class="ml-4 text-xl">{{ introducionEmbedded.data3 }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目成果✨" name="4">
                        <div class="ml-4 text-lg">{{ introducionEmbedded.data4 }}</div>
                    </el-collapse-item>
                </el-collapse>

                <div class="studioPic flex justify-evenly p-4">
                    <img :src="introducionEmbedded.pic1Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionEmbedded.pic2Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                    <img :src="introducionEmbedded.pic3Src" alt=""
                        class="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style="width: 30%; height: auto;">
                </div>
            </el-card>
        </div>
    </div>
    <!-- 点击下滑按钮 -->
    <img v-if="pageNow != pageNum" @click="scrollDown" id="downButton" src="@/assets/svg/down.svg" alt="" width="45px"
        class=" fixed bottom-5 left-1/2 animate-bounce z-20">
</template>

<script setup>
// import { useRouter } from 'vue-router';
import { reactive, onMounted, ref } from 'vue';
import { demo1 } from '../utils/animate/demo1.js'
// const router = useRouter()
const viewWidth = ref(760)
onMounted(() => {
    viewWidth.value = window.innerWidth
    console.log("viewWidth: " + viewWidth.value)
    demo1()
    document.addEventListener('wheel', scrollHandler, { passive: false })
})

// 移动控制
const pageNow = ref(1)
const pageNum = 7;
let isScrolling = false;

function scrollHandler(event) {
    event.preventDefault()
    if (isScrolling == true) { return }
    isScrolling = true
    new Promise((resolve) => {
        if (event.deltaY < 0) {
            window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            if (pageNow.value > 1) { pageNow.value-- }
        }
        else if (event.deltaY > 0) {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            if (pageNow.value < pageNum) { pageNow.value++ }
        }
        setTimeout(() => { resolve() }, 500)
    }).then(() => { isScrolling = false; })
};
function scrollDown() {
    if (isScrolling == true) { return }
    isScrolling = true
    new Promise((resolve) => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        if (pageNow.value < pageNum) { pageNow.value++ }
        setTimeout(() => { resolve() }, 500)
    }).then(() => { isScrolling = false; })
}

// const studioLogo = reactive({
//     0: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: '一路工作室', },
//     1: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: '微光工作室', },
//     2: { srcImg: 'src/assets/img/studio/yilu/logo.jpg', name: 'YOLO工作室', },
//     3: { srcImg: 'src/assets/img/studio/embedded/logo.jpg', name: '嵌入式工作室', },
// })

const introducionYilu = reactive({
    name: '一路工作室',
    data1: '于2016年底正式成立，由戴瑞婷老师负责组建。工作室成立之初下属于学工部，服务于学院的各种需求而开发对应的Web系统，后归属于创新工坊，在服务于学院的同时参加各种比赛。',
    data2: '一路是一个自由的工作室，同学们收获知识共同进步，交流有关学习生活等等事情，还有许多特别热情且乐于助人的学长学姐，刚进入工作室的新同学也能快速融入。一路大家庭欢迎各类同学加入，如果你想要与优秀的同学共同勉励，一路会是你的不二之选。',
    data3: '工作室研究方向：前端 后端 机器学习 \n 工作室地点：沙河校区第三教学楼401',
    data4: '我们工作室的主要研究方向是Web系统开发，主要是前后端开发，其中包括前端Serverless，流量优化，防抖动策略，懒加载策略的研究等，后端则是关于高并发，微服务的研究。但我们又不局限于Web系统，微信小程序，10S开发也有所涉及和研究。 同时我们拓展了机器学习方向，提供学习资源，项目资源以及科研资源，欢迎大家的加入。 到目前为止，工作室接手过创新项目院级项目11项，校级项目8项。其中Web项目9 项，微信小程序6项。如智能助困系统，高校督导系统，成绩发布系统，舌尖沙河，活动预约系统。',
    website: '#',
    pic1Src: '/img/studio/yilu/pic1.jpg',
    pic2Src: '/img/studio/yilu/pic2.png',
})

const introducionGlimmer = reactive({
    name: '微光工作室',
    data1: '成立于 2012 年，前身“微软创新工作室”、“黑色之光工作室”。团队立足 IT 基础与底层架构相关技术，面向兴趣和前沿应用方向扩展，是技术氛围最浓厚、团队联系最紧密的工作室之一。',
    data2: '“心有微光，不惧黑暗”是我们的口号，也是微光工作室在发展中始终贯彻的信条。秉持“兴趣驱动，自由发展”的理念，我们乐于接收对不同技术方向感兴趣的朋友，善于探求未知的技术领域。工作室由一群热爱技术的 Geek 组成，力图召集志同道合，敢于创新的伙伴们共同拼搏，挑战自我。\n微光工作室技术氛围浓厚，学期内定期组织多场技术相关分享会活动，由工作室内有相关研究经验的同学对某项技术主题展开专题分享，激发工作室成员在相关领域的学习热情。针对成员的学习需求，工作室还不定期组织项目学习和任务指导，供成员自由学习参考。',
    data3: '作为研究氛围最自由的工作室之一，微光工作室并不限制团队成员的技术方向，而是鼓励成员以兴趣导向的积极进步寻找适合自己的领域。经过多年发展，工作室当前形成了以 IT 基础架构领域为中心的团队技术方向，并辅以上层应用和前沿领域技术推进，同时鼓励百花齐放的路线创新。\n目前团队在校成员在 OS 内核、云计算、编译技术、硬件设计、SDN 等方向均有研究进展与项目实现，毕业成员也多投身基础架构相关岗位和研究领域。除此之外，团队也拥有应用层web 开发、机器学习等成熟的技术组与培养路线，欢迎不同技术方向的同学与我们共同进步。',
    data4: '近期成果奖项：2022中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级一等奖 2020 中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级二等奖；2021 中国高校计算机大赛-网络技术挑战赛区域赛一等奖、国家级三等奖;    第十三届服务外部创新创业大赛西部区域赛一等奖、国家级二等奖；第十四届服务外部创新创业大赛西部区域赛一等奖、国家级三等奖;第十六届中国大学生计算机设计大赛 省级二等奖 x 1、省级三等奖 x 1;第十三、十四届蓝桥杯信息技术产业人才大赛 省级二等奖 x 2 + 省级三等奖 x 2;2021 中国高校计算机大赛-微信小程序应用开发赛区域一等奖、国家级三等奖;2020 中国高校计算机大赛-微信小程序应用开发赛区域二等奖',
    website: '#',
    pic1Src: '/img/studio/glimmer/pic1.png',
    pic2Src: '/img/studio/glimmer/pic2.png',
    pic3Src: '/img/studio/glimmer/pic3.png',
})

const introducionYolo = reactive({
    name: 'YOLO工作室',
    data1: '着眼当下，我们欢迎任何充满活力与创新力的新血液',
    data2: '指导老师：江维、詹瑾瑜；2021，2020，2019，2018级的众多优秀学长的亲自带领；三教403专属工位，除图书馆或者教室的又一选择；实习内推，就业指导，科研指路，你需要的，我们都有',
    data3: '成员风格各异，自由成长不受限，只要你能保持活力，无论是web开发，还是嵌入式底层研发，又或者海外留学与科研，总能绽放属于自己的光芒',
    data4: '主要科研项目：嵌入式AI与可信AI。工作室在智能嵌入式系统领域，发表了一系列高水平学术论文：“解决工业信息物理系统DNN安全性分层保护难题”，“提出DNN对抗强度和类型感知的检测防御方法”，“指出可解释驱动的DNN后门攻击防御方法”，“提出抗模型权重扰动的激活上界感知DNN容错方法”，“提出针对大数据存储节点的CPU-FPGA协同加速方法”等',
    website: '#',
    pic1Src: '/img/studio/yolo/pic1.jpg',
    pic2Src: '/img/studio/yolo/pic2.png',
    pic3Src: '/img/studio/yolo/pic3.png',
})

const introducionEmbedded = reactive({
    name: '嵌入式工作室',
    data1: '成立于2011年，是信软学院创新工坊历史最悠久的工作室之一，现已成长为信软学院旗下科创组织中数一数二的工作室。工作室以建立完善的“计算机体系结构"为宗旨，秉承"To Learn By Doing"的学习理念，以培养未来系统架构师、首席技术官为目标。',
    data2: '嵌入式工作室研究单片机与ARM-Linux开发、计算枳视觉、硬件电路设计、Linux系统级程序设计、FPGA、算法等。工作室在成立的八年里获得了诸多的成就。每一届都有极大比例的工作室成员前往Intel、大疆、腾讯、字节跳动、商汤、地平线、美团、旷视等国内外大型企业实习实训。还有百分之八十五的保研率与大量的校赛国赛国际比赛竞赛获奖。',
    data3: '嵌入式工作室现在每届约为二十人，我们在三教整个404以及部分405，为工作室成员提供良好的嵌入式开发环境，通过竞赛与项目来提升自己，带你深入了解计算机体系架构，从无到有的创造，从一块芯片到一个四轴飞行器，从一块开发板到一个自动避障小车，裁剪内核，定制系统。',
    data4: '巡线四轴无人机、Makepander太极熊创客教育、基于微信小程序的弹幕式课堂互动助手、智能枕芯项目等',
    website: '#',
    pic1Src: '/img/studio/embedded/pic1.png',
    pic2Src: '/img/studio/embedded/pic2.png',
    pic3Src: '/img/studio/embedded/pic3.png',
})

// 工作室介绍折叠面板
const yiluActiveNames = ref('1')
const weiguangActiveName = ref('1')
const yoloActiveNames = ref('1')
const qianrushiActiveNames = ref('1')
</script>
<style>
.el-card {
    background-color: rgba(0, 0, 0, 0.08) !important;
    border: hidden !important;
    color: white !important;
}

.el-collapse {
    --el-collapse-header-bg-color: rgba(0, 0, 0, 0.02) !important;
    --el-collapse-content-bg-color: rgba(0, 0, 0, 0.02) !important;
    border-bottom: hidden !important;
}

.el-collapse-item {
    button {
        color: white !important;
    }

    .el-collapse-item__content {
        color: white !important;
    }

    .el-collapse-item__header {
        font-size: 18px !important;

        border-bottom: hidden !important;
    }
}

.gradient {
    background-image: linear-gradient(to right top, #89ffff, #63b8f8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>