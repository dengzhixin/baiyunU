let fn=(oldType)=>{
    let newsType;
    switch (oldType) {
        case "hot":
          newsType = "热点新闻";
          break;
        case "quick":
          newsType = "新闻快讯";
          break;
        case "media":
          newsType = "媒体白云";
          break;
        case "notic":
          newsType = "学校通知";
          break;
      }
      return newsType;
} 
  export default fn