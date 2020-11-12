const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });

const cloudinary = require("cloudinary").v2;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { element } = require("protractor");

const hash = (pass) => bcrypt.hashSync(pass, 10);

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});

// ULOAD.ANY(0) TAKES ANY TYPE OF DATA
app.post("/upload", upload.any(0), (req, res) => {
  // REQ.FILES[0].PATH GIVE US THE PATH FROM THE LOCAL FOLDER WITH FILE NAME
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    // UPLOAD IMG TO CLOUDINARY
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
  // THE RESPONSE WILL HAVE ALL THE DATA ABOUT THE UPLOADED IMG WE ONLY NEED THE URL FOR NOW
});

///////////////////////// Rgistration sTUDENT //////////////////////////////
app.post("/api/users/registration", (req, res) => {
  console.log("this is consol =>>>", req.body);
  var registerArray = [
    req.body.name,
    req.body.last,
    req.body.country,
    req.body.city,
    req.body.address,
    req.body.licence,
    req.body.dateOfBirth,
    req.body.placeOfBirth,
    req.body.nationality,
    req.body.educationlvl,
    req.body.field,
    req.body.postalcode,
    req.body.dreamJob,
    req.body.facebook,
    req.body.skills,
    req.body.languages,
    req.body.hobbies,
    req.body.image,
    req.body.summary,
    "false",
    req.body.username,
  ];
  db.registere(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//////////////////////// Registration COMPANY //////////////////////////////////////////

app.post("/api/users/registerCompany", (req, res) => {
  console.log("this is consol =>>>", req.body);

  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.field,
    req.body.numberOfEmployee,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    "false",
    req.body.name,
  ];
  db.registerCompany(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

////////////////////////////// Registration TRAINING CENTER /////////////////////////////////////

app.post("/api/users/registerTrainingCenter", (req, res) => {
  console.log("this is logo ", req.body.logo);
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.trainingOptions,
    req.body.numberOfStudent,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    "false",
    req.body.name,
  ];
  db.registerTrainingCenter(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

////////////////////////////// waiting for validation ///////////////////////////
app.post("/api/users/sendVerificationRequest", (req, res) => {
  var array = ["true", req.body.username];
  db.verificationRequest(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation company ///////////////////////////
app.post("/api/users/sendVerificationRequestCompany", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCompany(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation center ///////////////////////////
app.post("/api/users/sendVerificationRequestCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////////// Admin Side : Student Verification //////////////////
app.post("/api/users/verifyStudent", (req, res) => {
  var array = ["true", req.body.username];
  db.verifyStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectStudent", (req, res) => {
  var array = ["false", req.body.username];
  db.rejectStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side : Company Verififcation //////////////////////////////
app.post("/api/users/verifyCompanies", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCompanies", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side :Training Center /////////////////////////////////

app.post("/api/users/verifyCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCenter", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
///////////////////////////////////GET NON VERIFIED USERS///////////////////////////////////////////

app.get("/api/users/getNonVerifiedStudents", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedStudents();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCompanies", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCompany();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCenters", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});
//////////////// GET USER STATE ////////////
app.post("/api/users/getUsersatate", (req, res) => {
  console.log(req.body);
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCompanysatate", (req, res) => {
  console.log(req.body);
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCentersatate", (req, res) => {
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

// SIGN UP STUDENT
app.post("/addStudents", (req, res) => {
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email,
  ];
  db.addStudent(arr, (err, data) => {
    if (err) throw err;

    res.send(`${req.body.username} added succsesfully`);
  });
});

// LOG IN STUDENT

app.post("/login", (req, res) => {
  db.usernameAndEmail((err, data) => {
    if (err) throw err;
    myData = data.map((element) => Object.values(element)).flat();
    if (!myData.includes(req.body.username)) {
      res.send(false);
      return;
    }
    db.getUserInfo(req.body.username, (err, data) => {
      if (err) throw err;
      var boolean = bcrypt.compareSync(req.body.password, data[0].password);
      boolean
        ? jwt.sign(
            {
              username: req.body.username,
              password: data[0].password,
            },
            "privatekey",
            {
              expiresIn: "1h",
            },
            (err, token) => {
              err ? console.log(err) : res.status(200).json({ token: token });
              db.saveUserToken(req.body.username, token, (err, data) => {
                if (err) throw err;
                console.log(data);
              });
            }
          )
        : res.send(false);
    });
  });
});

app.post("/users/studentsName", (req, res) => {
  db.studentsMessage(req.body.data, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/addCompany", (req, res) => {
  var array = [req.body.name, hash(req.body.password), req.body.email];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginCompanies", (req, res) => {
  db.companyName((err, data) => {
    if (err) throw err;
    myData = data.map((element) => Object.values(element)).flat();
    if (!myData.includes(req.body.name)) {
      res.send(false);
      return;
    }
    db.logCompanies(req.body.name, (err, data) => {
      if (err) throw err;
      var boolean = bcrypt.compareSync(req.body.password, data[0].password);
      boolean
        ? jwt.sign(
            {
              username: req.body.name,
              password: data[0].password,
            },
            "privatekey",
            {
              expiresIn: "1h",
            },
            (err, token) => {
              err ? console.log(err) : res.status(200).json({ token: token });
              db.saveCompToken(req.body.name, token, (err, data) => {
                if (err) throw err;
                console.log(data);
              });
            }
          )
        : res.send(false);
    });
  });
});

app.post("/users/companyName", (req, res) => {
  db.companyMessage(req.body.data, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/addTC", (req, res) => {
  var array = [req.body.name, hash(req.body.password), req.body.email];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginTC", (req, res) => {
  db.checkTcName((err, data) => {
    if (err) throw err;
    myData = data.map((element) => Object.values(element)).flat();
    if (!myData.includes(req.body.name)) {
      res.send(false);
      return;
    }
    db.logTC(req.body.name, (err, data) => {
      if (err) throw err;
      var boolean = bcrypt.compareSync(req.body.password, data[0].password);
      boolean
        ? jwt.sign(
            {
              username: req.body.name,
              password: data[0].password,
            },
            "privatekey",
            {
              expiresIn: "1h",
            },
            (err, token) => {
              err ? console.log(err) : res.status(200).json({ token: token });
              db.saveTcToken(req.body.name, token, (err, data) => {
                if (err) throw err;
                console.log(data);
              });
            }
          )
        : res.send(false);
    });
  });
});

app.post("/users/tcName", (req, res) => {
  db.tcMessage(req.body.data, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////////// ADD TOKENS TO DATABASE //////////////
app.post("/api/users/studentToken", (req, res) => {
  db.selectUserByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/companyToken", (req, res) => {
  db.selectCompanyByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/TcToken", (req, res) => {
  db.selectTcByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/Update", (req, res) => {
  var token = req.body["2"];
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.username;
  });
  var obj = {};
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i];
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  db.updateUser(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

app.post("/api/users/findProfil", (req, res) => {
  var user = req.body.profilName;
  db.fetchAllProfile((err, data) => {
    if (err) throw err;
    var arrName = data.map((element) => Object.values(element)).flat();
    if (arrName.includes(user)) {
      db.fetchProfile(user, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else {
      res.send(`user dosen't exist`);
    }
  });
});

app.post("/api/company/Update", (req, res) => {
  console.log(req.body);
  var token = req.body["2"];
  console.log(token);
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.username;
    console.log(username);
  });
  var obj = {};
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i];
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  db.updateCompany(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

app.get("/api/posts", (req, res) => {
  db.getPosts((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/api/posts/addPost", (req, res) => {
  var array = [
    req.body.title,
    req.body.description,
    req.body.image,
    "training",
    req.body.owner,
    req.body.rate,
    req.body.salary,
    req.body.contact,
  ];
  var array2 = [req.body.newNumberOfPosts, req.body.idCenter];

  db.addPost(array, (err, data) => {
    err
      ? console.log(err)
      : db.updateNumberOfPosts(array2, (err, data) => {
          err ? console.log(err) : res.send(data);
        });
  });
});

app.post("/api/posts/delete", (req, res) => {
  var array = [req.body.id];
  db.deletePost(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/api/addPosts", (req, res) => {
  var postData = req.body["0"];
  console.log(postData);
  db.savePosts(postData, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

app.post("/api/center/update", (req, res) => {
  console.log(req.body);
  var token = req.body["2"];
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.username;
  });
  var obj = {};
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i];
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  db.updateTc(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

//get the company posts by the owner name

app.post("/api/sreachByOwner", (req, res) => {
  db.postsByOwner(req.body.owner, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//delete posts inside company profile using owner
app.post("/api/rmCompanyPosts", (req, res) => {
  console.log("id ==== >", req.body);
  db.delCompPosts(req.body.id, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//find company posts by id before modify
app.post("/api/upCompanyPost", (req, res) => {
  const id = req.body["2"];

  var obj = {};
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i];
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  console.log(obj);
  db.updateOnePost(id, obj, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

app.post("/api/users/postsTc", (req, res) => {
  var array = [req.body.owner];
  db.getPostsOfTc(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/api/update", (req, res) => {
  var arr = req.body;
  var obj1 = arr[0];
  var obj2 = arr[1];
  var arr1 = Object.values(obj1);
  var arr2 = Object.values(obj2);
  console.log(arr1, arr2);
  for (var i = 0; i < arr1.length; i++) {
    if (!arr1[i]) {
      arr1[i] = arr2[i];
    }
  }
  console.log(arr1);
  db.updatePost(arr1, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/posts/deleteTc", (req, res) => {
  var array = [req.body.id];
  db.deletePostTc(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/api/students", (req, res) => {
  db.getAllStudents((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/companies", (req, res) => {
  db.getAllCompanies((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/api/trainingCenters", (req, res) => {
  db.getAllTrainingCenters((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/ban/student", (req, res) => {
  var array = [req.body.id];
  db.banStudent(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/ban/company", (req, res) => {
  var array = [req.body.id];
  db.banCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/ban/training", (req, res) => {
  var array = [req.body.id];
  db.banCenter(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/api/student/apply", (req, res) => {
  var arr = Object.values(req.body);
  db.StApply(arr, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/api/getNotification", (req, res) => {
  var arr = [req.body.owner];
  db.getStudentApplication(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/api/deleteApply", (req, res) => {
  db.deleteApp(req.body.id, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/api/acceptapply", (req, res) => {
  console.log(req.body);
  usermail = "";
  db.bringMail(req.body.name, (err, data) => {
    err ? console.log(err) : (usermail = data[0].email);
  });
  db.acceptApp(req.body.id, (err, data) => {
    err
      ? console.log(err)
      : db.senderMail(usermail, req.body.name, req.body.compName);
  });
});

app.post("/api/users/numberOfPosts", (req, res) => {
  var id = req.body.id;
  db.getCenterNumberOfPostsAvailble(id, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/api/posts/weeklyPosts/siver", (req, res) => {
  db.weeklydataSilver((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/posts/weeklyPosts/gold", (req, res) => {
  db.weeklydataGold((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/posts/weeklyPosts/plat", (req, res) => {
  db.weeklydataPlat((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/PlatMembership", (req, res) => {
  var name = [req.body.name];
  db.changeMembershipToPlat(name, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/GoldMembership", (req, res) => {
  var name = [req.body.name];
  db.changeMembershipToGold(name, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//save users report to db

app.post("/api/users/Reports", (req, res) => {
  let obj = req.body;
  for (var key in obj) {
    if (!obj[key]) {
      obj[key] = "anonymous";
    }
  }
  console.log(obj);
  db.userReports(Object.values(obj), (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

//get the reports for the admin
app.get("/api/admin/getReports", (req, res) => {
  db.getReports((err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//delete one report for the admin
app.post("/api/admin/delReports", (req, res) => {
  console.log(req.body.id);
  db.delOneReport(req.body.id, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

//delete all report for the admin
app.delete("/api/admin/delAllReports", (req, res) => {
  db.delAllReports((err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

app.post("/api/report", (req, res) => {
  var report = [
    req.body.name,
    req.body.reason,
    req.body.comment,
    req.body.postId,
  ];
  db.reportSt(report, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/api/adminReports", (req, res) => {
  db.getReportsFromUser((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/users/coach", (req, res) => {
  db.getCoaches((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/addCoach", (req, res) => {
  var coach = [
    req.body.fullName,
    req.body.image,

    req.body.diplome,
    req.body.experience,
    req.body.about,
    req.body.email,
    req.body.number,
  ];
  db.addCoach(coach, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////////////// get all the trees ///////////////////////
app.get("/api/users/trees", (req, res) => {
  db.getTrees((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  tree ///////////////////////

app.post("/api/addTree", (req, res) => {
  var coach = [req.body.job, req.body.field];
  db.addTree(coach, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
////////////////////// get all the paths ///////////////////////

app.get("/api/users/paths", (req, res) => {
  db.getPaths((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  path ///////////////////////

app.post("/api/addPath", (req, res) => {
  var path = [
    req.body.name,
    req.body.stepOne,
    req.body.descOne,
    req.body.stepTwo,
    req.body.descTwo,
    req.body.stepThree,
    req.body.descThree,
    req.body.stepFour,
    req.body.descFour,
    req.body.stepFive,
    req.body.descFive,
    req.body.stepSix,
    req.body.descSix,
    req.body.stepSeven,
    req.body.descSeven,
    req.body.stepEight,
    req.body.descEight,
    req.body.stepNine,
    req.body.descNine,
    req.body.stepTen,
    req.body.descTen,
  ];
  db.addPath(path, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//////////////////////  get the PATHS by name //////////////////////

app.post("/api/users/onePaths", (req, res) => {
  db.pathsName(req.body.pathName, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////////////// get all the relations ///////////////////////
app.post("/api/users/relation", (req, res) => {
  db.getJoin(req.body.treeName, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  relation ///////////////////////

app.post("/api/addRelation", (req, res) => {
  var relation = [req.body.treeName, req.body.pathName];
  db.addrelation(relation, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////// POST AND GET COMMENT POST/////////////
app.post("/users/addComment", (req, res) => {
  var msg = [
    req.body.postId,
    req.body.username,
    req.body.postsText,
    req.body.imgUrl,
  ];
  db.postComments(msg, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/users/getComment", (req, res) => {
  db.getCommentsById(req.body.postId, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//check username in singUp students

app.post("/users/checkExistingNames", (req, res) => {
  db.checkExistingUsername(req.body.username, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//check username in singUp students
app.post("/users/checkNames", (req, res) => {
  db.checkUsername(req.body.username, (err, data) => {
    if (err) throw err;
    var usernames = data.map((element) => Object.values(element)).flat();
    res.send(usernames.includes(req.body.username));
  });
});

////////////////////// get all the trees ///////////////////////
app.get("/api/users/trees", (req, res) => {
  db.getTrees((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  tree ///////////////////////

app.post("/api/addTree", (req, res) => {
  var coach = [req.body.job, req.body.field];
  db.addTree(coach, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
////////////////////// get all the paths ///////////////////////

app.get("/api/users/paths", (req, res) => {
  db.getPaths((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  path ///////////////////////

app.post("/api/addPath", (req, res) => {
  var path = [
    req.body.name,
    req.body.stepOne,
    req.body.descOne,
    req.body.stepTwo,
    req.body.descTwo,
    req.body.stepThree,
    req.body.descThree,
    req.body.stepFour,
    req.body.descFour,
    req.body.stepFive,
    req.body.descFive,
    req.body.stepSix,
    req.body.descSix,
    req.body.stepSeven,
    req.body.descSeven,
    req.body.stepEight,
    req.body.descEight,
    req.body.stepNine,
    req.body.descNine,
    req.body.stepTen,
    req.body.descTen,
  ];
  db.addPath(path, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//////////////////////  get the PATHS by name //////////////////////

app.post("/api/users/onePaths", (req, res) => {
  db.pathsName(req.body.pathName, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////////////// get all the relations ///////////////////////
app.post("/api/users/relation", (req, res) => {
  db.getJoin(req.body.treeName, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////// POST A NEW  relation ///////////////////////

app.post("/api/addRelation", (req, res) => {
  var relation = [req.body.treeName, req.body.pathName];
  db.addrelation(relation, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

////////////// POST AND GET COMMENT POST/////////////
app.post("/users/addComment", (req, res) => {
  var msg = [
    req.body.postId,
    req.body.username,
    req.body.postsText,
    req.body.imgUrl,
  ];
  db.postComments(msg, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/users/getComment", (req, res) => {
  db.getCommentsById(req.body.postId, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//check username in singUp students

app.post("/users/checkExistingNames", (req, res) => {
  db.checkExistingUsername(req.body.username, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//check username in singUp students
app.post("/users/checkNames", (req, res) => {
  db.checkUsername(req.body.username, (err, data) => {
    if (err) throw err;
    var usernames = data.map((element) => Object.values(element)).flat();
    res.send(usernames.includes(req.body.username));
  });
});
app.post("/users/userSocialData", (req, res) => {
  console.log("this is loog ", req.body);
  var myData = [];
  db.checkForSocialLog((err, data) => {
    if (err) console.log(err);
    else {
      myData = data.map((element) => Object.values(element)).flat();
      if (myData.includes(req.body.name)) {
        db.getStudentsData(req.body.name, (err, data) => {
          err ? console.log(err) : res.send(data);
        });
      } else {
        var arr = [req.body.name, "", "", req.body.email, req.body.name];
        db.addStudentSociel(arr, (err, data) => {
          err
            ? console.log(err)
            : db.getStudentsData(req.body.name, (err, data) => {
                err ? console.log(err) : res.send(data);
              });
        });
      }
    }
  });
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
