//data.js
//require the Elasticsearch librray
const elasticsearch = require('elasticsearch');
// 实例化一个Elasticsearch客户端
const client = new elasticsearch.Client({
    hosts: ['http://localhost:9200']
});
// ping客户端以确保Elasticsearch已启动
client.ping({
    requestTimeout: 30000,
}, function (error) {
    // 此时，eastic搜索已关闭，请检查您的Elasticsearch服务
    if (error) {
        console.error('Elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});


// data.js
// 创建一个名为scotch.io-tutorial的新索引。如果索引已经被创建，这个函数会安全地失败
client.indices.create({
      index: 'testSearch',
      body:{TheBody:"11111"},
  }, function(error, response, status) {
      if (error) {
          console.log(error);
      } else {
          console.log("created a new index,yyyyyyyyyyyyyyyyyyyyyyyyyeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!!!", response);
      }
});