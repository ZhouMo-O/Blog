module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true
  });

  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    console.log(`创建数据`);
    console.log(req.body);
    res.send(model);
  });

  router.get("/", async (req, res) => {
    //管理查询
    console.log(`获取 ${req.params.resource} 列表`);
    const items = await req.Model.find()
      .populate("parent")
      .sort({
        date: "desc"
      });
    res.send(items);
  });

  router.get("/:id", async (req, res) => {
    console.log(`查找 ${req.params.resource} id为:${req.params.id}`);
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });

  app.get("/tagName/1", async (req, res) => {
    console.log("look it");
    res.send("11");
  });

  router.put("/:id", async (req, res) => {
    console.log(`修改 ${req.params.resource} id为:${req.params.id}`);
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(item);
  });

  router.delete("/:id", async (req, res) => {
    console.log(`删除 ${req.params.resource} id为:${req.params.id}`);
    await req.Model.findByIdAndDelete(req.params.id);
    res.send({
      success: true
    });
  });

  app.use(
    "/api/rest/:resource",
    async (req, res, next) => {
      const modeName = require("inflection").classify(req.params.resource);
      req.Model = require(`../../model/${modeName}`);
      console.log(req.Model);
      next();
    },
    router
  );

  //文件上传
  const multer = require("multer");
  const upload = multer({
    dest: __dirname + "/../uploads"
  });
  app.post("/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://www.blog5.net.cn/uploads/${file.filename}`;
    res.send(file);
  });
};
