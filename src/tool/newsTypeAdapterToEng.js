let fnToChi=(oldType)=>{
    let newsType;
    switch (oldType) {
        case "热点新闻":
          newsType = "hot";
          break;
        case "新闻快讯":
          newsType = "quick";
          break;
        case "媒体白云":
          newsType = "media";
          break;
        case "学校通知":
          newsType = "notic";
          break;
      }
      return newsType;
} 
  export default fnToChi