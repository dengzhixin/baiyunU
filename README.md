
## 简介

 baiyunU是一个基于VUE全家桶的在线集成富文本新闻编辑器、新闻预备草稿储存、新闻正式发布与浏览管理的一个新闻系统

技术栈：vue-cli + vue2.0 + vuex + vue-router + axios + element-ui + wangeditor
[源码传送门](https://github.com/dengzhixin/baiyunU)

## 项目核心流程图
![image.png](https://dengzhixin-halo.oss-cn-shenzhen.aliyuncs.com/halo/image_1583067464309.png?x-oss-process=style/pic)

## 系统页面详细设计
### 首页

页面结构：
- 白云学院Logo及海报展示
- 全站的新闻导览搜索
- 支持动态更新的海报
- 最新的新闻列表展示
- 管理员的登录及进入后台面板
- 底部基础信息展示

页面功能：
为游客提供界面良好、分类清晰的最新的新闻列表浏览和搜索，为管理员提供便利的后台管理入口。
![](https://dengzhixin-halo.oss-cn-shenzhen.aliyuncs.com/halo/image_1583067532333.png?x-oss-process=style/pic)


### 管理员后台新闻管理页面
页面结构：
- 侧边功能导航
- 新闻管理

页面功能：
为管理员提供新闻管理、新闻发布、新闻草稿管理功能
![](https://dengzhixin-halo.oss-cn-shenzhen.aliyuncs.com/halo/image_1583067575851.png?x-oss-process=style/pic)
### 管理员后台新闻发布页面

页面结构：
- 侧边功能导航
- 新闻标题填写、新闻类型选择
- 富文本编辑器
- 保存为草稿、立即发布功能按钮


页面功能：
填写新闻标题新闻类别，发布或保存新闻
![](https://dengzhixin-halo.oss-cn-shenzhen.aliyuncs.com/halo/image_1583067749492.png?x-oss-process=style/pic)
