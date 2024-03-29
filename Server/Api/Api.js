const user = require("../../model/User");
const openWrt = require("../../model/Oepnwrt");
const jwt = require("jsonwebtoken");

let configStatus = false;

class BlogRouter {
  //存储blog
  constructor(obj) {
    console.log(obj);
  }

  //user
  static async userLogin(req, res, next) {
    console.log(req.body);
    let { username, password } = req.body;
    let AdminUser = await user
      .findOne({
        username
      })
      .select("+password");
    if (!AdminUser) {
      res.status(422).send({
        message: "用户不存在"
      });
    }
    const InVaild = require("bcrypt").compareSync(password, AdminUser.password);
    if (!InVaild) {
      res.status(422).send({
        message: "密码错误"
      });
    }

    const token = jwt.sign(
      {
        id: AdminUser._id
      },
      "sometime"
    );
    res.end(token);
  }

  static async userRegister(req, res) {
    let model = await user.create(req.body);
    res.send(model);
  }

  static async findUser(req, res) {
    let AdminUser = await user.find().limit(10);
    res.send(AdminUser);
  }
  static async findOneUser(req, res) {
    console.log(req.params.id);
    let adminUser = await user.findOne({
      _id: req.params.id
    });
    console.log(adminUser);
    res.send(adminUser);
  }

  static async EditUser(req, res) {
    console.log(req.body);
    let Adminuser = await user.findByIdAndUpdate(req.params.id, req.body);
    if (Adminuser) {
      res.status(200).send({
        message: "修改密码成功"
      });
    } else {
      res.status(401).send({
        message: "修改密码失败"
      });
    }
  }

  static async authVerify(req, res) {
    console.log("权限校验"); //在外部我已经挂载了一个权限校验的中间件，所以权限校验甚至可以通过请求别的带有权限校验中间件的Api去实现，但是为了Api更加的合理，可读，
    //我才又写了一个Api即使这个Api里就一个console但是别人看起来就知道这个是用来给前端做权限验证的Api，而且后续也可以增加别的功能
  }

  static async errHandle(err, req, res, next) {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  }

  //openwrt
  static async openWrtEdit(req, res) {
    console.log(req.body);
    let model = await openWrt.create(req.body);
    res.send(model);
  }

  static async getOpenWrtConfig(req, res) {
    let config = await openWrt.find({}).lean(true);
    delete config[0]._id;
    delete config[0].__v;
    res.json(config[0]);
  }

  static async putOpenWrtConfig(req, res) {
    configStatus = true;
    let Adminuser = await openWrt.findOneAndUpdate(req.body.server, req.body);
    console.log(Adminuser);
    if (Adminuser) {
      res.status(200).send({
        message: "修改配置文件成功"
      });
    } else {
      res.status(401).send({
        message: "修改配置文件失败"
      });
    }
  }

  static async getOpenWrtConfigStatus(req, res) {
    res.send(configStatus);
    configStatus = false;
  }
}

module.exports.BlogRouter = BlogRouter;
