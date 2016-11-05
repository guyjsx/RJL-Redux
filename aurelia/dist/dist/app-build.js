"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      System.register("FileListToArrayValueConverter.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js"], function (a) {
        var b, c, d, e;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }], execute: function execute() {
            "use strict";
            d = function () {
              function a() {
                c(this, a);
              }return b(a, [{ key: "toView", value: function value(a) {
                  var b = [];if (!a) return b;for (var c = 0; c < a.length; c++) {
                    b.push(a[c]);
                  }return b;
                } }]), a;
            }(), a("FileListToArrayValueConverter", d), e = function () {
              function a() {
                c(this, a);
              }return b(a, [{ key: "toView", value: function value(a) {
                  return URL.createObjectURL(a);
                } }]), a;
            }(), a("BlobToUrlValueConverter", e);
          } };
      }), System.register("ObjectKeysValueConverter.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js"], function (a) {
        var b, c, d;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }], execute: function execute() {
            "use strict";
            d = function () {
              function a() {
                c(this, a);
              }return b(a, [{ key: "toView", value: function value(a) {
                  var b = [];for (var c in a) {
                    a.hasOwnProperty(c) && b.push(a[c]);
                  }return b;
                } }]), a;
            }(), a("ObjectKeysValueConverter", d);
          } };
      }), System.register("ObjectValuesValueConverter.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:babel-runtime@5.8.34/core-js/get-iterator.js"], function (a) {
        var b, c, d, e;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.default;
          }], execute: function execute() {
            "use strict";
            e = function () {
              function a() {
                c(this, a);
              }return b(a, [{ key: "toView", value: function value(a) {
                  var b = [],
                      c = !0,
                      e = !1,
                      f = void 0;try {
                    for (var g, h = d(a); !(c = (g = h.next()).done); c = !0) {
                      var i = g.value;b.push(i);
                    }
                  } catch (a) {
                    e = !0, f = a;
                  } finally {
                    try {
                      !c && h.return && h.return();
                    } finally {
                      if (e) throw f;
                    }
                  }return b;
                } }]), a;
            }(), a("ObjectValuesValueConverter", e);
          } };
      }), System.register("app.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.Router;
          }], execute: function execute() {
            "use strict";
            e = function () {
              function a(b) {
                c(this, a), this.router = b;var d = [];if ("undefined" != typeof userObj) if ("facilitator" !== userObj.role) var d = [{ route: ["", "home/"], moduleId: "home", nav: !0, title: "Home" }, { route: ["cases/"], moduleId: "cases", nav: !0, title: "Cases" }, { route: ["victim/"], moduleId: "victims", nav: !0, title: "Victims" }, { route: ["offender/"], moduleId: "offenders", nav: !0, title: "Offenders" }, { route: ["users/"], moduleId: "users", nav: !0, title: "Users" }];else if ("facilitator" == userObj.role) var d = [{ route: ["", "home/"], moduleId: "home", nav: !0, title: "Home" }, { route: ["cases/"], moduleId: "cases", nav: !0, title: "Cases" }];this.router.configure(function (a) {
                  a.title = "Parent", a.parent = "true", a.map(d);
                });
              }return b(a, null, [{ key: "inject", value: function value() {
                  return [d];
                } }]), b(a, [{ key: "activate", value: function value() {
                  "undefined" != typeof userObj && (this.user = userObj);
                } }]), a;
            }(), a("App", e);
          } };
      }), System.register("cases.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }], execute: function execute() {
            "use strict";
            f = function () {
              function a(a) {
                function b(a) {
                  var b = new RegExp(a + "=([^;]+)"),
                      c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                }c(this, f), this.http = a.configure(function (a) {
                  a.withHeader("X-CSRF-TOKEN", b("XSRF-TOKEN"));
                });
              }b(a, [{ key: "configureRouter", value: function value(a, b) {
                  var c = [];if ("undefined" != typeof userObj) if ("facilitator" !== userObj.role) var c = [{ route: ["", "cases/view"], moduleId: "view-case", nav: !0, title: "Case View" }, { route: ["create"], moduleId: "create-case", nav: !0, title: "Case Create" }, { route: ["edit"], name: "edit-case", moduleId: "edit-case", nav: !1, title: "Edit Case" }];else if ("facilitator" == userObj.role) var c = [{ route: ["", "cases/view"], moduleId: "view-case", nav: !0, title: "Case View" }, { route: ["edit/"], name: "edit-case", moduleId: "edit-case", nav: !1, title: "Edit Case" }];a.map(c), this.router = b;
                } }]);var f = a;return a = d(e)(a) || a;
            }(), a("Cases", f);
          } };
      }), System.register("child-nav-bar.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js"], function (a) {
        var b, c, d, e;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.Behavior;
          }], execute: function execute() {
            "use strict";
            e = function () {
              function a() {
                c(this, a);
              }return b(a, null, [{ key: "metadata", value: function value() {
                  return d.withProperty("router");
                } }]), a;
            }(), a("ChildNavBar", e);
          } };
      }), System.register("create-case.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "github:twbs/bootstrap@3.3.6/js/bootstrap.min.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.caseFieldData = [], this.victimFieldData = [], this.victimSearchResults = [], this.offenderSearchResults = [], this.offenderFieldData = [], this.selectedCharge = [], this.selectedFacilitator = [], this.victimCount = 0, this.data = [], this.http.get("/api/cases/create").then(function (b) {
                    a.charges = b.content.charges, a.facilitators = b.content.facilitators, a.caseFieldData = [b.content.caseFieldData], a.victimFieldMapping = b.content.victimFieldData, a.offenderFieldMapping = b.content.offenderFieldData;
                  });
                } }, { key: "addVictim", value: function value() {
                  this.newVictimFieldMapping = [], this.newVictimFieldMapping = $.extend(!0, {}, this.victimFieldMapping), this.victimFieldData.push(this.newVictimFieldMapping), this.victimCount++;
                } }, { key: "removeVictim", value: function value(a) {
                  this.victimFieldData.splice(a, 1);
                } }, { key: "addOffender", value: function value() {
                  this.newOffenderFieldMapping = [], this.newOffenderFieldMapping = $.extend(!0, {}, this.offenderFieldMapping), this.offenderFieldData.push(this.newOffenderFieldMapping), this.offenderCount++;
                } }, { key: "removeOffender", value: function value(a) {
                  this.offenderFieldData.splice(a, 1);
                } }, { key: "submitCase", value: function value() {
                  var a = this;this.data = { case: this.caseFieldData, victim: this.victimFieldData, offender: this.offenderFieldData, charge: this.selectedCharge, facilitator: this.selectedFacilitator }, this.http.post("/api/cases", this.data).then(function (b) {
                    console.log("done"), a.router.navigateToRoute("edit-case", { id: b.content.id });
                  });
                } }, { key: "setupCaseValidation", value: function value() {
                  var _rules;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#casesForm").validate({ onkeyup: !1, rules: (_rules = { caseId: { required: !0, remote: { url: "/api/cases/exists" } }, victimId: { required: !0, remote: { url: "/api/victim/exists" } }, offenderId: { required: !0, remote: { url: "/api/offender/exists" } }, caseStatus: { required: !0 }, courtDate: { required: !0, dateFormat: !0 }, charge: { required: !0 }, dateOfCharge: { required: !0, dateFormat: !0 }, dateOfReferral: { required: !0, dateFormat: !0 }, email: { email: !0 }, firstName: { required: !0 }, lastName: { required: !0 }, dateOfBirth: { required: !0, dateFormat: !0 }, streetAddress: { required: !0 }, city: { required: !0 }, state: { states: !0 }, zipCode: { required: !0 }, phoneOne: { required: !0 }, phoneOneType: { required: !0 }, phoneTwo: {} }, _rules["zipCode"] = { required: !0 }, _rules), messages: { caseId: { remote: "This Case ID already exists" }, victimId: { remote: "This Victim ID already exists" }, offenderId: { remote: "This Offender ID already exists" } }, submitHandler: function submitHandler(b) {
                      a.submitCase();
                    } });
                } }, { key: "attached", value: function value() {
                  this.setupCaseValidation(), $("#victimModal").on("show.bs.modal", function (a) {
                    var b = $(a.relatedTarget).data("index");$(a.currentTarget).find('input[name="modalVictimIndex"]').val(b);
                  }), $("#victimModal").on("hide.bs.modal", $.proxy(function (a) {
                    this.victimSearchResults = [];
                  }, this)), $("#offenderModal").on("show.bs.modal", function (a) {
                    var b = $(a.relatedTarget).data("index");$(a.currentTarget).find('input[name="modalOffenderIndex"]').val(b);
                  }), $("#offenderModal").on("hide.bs.modal", $.proxy(function (a) {
                    this.offenderSearchResults = [];
                  }, this));
                } }, { key: "victimSearch", value: function value(a, b, c) {
                  var d = this;return this.http.get("/api/victim/search?searchType=" + a + "&searchStr=" + b).then(function (a) {
                    d.victimSearchResults = a.content.victims, $("#victimModal").modal("show", $("#" + c));
                  });
                } }, { key: "offenderSearch", value: function value(a, b, c) {
                  var d = this;return this.http.get("/api/offender/search?searchType=" + a + "&searchStr=" + b).then(function (a) {
                    d.offenderSearchResults = a.content.offenders, $("#offenderModal").modal("show", $("#" + c));
                  });
                } }, { key: "populateVictim", value: function value(a) {
                  console.log("log");var b = "",
                      c = parseInt($('input[name="modalVictimIndex"]').val());for (b in this.victimFieldData[c]) {
                    this.victimFieldData[c][b].value = a[b];
                  }$("#victimModal").modal("hide");
                } }, { key: "populateOffender", value: function value(a) {
                  console.log("log");var b = "",
                      c = parseInt($('input[name="modalOffenderIndex"]').val());for (b in this.offenderFieldData[c]) {
                    this.offenderFieldData[c][b].value = a[b];
                  }$("#offenderModal").modal("hide");
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("CreateCase", i);
          } };
      }), System.register("create-offender.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "github:twbs/bootstrap@3.3.6/js/bootstrap.min.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.caseFieldData = [], this.offenderFieldData = [], this.selectedCase = [], this.data = [], this.http.get("/api/offender/create").then(function (b) {
                    a.cases = b.content.cases, a.offenderFieldData = [b.content.offenderFieldData];
                  });
                } }, { key: "submitOffender", value: function value() {
                  var a = this;this.data = { offender: this.offenderFieldData, cases: this.selectedCase }, this.http.post("/api/offender", this.data).then(function (b) {
                    console.log("done"), a.router.navigateToRoute("edit-offender", { id: b.content.id });
                  });
                } }, { key: "setupOffenderValidation", value: function value() {
                  var _rules2, _messages;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#offendersForm").validate({ onkeyup: !1, rules: (_rules2 = { caseId: { required: !0, remote: { url: "/api/cases/exists" } }, offenderId: { required: !0, remote: { url: "/api/offender/exists" } } }, _rules2["offenderId"] = { required: !0, remote: { url: "/api/offender/exists" } }, _rules2.caseStatus = { required: !0 }, _rules2.courtDate = { required: !0, dateFormat: !0 }, _rules2.charge = { required: !0 }, _rules2.dateOfCharge = { required: !0, dateFormat: !0 }, _rules2.dateClosed = { dateFormat: !0 }, _rules2.dateOfReferral = { required: !0, dateFormat: !0 }, _rules2.email = { email: !0 }, _rules2.firstName = { required: !0 }, _rules2.lastName = { required: !0 }, _rules2.dateOfBirth = { required: !0, dateFormat: !0 }, _rules2.streetAddress = { required: !0 }, _rules2.city = { required: !0 }, _rules2.state = { states: !0 }, _rules2.zipCode = { required: !0 }, _rules2.phoneOne = { required: !0 }, _rules2.phoneOneType = { required: !0 }, _rules2.phoneTwo = {}, _rules2["zipCode"] = { required: !0 }, _rules2), messages: (_messages = { caseId: { remote: "This Case ID already exists" }, offenderId: { remote: "This Offender ID already exists" } }, _messages["offenderId"] = { remote: "This Offender ID already exists" }, _messages), submitHandler: function submitHandler(b) {
                      a.submitOffender();
                    } });
                } }, { key: "attached", value: function value() {
                  this.setupOffenderValidation();
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("CreateCase", i);
          } };
      }), System.register("create-victim.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "github:twbs/bootstrap@3.3.6/js/bootstrap.min.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.caseFieldData = [], this.victimFieldData = [], this.selectedCase = [], this.data = [], this.http.get("/api/victim/create").then(function (b) {
                    a.cases = b.content.cases, a.victimFieldData = [b.content.victimFieldData];
                  });
                } }, { key: "submitVictim", value: function value() {
                  var a = this;this.data = { victim: this.victimFieldData, cases: this.selectedCase }, this.http.post("/api/victim", this.data).then(function (b) {
                    console.log("done"), a.router.navigateToRoute("edit-victim", { id: b.content.id });
                  });
                } }, { key: "setupVictimValidation", value: function value() {
                  var _rules3;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#victimsForm").validate({ onkeyup: !1, rules: (_rules3 = { caseId: { required: !0, remote: { url: "/api/cases/exists" } }, victimId: { required: !0, remote: { url: "/api/victim/exists" } }, offenderId: { required: !0, remote: { url: "/api/offender/exists" } }, caseStatus: { required: !0 }, courtDate: { required: !0, dateFormat: !0 }, charge: { required: !0 }, dateOfCharge: { required: !0, dateFormat: !0 }, dateClosed: { dateFormat: !0 }, dateOfReferral: { required: !0, dateFormat: !0 }, email: { email: !0 }, firstName: { required: !0 }, lastName: { required: !0 }, dateOfBirth: { required: !0, dateFormat: !0 }, streetAddress: { required: !0 }, city: { required: !0 }, state: { states: !0 }, zipCode: { required: !0 }, phoneOne: { required: !0 }, phoneOneType: { required: !0 }, phoneTwo: {} }, _rules3["zipCode"] = { required: !0 }, _rules3), messages: { caseId: { remote: "This Case ID already exists" }, victimId: { remote: "This Victim ID already exists" }, offenderId: { remote: "This Offender ID already exists" } }, submitHandler: function submitHandler(b) {
                      a.submitVictim();
                    } });
                } }, { key: "attached", value: function value() {
                  this.setupVictimValidation();
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("CreateCase", i);
          } };
      }), System.register("edit-case.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "npm:moment@2.15.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h, i, j;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }, function (a) {
            i = a.default;
          }], execute: function execute() {
            "use strict";
            j = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value(a) {
                  var b = this;return this.user = userObj, this.data = [], this.noteData = {}, this.notes = [], this.uploadedFiles = [], this.charges = [], this.facilitators = [], this.selectedCharge = [], this.selectedFacilitator = [], this.selectedCaseClose = [], this.selectedCaseManager = [], this.fileSuccess = 0, this.noteSuccess = 0, this.childIndex = 0, this.caseFieldData = [], this.offenderFieldData = [], this.selectedFiles = [], this.http.get("/api/cases/" + a.id + "/edit").then(function (a) {
                    if (b.data = a.content.data, b.uploadedFiles = b.data.files, b.notes = b.data.notes, b.data.caseClose = a.content.data.caseClose.toString(), b.data.user_id = a.content.data.user_id.toString(), b.notes) for (var c = 0; c < b.notes.length; c++) {
                      b.notes[c].noteDate = h(b.notes[c].noteDate).format("L");
                    }b.charges = a.content.chargesData, b.facilitators = a.content.facilitatorData;for (var c = 0; c < b.data.charges.length; c++) {
                      b.selectedCharge.push(b.data.charges[c].id);
                    }for (var c = 0; c < b.data.users.length; c++) {
                      b.selectedFacilitator.push(b.data.users[c].id);
                    }b.caseFieldData = [a.content.caseFieldData], b.victimFieldData = [a.content.victimFieldData], b.offenderFieldData = [a.content.offenderFieldData];
                  });
                } }, { key: "update", value: function value(a) {
                  this.http.put("/api/cases/" + a, this.data).then(function (a) {
                    window.location.reload(!0);
                  });
                } }, { key: "edit", value: function value() {
                  "facilitator" !== userObj.role && ($("input[readonly], textarea[readonly]").removeAttr("readonly"), $("select[disabled]").removeAttr("disabled"), $(".editOverlay").remove(), $(".inputField, .select2-container").removeClass("showEditIcon").unbind("mouseenter mouseleave"), $(".edit-button").removeClass("show-button"), $(".update-button").addClass("show-button"));
                } }, { key: "fileUpload", value: function value() {
                  function a(a) {
                    var b = new RegExp(a + "=([^;]+)"),
                        c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                  }this.fileData = new FormData(), this.fileData.append("file", this.selectedFiles[0]);var b = this;$.ajax({ url: "/api/file-upload?id=" + this.data.id, type: "POST", beforeSend: function beforeSend(b) {
                      b.setRequestHeader("X-CSRF-TOKEN", a("XSRF-TOKEN"));
                    }, data: this.fileData, cache: !1, dataType: "json", processData: !1, contentType: !1, complete: function complete(a) {
                      b.fileSuccess = 1, b.uploadedFiles.push(a.responseJSON.file), $("form[name='fileUploadForm']").trigger("reset");
                    } });
                } }, { key: "addNote", value: function value(a) {
                  var b = this;this.http.post("/api/note?id=" + a, this.noteData).then(function (a) {
                    console.log(a), b.showNoteSuccess(), a.content.note.noteDate = h(a.content.note.noteDate).format("L"), b.notes.push(a.content.note);
                  });
                } }, { key: "showNoteSuccess", value: function value() {
                  var a = this;a.noteSuccess = 1, setTimeout(function () {
                    a.noteSuccess = 0, $("#noteForm")[0].reset();
                  }, 2e3);
                } }, { key: "setupCaseValidation", value: function value() {
                  var _rules4;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return "" == a || null == a || a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#noteForm").validate({ rules: { noteDate: { required: !0, dateFormat: !0 } }, messages: {}, submitHandler: function submitHandler(b) {
                      a.addNote(a.data.id);
                    } }), $("#editCaseForm").validate({ onkeyup: !1, rules: (_rules4 = { caseId: { required: !0 }, victimId: { required: !0 }, offenderId: { required: !0 }, caseStatus: { required: !0 }, courtDate: { required: !0, dateFormat: !0 }, charge: { required: !0 }, dateOfCharge: { required: !0, dateFormat: !0 }, dateClosed: { dateFormat: !0 }, dateOfReferral: { required: !0, dateFormat: !0 }, email: { email: !0 }, firstName: { required: !0 }, lastName: { required: !0 }, dateOfBirth: { required: !0, dateFormat: !0 }, streetAddress: { required: !0 }, city: { required: !0 }, state: { states: !0 }, zipCode: { required: !0 }, phoneOne: { required: !0 }, phoneOneType: { required: !0 }, phoneTwo: {} }, _rules4["zipCode"] = { required: !0 }, _rules4), messages: {}, submitHandler: function submitHandler(b) {
                      a.update(a.data.id);
                    } });
                } }, { key: "parseDates", value: function value() {
                  for (var a = $('body [data-date="true"]'), b = 0; b < a.length; b++) {
                    console.log("hello");var c = $(a[b]),
                        d = c.val();if ("" !== d) {
                      var e = h(d).format("L");c.val(e);
                    }
                  }
                } }, { key: "setupEditableTable", value: function value() {
                  var a = this;$("#notesTable").on("click", ".editableInput", function (b) {
                    $(this).addClass("hide");var c = $(this).next();c.removeClass("hide"), $(c).focus();var d = this.dataset.index,
                        e = this.dataset.name,
                        f = a.notes[d].id;$(c).keydown(function (b) {
                      var c = this;if (27 == b.which) {
                        $(this).addClass("hide");var g = $(this).prev();g.removeClass("hide");
                      } else if (13 == b.which) {
                        var i = function () {
                          var b = function b(a) {
                            var b = new RegExp(a + "=([^;]+)"),
                                c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                          };return $.ajax({ url: "/api/note/" + f, context: c, method: "PUT", data: { name: e, value: c.value }, dataType: "json", beforeSend: function beforeSend(a) {
                              a.setRequestHeader("X-CSRF-TOKEN", b("XSRF-TOKEN"));
                            } }).done(function (b) {
                            $(this).addClass("hide");var c = $(this).prev(),
                                f = 1 == c.data().date;f && (b.note[e] = h(b.note[e]).format("L")), c.removeClass("hide");var g = a.notes[d];g[e] = b.note[e];
                          }), { v: !1 };
                        }();if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) return i.v;
                      }
                    });
                  });
                } }, { key: "deleteFile", value: function value(a, b) {
                  function c(a) {
                    var b = new RegExp(a + "=([^;]+)"),
                        c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                  }var d = this;$.ajax({ url: "/api/file-upload/" + a, context: this, method: "DELETE", dataType: "json", beforeSend: function beforeSend(a) {
                      a.setRequestHeader("X-CSRF-TOKEN", c("XSRF-TOKEN"));
                    } }).done(function (a) {
                    d.uploadedFiles.splice(b, 1);
                  });
                } }, { key: "attached", value: function value() {
                  $(".charge-select2-container .chargeSelect").val(this.selectedCharge).trigger("change"), $(".facilitator-select2-container .facilitatorSelect").val(this.selectedFacilitator).trigger("change"), $("#edit").on("select2:open", function () {
                    console.log("open");
                  }), this.parseDates(), this.setupCaseValidation(), this.setupEditableTable();
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("EditCase", j);
          } };
      }), System.register("edit-offender.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "npm:moment@2.15.1.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value(a) {
                  var b = this;return this.data = [], this.cases = [], this.selectedCase = [], this.childIndex = 0, this.selectedFiles = [], this.http.get("/api/offender/" + a.id + "/edit").then(function (a) {
                    b.data = a.content.data, b.cases = a.content.casesData;for (var c = 0; c < b.data.rj_cases.length; c++) {
                      b.selectedCase.push(b.data.rj_cases[c].id);
                    }b.offenderFieldData = [a.content.offenderFieldData];
                  });
                } }, { key: "update", value: function value(a) {
                  this.http.put("/api/offender/" + a, this.data).then(function (a) {
                    window.location.reload(!0);
                  });
                } }, { key: "edit", value: function value() {
                  $("input[readonly], textarea[readonly]").removeAttr("readonly"), $("select[disabled]").removeAttr("disabled"), $(".editOverlay").remove(), $(".inputField, .select2-container").removeClass("showEditIcon").unbind("mouseenter mouseleave"), $(".edit-button").removeClass("show-button"), $(".update-button").addClass("show-button");
                } }, { key: "setupOffenderValidation", value: function value() {
                  var _rules5;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#editOffenderForm").validate({ onkeyup: !1, rules: (_rules5 = { caseId: { required: !0 }, offenderId: { required: !0 } }, _rules5["offenderId"] = { required: !0 }, _rules5.caseStatus = { required: !0 }, _rules5.courtDate = { required: !0, dateFormat: !0 }, _rules5.charge = { required: !0 }, _rules5.dateOfCharge = { required: !0, dateFormat: !0 }, _rules5.dateClosed = { dateFormat: !0 }, _rules5.dateOfReferral = { required: !0, dateFormat: !0 }, _rules5.email = { email: !0 }, _rules5.firstName = { required: !0 }, _rules5.lastName = { required: !0 }, _rules5.dateOfBirth = { required: !0, dateFormat: !0 }, _rules5.streetAddress = { required: !0 }, _rules5.city = { required: !0 }, _rules5.state = { states: !0 }, _rules5.zipCode = { required: !0 }, _rules5.phoneOne = { required: !0 }, _rules5.phoneOneType = { required: !0 }, _rules5.phoneTwo = {}, _rules5["zipCode"] = { required: !0 }, _rules5), messages: {}, submitHandler: function submitHandler(b) {
                      a.update(a.data.id);
                    } });
                } }, { key: "parseDates", value: function value() {
                  for (var a = $('body [data-date="true"]'), b = 0; b < a.length; b++) {
                    console.log("hello");var c = $(a[b]),
                        d = c.val();if ("" !== d) {
                      var e = h(d).format("L");c.val(e);
                    }
                  }
                } }, { key: "attached", value: function value() {
                  $(".case-select2-container .caseSelect").val(this.selectedCase).trigger("change"), $("#edit").on("select2:open", function () {
                    console.log("open");
                  }), this.parseDates(), this.setupOffenderValidation();
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("EditOffender", i);
          } };
      }), System.register("edit-victim.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js", "npm:moment@2.15.1.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.default;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value(a) {
                  var b = this;return this.data = [], this.cases = [], this.selectedCase = [], this.childIndex = 0, this.selectedFiles = [], this.http.get("/api/victim/" + a.id + "/edit").then(function (a) {
                    b.data = a.content.data, b.cases = a.content.casesData;for (var c = 0; c < b.data.rj_cases.length; c++) {
                      b.selectedCase.push(b.data.rj_cases[c].id);
                    }b.victimFieldData = [a.content.victimFieldData];
                  });
                } }, { key: "update", value: function value(a) {
                  this.http.put("/api/victim/" + a, this.data).then(function (a) {
                    window.location.reload(!0);
                  });
                } }, { key: "edit", value: function value() {
                  $("input[readonly], textarea[readonly]").removeAttr("readonly"), $("select[disabled]").removeAttr("disabled"), $(".editOverlay").remove(), $(".inputField, .select2-container").removeClass("showEditIcon").unbind("mouseenter mouseleave"), $(".edit-button").removeClass("show-button"), $(".update-button").addClass("show-button");
                } }, { key: "setupVictimValidation", value: function value() {
                  var _rules6;

                  var a = this;$.validator.addMethod("dateFormat", function (a, b) {
                    return a.match(/^\d{2}\/\d{2}\/\d{4}$/);
                  }, "Please enter a date in the format MM/DD/YYYY"), $.validator.addMethod("states", function (a, b) {
                    return a.match(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/);
                  }, "Please enter a state in two letters, e.g., KY"), $("#editVictimForm").validate({ onkeyup: !1, rules: (_rules6 = { caseId: { required: !0 }, victimId: { required: !0 }, offenderId: { required: !0 }, caseStatus: { required: !0 }, courtDate: { required: !0, dateFormat: !0 }, charge: { required: !0 }, dateOfCharge: { required: !0, dateFormat: !0 }, dateClosed: { dateFormat: !0 }, dateOfReferral: { required: !0, dateFormat: !0 }, email: { email: !0 }, firstName: { required: !0 }, lastName: { required: !0 }, dateOfBirth: { required: !0, dateFormat: !0 }, streetAddress: { required: !0 }, city: { required: !0 }, state: { states: !0 }, zipCode: { required: !0 }, phoneOne: { required: !0 }, phoneOneType: { required: !0 }, phoneTwo: {} }, _rules6["zipCode"] = { required: !0 }, _rules6), messages: {}, submitHandler: function submitHandler(b) {
                      a.update(a.data.id);
                    } });
                } }, { key: "parseDates", value: function value() {
                  for (var a = $('body [data-date="true"]'), b = 0; b < a.length; b++) {
                    console.log("hello");var c = $(a[b]),
                        d = c.val();if ("" !== d) {
                      var e = h(d).format("L");c.val(e);
                    }
                  }
                } }, { key: "attached", value: function value() {
                  $(".case-select2-container .caseSelect").val(this.selectedCase).trigger("change"), $("#edit").on("select2:open", function () {
                    console.log("open");
                  }), this.parseDates(), this.setupVictimValidation();
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("EditVictim", i);
          } };
      }), System.register("home.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }], execute: function execute() {
            "use strict";
            f = function () {
              function a(a) {
                c(this, f), this.http = a;
              }b(a, [{ key: "configureRouter", value: function value(a, b) {
                  a.map([{ route: ["", "cases/view"], moduleId: "view-case", nav: !0, title: "Case View" }, { route: ["create"], moduleId: "create-case", nav: !0, title: "Case Create" }, { route: ["edit"], moduleId: "edit-case", nav: !1, title: "Edit Case" }]);
                } }, { key: "activate", value: function value() {} }, { key: "attached", value: function value() {} }]);var f = a;return a = d(e)(a) || a;
            }(), a("Home", f);
          } };
      }), System.register("main.js", ["github:twbs/bootstrap@3.3.6.js"], function (a) {
        "use strict";
        function b(a) {
          a.use.standardConfiguration().developmentLogging(), a.start().then(function (a) {
            return a.setRoot("app");
          });
        }return a("configure", b), { setters: [function (a) {}], execute: function execute() {} };
      }), System.register("nav-bar.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js"], function (a) {
        var b, c, d, e;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.Behavior;
          }], execute: function execute() {
            "use strict";
            e = function () {
              function a() {
                c(this, a);
              }return b(a, null, [{ key: "metadata", value: function value() {
                  return d.withProperty("router");
                } }]), a;
            }(), a("NavBar", e);
          } };
      }), System.register("offenders.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }], execute: function execute() {
            "use strict";
            f = function () {
              function a(a) {
                function b(a) {
                  var b = new RegExp(a + "=([^;]+)"),
                      c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                }c(this, f), this.http = a.configure(function (a) {
                  a.withHeader("X-CSRF-TOKEN", b("XSRF-TOKEN"));
                });
              }b(a, [{ key: "configureRouter", value: function value(a, b) {
                  a.map([{ route: ["", "offender/view/"], moduleId: "view-offenders", nav: !0, title: "Offender View" }, { route: ["create"], moduleId: "create-offender", nav: !0, title: "Offender Create" }, { route: ["edit"], name: "edit-offender", moduleId: "edit-offender", nav: !1, title: "Offender Edit" }]), this.router = b;
                } }]);var f = a;return a = d(e)(a) || a;
            }(), a("Offenders", f);
          } };
      }), System.register("tabs.js", ["npm:babel-runtime@5.8.34/helpers/define-decorated-property-descriptor.js", "npm:babel-runtime@5.8.34/helpers/create-decorated-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:jquery@2.2.1.js", "github:components/jqueryui@1.11.4.js"], function (a) {
        var b, c, d, e, f, g, h, i;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.default;
          }, function (a) {
            e = a.bindable, f = a.inject;
          }, function (a) {
            g = a.default;
          }, function (a) {
            h = a.tabs;
          }], execute: function execute() {
            "use strict";
            i = function () {
              function a(a) {
                d(this, i), b(this, "tabs", h), this.id = a.id;
              }var h = {},
                  h = {};c(a, [{ key: "tabs", decorators: [e], initializer: function initializer() {
                  return null;
                }, enumerable: !0 }], null, h), c(a, [{ key: "attached", value: function value() {
                  g("#" + this.id).tabs();
                } }], null, h);var i = a;return a = f(Element)(a) || a;
            }(), a("Tab", i);
          } };
      }), System.register("user-edit.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js", "github:jzaefferer/jquery-validation@1.15.0.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value(a) {
                  var b = this;return this.http.get("/api/user/" + a.id + "/edit").then(function (a) {
                    b.data = a.content.data, b.userFieldData = [a.content.userFieldData];
                  });
                } }, { key: "update", value: function value(a) {
                  this.http.put("/api/user/" + a, this.data).then(function (a) {
                    window.location.reload(!0);
                  });
                } }, { key: "edit",
                value: function value() {
                  $("input[readonly], textarea[readonly]").removeAttr("readonly"), $("select[disabled]").removeAttr("disabled"), $(".editOverlay").remove(), $(".inputField").removeClass("showEditIcon").unbind("mouseenter mouseleave"), $(".edit-button").removeClass("show-button"), $(".update-button").addClass("show-button");
                } }, { key: "attached", value: function value() {
                  $(".inputField, .textArea").hover(function () {
                    $(".inputField").addClass("showEditIcon");
                  }, function () {
                    $(".inputField").removeClass("showEditIcon");
                  });
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("EditUser", h);
          } };
      }), System.register("user-index.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:jquery@2.2.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.default;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a) {
                c(this, g), this.http = a;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.http.get("/api/users").then(function (b) {
                    a.users = b.content.data;
                  });
                } }, { key: "attached", value: function value() {
                  f("#userTable").dataTable({});
                } }]);var g = a;return a = d(e)(a) || a;
            }(), a("UserIndex", h);
          } };
      }), System.register("user-register.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:aurelia-router@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f, g;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.Router;
          }], execute: function execute() {
            "use strict";
            g = function () {
              function a(a, b) {
                c(this, g), this.http = a, this.router = b;
              }b(a, [{ key: "activate", value: function value() {
                  this.userData = { name: "", email: "", password: "", password_confirmation: "", role: "" }, this.errors = [], this.roles = [{ value: "facilitator", name: "Facilitator" }, { value: "casemanager", name: "Case Manager" }, { value: "caseadmin", name: "Case Admin" }, { value: "admin", name: "Admin" }];
                } }, { key: "attached", value: function value() {} }, { key: "registerUser", value: function value() {
                  var a = this;this.http.post("/register", this.userData).then(function (b) {
                    "false" == b.content.success ? a.errors = b.content.data : a.router.navigateToRoute("user-edit", { id: b.content.user.id });
                  });
                } }]);var g = a;return a = d(e, f)(a) || a;
            }(), a("UserRegister", g);
          } };
      }), System.register("users.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }], execute: function execute() {
            "use strict";
            f = function () {
              function a(a) {
                function b(a) {
                  var b = new RegExp(a + "=([^;]+)"),
                      c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                }c(this, f), this.http = a.configure(function (a) {
                  a.withHeader("X-CSRF-TOKEN", b("XSRF-TOKEN"));
                });
              }b(a, [{ key: "configureRouter", value: function value(a, b) {
                  a.map([{ route: [""], name: "user-index", moduleId: "user-index", nav: !0, title: "View All Users" }, { route: ["/register"], name: "user-register", moduleId: "user-register", nav: !0, title: "User Register" }, { route: ["/edit/"], name: "user-edit", moduleId: "user-edit", nav: !1 }]), this.router = b;
                } }]);var f = a;return a = d(e)(a) || a;
            }(), a("Users", f);
          } };
      }), System.register("victim-table.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:jquery@2.2.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.default;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a) {
                c(this, g), this.http = a;
              }b(a, [{ key: "activate", value: function value() {
                  this.victims = [{ victimId: "v1ID", firstName: "v1f", lastName: "v1l" }, { victimId: "v2ID", firstName: "v2f", lastName: "v2l" }];
                } }, { key: "attached", value: function value() {
                  f("#victimTable").dataTable({});
                } }, { key: "victimSearch", value: function value(a) {
                  f("#victimModal").modal("show");
                } }]);var g = a;return a = d(e)(a) || a;
            }(), a("VictimTable", h);
          } };
      }), System.register("victims.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js"], function (a) {
        var b, c, d, e, f;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }], execute: function execute() {
            "use strict";
            f = function () {
              function a(a) {
                function b(a) {
                  var b = new RegExp(a + "=([^;]+)"),
                      c = b.exec(document.cookie);return null != c ? unescape(c[1]) : null;
                }c(this, f), this.http = a.configure(function (a) {
                  a.withHeader("X-CSRF-TOKEN", b("XSRF-TOKEN"));
                });
              }b(a, [{ key: "configureRouter", value: function value(a, b) {
                  a.map([{ route: ["", "victim/view/"], moduleId: "view-victims", nav: !0, title: "Victim View" }, { route: ["create"], moduleId: "create-victim", nav: !0, title: "Victim Create" }, { route: ["edit"], name: "edit-victim", moduleId: "edit-victim", nav: !1, title: "Victim Edit" }]), this.router = b;
                } }]);var f = a;return a = d(e)(a) || a;
            }(), a("Victims", f);
          } };
      }), System.register("view-case.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:jquery@2.2.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.default;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a) {
                c(this, g), this.http = a;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.http.get("/api/cases").then(function (b) {
                    a.html = b.content.html;
                  });
                } }, { key: "attached", value: function value() {
                  f("#casesTable").dataTable();
                } }]);var g = a;return a = d(e)(a) || a;
            }(), a("ViewCase", h);
          } };
      }), System.register("view-offenders.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:jquery@2.2.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.default;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a) {
                c(this, g), this.http = a;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.http.get("/api/offender").then(function (b) {
                    a.html = b.content.html;
                  });
                } }, { key: "attached", value: function value() {
                  f("#offendersTable").dataTable();
                } }]);var g = a;return a = d(e)(a) || a;
            }(), a("ViewOffenders", h);
          } };
      }), System.register("view-victims.js", ["npm:babel-runtime@5.8.34/helpers/create-class.js", "npm:babel-runtime@5.8.34/helpers/class-call-check.js", "npm:aurelia-framework@1.0.0-beta.1.0.8.js", "npm:aurelia-http-client@1.0.0-beta.1.0.1.js", "npm:jquery@2.2.1.js", "npm:datatables@1.10.9.js"], function (a) {
        var b, c, d, e, f, g, h;return { setters: [function (a) {
            b = a.default;
          }, function (a) {
            c = a.default;
          }, function (a) {
            d = a.inject;
          }, function (a) {
            e = a.HttpClient;
          }, function (a) {
            f = a.default;
          }, function (a) {
            g = a.default;
          }], execute: function execute() {
            "use strict";
            h = function () {
              function a(a) {
                c(this, g), this.http = a;
              }b(a, [{ key: "activate", value: function value() {
                  var a = this;return this.http.get("/api/victim").then(function (b) {
                    a.html = b.content.html;
                  });
                } }, { key: "attached", value: function value() {
                  f("#victimsTable").dataTable();
                } }]);var g = a;return a = d(e)(a) || a;
            }(), a("ViewVictims", h);
          } };
      });
    }
  };
});
//# sourceMappingURL=app-build.js.map
